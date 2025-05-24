// JPA Entity Viewer Renderer - Browser-compatible version
// No CommonJS exports, pure browser JavaScript

class JpaEntityViewerRenderer {
    constructor() {
        this.selectedFiles = new Set();
        this.currentAnalysis = null;
        this.isAnalyzing = false;

        // DOM elements
        this.elements = {
            addFilesBtn: document.getElementById('add-files-btn'),
            addDirectoryBtn: document.getElementById('add-directory-btn'),
            refreshBtn: document.getElementById('refresh-btn'),
            clearBtn: document.getElementById('clear-btn'),
            exportBtn: document.getElementById('export-btn'),
            retryBtn: document.getElementById('retry-btn'),
            
            fileList: document.getElementById('file-list'),
            entityCount: document.getElementById('entity-count'),
            relationshipCount: document.getElementById('relationship-count'),
            fileCount: document.getElementById('file-count'),
            
            viewModeSelect: document.getElementById('view-mode'),
            jsonOutput: document.getElementById('json-output'),
            
            loadingState: document.getElementById('loading-state'),
            emptyState: document.getElementById('empty-state'),
            analysisContent: document.getElementById('analysis-content'),
            errorState: document.getElementById('error-state'),
            errorMessage: document.getElementById('error-message'),
            
            statusText: document.getElementById('status-text'),
            lastAnalysis: document.getElementById('last-analysis')
        };

        this.setupEventListeners();
        this.setupMenuListeners();
        this.updateUI();
    }

    setupEventListeners() {
        // Button event listeners
        this.elements.addFilesBtn.addEventListener('click', () => this.handleAddFiles());
        this.elements.addDirectoryBtn.addEventListener('click', () => this.handleAddDirectory());
        this.elements.refreshBtn.addEventListener('click', () => this.handleRefreshAnalysis());
        this.elements.clearBtn.addEventListener('click', () => this.handleClearFiles());
        this.elements.exportBtn.addEventListener('click', () => this.handleExportAnalysis());
        this.elements.retryBtn.addEventListener('click', () => this.handleRefreshAnalysis());

        // View mode change
        this.elements.viewModeSelect.addEventListener('change', () => this.updateJsonDisplay());
    }

    setupMenuListeners() {
        // Menu event listeners
        window.electronAPI.onMenuAddFiles(() => this.handleAddFiles());
        window.electronAPI.onMenuAddDirectory(() => this.handleAddDirectory());
        window.electronAPI.onMenuExportAnalysis(() => this.handleExportAnalysis());
        window.electronAPI.onMenuRefreshAnalysis(() => this.handleRefreshAnalysis());
        window.electronAPI.onMenuClearFiles(() => this.handleClearFiles());
    }

    async handleAddFiles() {
        try {
            console.log('🔄 handleAddFiles() called');
            const files = await window.electronAPI.selectFiles();
            console.log('📁 Selected files:', files);
            if (files.length > 0) {
                files.forEach((file) => this.selectedFiles.add(file));
                this.updateUI();
                await this.performAnalysis();
            }
        } catch (error) {
            console.error('❌ Failed to add files:', error);
            this.showError(`Failed to add files: ${error.message}`);
        }
    }

    async handleAddDirectory() {
        try {
            console.log('🔄 handleAddDirectory() called');
            const directory = await window.electronAPI.selectDirectory();
            console.log('📂 Selected directory:', directory);
            if (directory) {
                // For now, we'll let the backend handle directory scanning
                // In a more sophisticated implementation, we could scan the directory here
                this.selectedFiles.add(directory);
                this.updateUI();
                await this.performAnalysis();
            }
        } catch (error) {
            console.error('❌ Failed to add directory:', error);
            this.showError(`Failed to add directory: ${error.message}`);
        }
    }

    async handleRefreshAnalysis() {
        if (this.selectedFiles.size > 0) {
            await this.performAnalysis();
        }
    }

    handleClearFiles() {
        this.selectedFiles.clear();
        this.currentAnalysis = null;
        this.updateUI();
    }

    async handleExportAnalysis() {
        if (!this.currentAnalysis) {
            this.showError('No analysis data to export');
            return;
        }

        try {
            const jsonData = JSON.stringify(this.currentAnalysis, null, 2);
            await window.electronAPI.exportAnalysis(jsonData);
        } catch (error) {
            this.showError(`Failed to export analysis: ${error.message}`);
        }
    }

    async performAnalysis() {
        if (this.isAnalyzing) {
            return;
        }

        this.isAnalyzing = true;
        this.showLoading();

        try {
            const filePaths = Array.from(this.selectedFiles);
            console.log('🔍 Starting analysis for:', filePaths);
            
            const result = await window.electronAPI.analyzeEntities(filePaths);
            console.log('✅ Analysis completed:', result);
            
            this.currentAnalysis = result;
            this.showAnalysisResults();
            this.updateLastAnalysisTime();
        } catch (error) {
            console.error('❌ Analysis failed:', error);
            this.showError(`Analysis failed: ${error.message}`);
        } finally {
            this.isAnalyzing = false;
        }
    }

