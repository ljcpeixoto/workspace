#!/usr/bin/env node

/**
 * Demo script for JPA Entity Viewer
 * 
 * This script demonstrates the core functionality of the Electron app
 * without requiring a display/GUI environment.
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

class JpaEntityViewerDemo {
    constructor() {
        this.selectedFiles = new Set();
        this.currentAnalysis = null;
    }

    async addFiles(filePaths) {
        console.log(`\n📁 Adding ${filePaths.length} files...`);
        filePaths.forEach(file => {
            this.selectedFiles.add(file);
            console.log(`   + ${path.basename(file)}`);
        });
        
        await this.performAnalysis();
    }

    async addDirectory(dirPath) {
        console.log(`\n📂 Scanning directory: ${dirPath}`);
        
        // Simple directory scanning (in real app, this would be more sophisticated)
        const files = this.findJavaFiles(dirPath);
        console.log(`   Found ${files.length} Java files`);
        
        files.forEach(file => this.selectedFiles.add(file));
        await this.performAnalysis();
    }

    findJavaFiles(dirPath) {
        const files = [];
        
        function scanDir(dir) {
            try {
                const items = fs.readdirSync(dir);
                items.forEach(item => {
                    const fullPath = path.join(dir, item);
                    const stat = fs.statSync(fullPath);
                    
                    if (stat.isDirectory()) {
                        scanDir(fullPath);
                    } else if (item.endsWith('.java')) {
                        files.push(fullPath);
                    }
                });
            } catch (error) {
                console.warn(`   Warning: Cannot read directory ${dir}`);
            }
        }
        
        scanDir(dirPath);
        return files;
    }

    async performAnalysis() {
        if (this.selectedFiles.size === 0) {
            console.log('\n⚠️  No files to analyze');
            return;
        }

        console.log(`\n🔍 Analyzing ${this.selectedFiles.size} files...`);
        
        try {
            const filePaths = Array.from(this.selectedFiles);
            const result = await this.analyzeEntities(filePaths);
            
            this.currentAnalysis = result;
            this.displayResults();
        } catch (error) {
            console.error(`\n❌ Analysis failed: ${error.message}`);
        }
    }

    async analyzeEntities(filePaths) {
        return new Promise((resolve, reject) => {
            // Create temp directory
            const tempDir = path.join(__dirname, 'temp');
            if (!fs.existsSync(tempDir)) {
                fs.mkdirSync(tempDir, { recursive: true });
            }

            const outputFile = path.join(tempDir, `demo-analysis-${Date.now()}.json`);
            const analyzerPath = path.join(__dirname, 'src-analyzer/cli.ts');
            
            const args = ['analyze', ...filePaths, '-o', outputFile];
            
            const child = spawn('npx', ['ts-node', analyzerPath, ...args], {
                cwd: __dirname,
                stdio: ['pipe', 'pipe', 'pipe']
            });

            let stdout = '';
            let stderr = '';

            child.stdout.on('data', (data) => {
                stdout += data.toString();
            });

            child.stderr.on('data', (data) => {
                stderr += data.toString();
            });

            child.on('close', async (code) => {
                if (code === 0) {
                    try {
                        const analysisData = await fs.promises.readFile(outputFile, 'utf-8');
                        const result = JSON.parse(analysisData);
                        
                        // Clean up temp file
                        fs.unlinkSync(outputFile);
                        
                        resolve(result);
                    } catch (error) {
                        reject(new Error(`Failed to read analysis result: ${error.message}`));
                    }
                } else {
                    reject(new Error(`Analysis failed with code ${code}: ${stderr || stdout}`));
                }
            });

            child.on('error', (error) => {
                reject(new Error(`Failed to start analysis: ${error.message}`));
            });
        });
    }

    displayResults() {
        if (!this.currentAnalysis) {
            console.log('\n📊 No analysis results available');
            return;
        }

        const { entities, metadata } = this.currentAnalysis;

        console.log('\n' + '='.repeat(60));
        console.log('📊 ANALYSIS RESULTS');
        console.log('='.repeat(60));
        
        console.log(`\n📈 Summary:`);
        console.log(`   Entities: ${metadata.totalEntities}`);
        console.log(`   Relationships: ${metadata.totalRelationships}`);
        console.log(`   Source Files: ${metadata.sourceFiles.length}`);
        console.log(`   Analysis Date: ${new Date(metadata.analysisDate).toLocaleString()}`);

        console.log(`\n🏗️  Entities Found:`);
        entities.forEach((entity, index) => {
            console.log(`   ${index + 1}. ${entity.className}`);
            console.log(`      Package: ${entity.packageName}`);
            console.log(`      Table: ${entity.tableName || 'N/A'}`);
            console.log(`      Fields: ${entity.fields.length}`);
            console.log(`      Relationships: ${entity.relationships.length}`);
        });

        console.log(`\n🔗 Relationships:`);
        let relationshipCount = 0;
        entities.forEach(entity => {
            entity.relationships.forEach(rel => {
                relationshipCount++;
                console.log(`   ${relationshipCount}. ${entity.className}.${rel.fieldName} -> ${rel.targetEntity} (${rel.type})`);
            });
        });

        if (relationshipCount === 0) {
            console.log('   No relationships found');
        }
    }

    async exportAnalysis(filePath) {
        if (!this.currentAnalysis) {
            console.log('\n⚠️  No analysis data to export');
            return;
        }

        try {
            const data = JSON.stringify(this.currentAnalysis, null, 2);
            await fs.promises.writeFile(filePath, data, 'utf-8');
            console.log(`\n💾 Analysis exported to: ${filePath}`);
        } catch (error) {
            console.error(`\n❌ Export failed: ${error.message}`);
        }
    }

    clearFiles() {
        this.selectedFiles.clear();
        this.currentAnalysis = null;
        console.log('\n🗑️  All files cleared');
    }

    showStatus() {
        console.log('\n' + '='.repeat(60));
        console.log('📋 CURRENT STATUS');
        console.log('='.repeat(60));
        console.log(`Files selected: ${this.selectedFiles.size}`);
        console.log(`Analysis available: ${this.currentAnalysis ? 'Yes' : 'No'}`);
        
        if (this.selectedFiles.size > 0) {
            console.log('\nSelected files:');
            Array.from(this.selectedFiles).forEach((file, index) => {
                console.log(`   ${index + 1}. ${path.basename(file)}`);
            });
        }
    }
}

// Demo script
async function runDemo() {
    console.log('🚀 JPA Entity Viewer - Demo Mode');
    console.log('=====================================');
    
    const demo = new JpaEntityViewerDemo();
    
    // Demo 1: Add individual files
    console.log('\n📋 Demo 1: Adding individual files');
    const sampleFiles = [
        path.join(__dirname, '../examples/java/com/example/entities/User.java'),
        path.join(__dirname, '../examples/java/com/example/entities/Order.java')
    ];
    
    await demo.addFiles(sampleFiles);
    
    // Demo 2: Add a directory
    console.log('\n📋 Demo 2: Adding directory');
    const sampleDir = path.join(__dirname, '../examples/java/com/example/entities');
    await demo.addDirectory(sampleDir);
    
    // Demo 3: Export results
    console.log('\n📋 Demo 3: Exporting results');
    const exportPath = path.join(__dirname, 'demo-export.json');
    await demo.exportAnalysis(exportPath);
    
    // Demo 4: Show status
    demo.showStatus();
    
    // Demo 5: View different formats
    console.log('\n📋 Demo 4: Different view formats');
    
    if (demo.currentAnalysis) {
        console.log('\n🔍 Entities Only View:');
        console.log(JSON.stringify({ entities: demo.currentAnalysis.entities }, null, 2).substring(0, 500) + '...');
        
        console.log('\n🔍 Relationships Only View:');
        const relationships = [];
        demo.currentAnalysis.entities.forEach(entity => {
            entity.relationships.forEach(rel => {
                relationships.push({
                    sourceEntity: entity.className,
                    targetEntity: rel.targetEntity,
                    type: rel.type,
                    fieldName: rel.fieldName
                });
            });
        });
        console.log(JSON.stringify({ relationships }, null, 2));
    }
    
    console.log('\n✅ Demo completed successfully!');
    console.log('\n💡 To run the full GUI application:');
    console.log('   npm start');
    console.log('\n💡 To run in development mode:');
    console.log('   npm run dev');
}

// Run the demo
if (require.main === module) {
    runDemo().catch(error => {
        console.error('\n❌ Demo failed:', error.message);
        process.exit(1);
    });
}

module.exports = JpaEntityViewerDemo;