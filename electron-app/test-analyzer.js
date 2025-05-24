const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Test the analyzer integration
async function testAnalyzer() {
    console.log('Testing JPA analyzer integration...');
    
    // Create temp directory
    const tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
    }
    
    const outputFile = path.join(tempDir, 'test-analysis.json');
    const analyzerPath = path.join(__dirname, 'src-analyzer/cli.ts');
    
    // Test files from the main project
    const testFiles = [
        path.join(__dirname, '../examples/java/com/example/entities/User.java'),
        path.join(__dirname, '../examples/java/com/example/entities/Order.java'),
        path.join(__dirname, '../examples/java/com/example/entities/UserProfile.java')
    ];
    
    console.log('Analyzer path:', analyzerPath);
    console.log('Test files:', testFiles);
    console.log('Output file:', outputFile);
    
    const args = ['analyze', ...testFiles, '-o', outputFile];
    
    return new Promise((resolve, reject) => {
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
            console.log(`Analysis process exited with code: ${code}`);
            console.log('STDOUT:', stdout);
            console.log('STDERR:', stderr);
            
            if (code === 0) {
                try {
                    const analysisData = await fs.promises.readFile(outputFile, 'utf-8');
                    const result = JSON.parse(analysisData);
                    console.log('Analysis successful!');
                    console.log('Entities found:', result.metadata.totalEntities);
                    console.log('Relationships found:', result.metadata.totalRelationships);
                    
                    // Clean up
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

// Run the test
testAnalyzer()
    .then(result => {
        console.log('✅ Analyzer integration test passed!');
        process.exit(0);
    })
    .catch(error => {
        console.error('❌ Analyzer integration test failed:', error.message);
        process.exit(1);
    });