    updateUI() {
        this.updateFileList();
        this.updateCounts();
        this.updateButtons();
        this.updateStatus();

        if (this.selectedFiles.size === 0) {
            this.showEmptyState();
        } else if (this.currentAnalysis) {
            this.showAnalysisResults();
        }
    }

    updateFileList() {
        const fileList = this.elements.fileList;
        
        if (this.selectedFiles.size === 0) {
            fileList.innerHTML = `
                <div class="empty-state">
                    <p>No files selected</p>
                    <p class="hint">Use "Add Files" or "Add Directory" to get started</p>
                </div>
            `;
            return;
        }

        const filesArray = Array.from(this.selectedFiles);
        fileList.innerHTML = filesArray.map(file => {
            const fileName = file.split('/').pop() || file;
            const isDirectory = !file.endsWith('.java');
            const icon = isDirectory ? '📁' : '📄';
            
            return `
                <div class="file-item" title="${file}">
                    <span class="file-icon">${icon}</span>
                    <span class="file-name">${fileName}</span>
                    <button class="remove-file-btn" onclick="renderer.removeFile('${file}')" title="Remove">×</button>
                </div>
            `;
        }).join('');
    }

    removeFile(filePath) {
        this.selectedFiles.delete(filePath);
        this.updateUI();
        
        // Re-analyze if there are still files
        if (this.selectedFiles.size > 0) {
            this.performAnalysis();
        } else {
            this.currentAnalysis = null;
        }
    }

    updateCounts() {
        this.elements.fileCount.textContent = this.selectedFiles.size.toString();
        
        if (this.currentAnalysis) {
            this.elements.entityCount.textContent = this.currentAnalysis.metadata.totalEntities.toString();
            this.elements.relationshipCount.textContent = this.currentAnalysis.metadata.totalRelationships.toString();
        } else {
            this.elements.entityCount.textContent = '0';
            this.elements.relationshipCount.textContent = '0';
        }
    }

    updateButtons() {
        const hasFiles = this.selectedFiles.size > 0;
        const hasAnalysis = this.currentAnalysis !== null;
        
        this.elements.refreshBtn.disabled = !hasFiles || this.isAnalyzing;
        this.elements.clearBtn.disabled = !hasFiles;
        this.elements.exportBtn.disabled = !hasAnalysis || this.isAnalyzing;
        this.elements.retryBtn.disabled = !hasFiles || this.isAnalyzing;
    }

    updateStatus() {
        if (this.isAnalyzing) {
            this.elements.statusText.textContent = 'Analyzing...';
        } else if (this.selectedFiles.size === 0) {
            this.elements.statusText.textContent = 'No files selected';
        } else if (this.currentAnalysis) {
            this.elements.statusText.textContent = 'Analysis complete';
        } else {
            this.elements.statusText.textContent = 'Ready to analyze';
        }
    }

    updateLastAnalysisTime() {
        const now = new Date();
        this.elements.lastAnalysis.textContent = now.toLocaleTimeString();
    }

    showEmptyState() {
        this.elements.emptyState.style.display = 'block';
        this.elements.loadingState.style.display = 'none';
        this.elements.analysisContent.style.display = 'none';
        this.elements.errorState.style.display = 'none';
    }

    showLoading() {
        this.elements.emptyState.style.display = 'none';
        this.elements.loadingState.style.display = 'block';
        this.elements.analysisContent.style.display = 'none';
        this.elements.errorState.style.display = 'none';
        this.updateButtons();
    }

    showAnalysisResults() {
        this.elements.emptyState.style.display = 'none';
        this.elements.loadingState.style.display = 'none';
        this.elements.analysisContent.style.display = 'block';
        this.elements.errorState.style.display = 'none';
        this.updateJsonDisplay();
        this.updateButtons();
    }

    showError(message) {
        this.elements.emptyState.style.display = 'none';
        this.elements.loadingState.style.display = 'none';
        this.elements.analysisContent.style.display = 'none';
        this.elements.errorState.style.display = 'block';
        this.elements.errorMessage.textContent = message;
        this.updateButtons();
    }

    updateJsonDisplay() {
        if (!this.currentAnalysis) {
            this.elements.jsonOutput.textContent = '';
            return;
        }

        const viewMode = this.elements.viewModeSelect.value;
        let displayData;

        switch (viewMode) {
            case 'entities':
                displayData = { entities: this.currentAnalysis.entities };
                break;
            case 'relationships':
                displayData = { relationships: this.currentAnalysis.relationships };
                break;
            case 'raw':
                this.elements.jsonOutput.textContent = JSON.stringify(this.currentAnalysis);
                return;
            default: // formatted
                displayData = this.currentAnalysis;
        }

        this.elements.jsonOutput.textContent = JSON.stringify(displayData, null, 2);
    }
}

// Initialize the renderer when the DOM is loaded
let renderer;
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing JPA Entity Viewer Renderer...');
    renderer = new JpaEntityViewerRenderer();
    console.log('✅ Renderer initialized successfully');
});

// Make renderer available globally for debugging
window.renderer = renderer;