// JPA Entity Viewer Renderer
// Plain JavaScript version for browser compatibility

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
        if (window.electronAPI) {
            window.electronAPI.onMenuAddFiles(() => this.handleAddFiles());
            window.electronAPI.onMenuAddDirectory(() => this.handleAddDirectory());
            window.electronAPI.onMenuExportAnalysis(() => this.handleExportAnalysis());
            window.electronAPI.onMenuRefreshAnalysis(() => this.handleRefreshAnalysis());
            window.electronAPI.onMenuClearFiles(() => this.handleClearFiles());
        }
    }

    async handleAddFiles() {
        try {
            const files = await window.electronAPI.selectFiles();
            if (files.length > 0) {
                files.forEach(file => this.selectedFiles.add(file));
                this.updateUI();
                await this.performAnalysis();
            }
        } catch (error) {
            this.showError(`Failed to add files: ${error.message}`);
        }
    }

    async handleAddDirectory() {
        try {
            const directory = await window.electronAPI.selectDirectory();
            if (directory) {
                // For now, we'll let the backend handle directory scanning
                // In a more sophisticated implementation, we could scan the directory here
                this.selectedFiles.add(directory);
                this.updateUI();
                await this.performAnalysis();
            }
        } catch (error) {
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
            const data = JSON.stringify(this.currentAnalysis, null, 2);
            const result = await window.electronAPI.exportAnalysis(data);
            
            if (result.success) {
                this.showSuccess(`Analysis exported to: ${result.filePath}`);
            } else {
                this.showError(`Export failed: ${result.error}`);
            }
        } catch (error) {
            this.showError(`Failed to export analysis: ${error.message}`);
        }
    }

    async performAnalysis() {
        if (this.isAnalyzing) {
            return;
        }

        this.isAnalyzing = true;
        this.showLoadingState();

        try {
            const filePaths = Array.from(this.selectedFiles);
            const result = await window.electronAPI.analyzeEntities(filePaths);
            
            this.currentAnalysis = result;
            this.showAnalysisContent();
            this.updateJsonDisplay();
            this.updateLastAnalysisTime();
            
        } catch (error) {
            this.showError(`Analysis failed: ${error.message}`);
        } finally {
            this.isAnalyzing = false;
        }
    }

    updateUI() {
        this.updateFileList();
        this.updateCounts();
        this.updateButtons();
        this.updateViewState();
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
        } else {
            const filesArray = Array.from(this.selectedFiles);
            fileList.innerHTML = filesArray.map(file => `
                <div class="file-item">
                    <span class="file-path" title="${file}">${this.getFileName(file)}</span>
                    <button class="remove-file-btn" onclick="renderer.removeFile('${file}')" title="Remove file">×</button>
                </div>
            `).join('');
        }
    }

    removeFile(filePath) {
        this.selectedFiles.delete(filePath);
        this.updateUI();
        
        // Re-analyze if we still have files
        if (this.selectedFiles.size > 0) {
            this.performAnalysis();
        } else {
            this.currentAnalysis = null;
            this.updateViewState();
        }
    }

    getFileName(filePath) {
        return filePath.split(/[/\\]/).pop() || filePath;
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

    updateViewState() {
        const hasFiles = this.selectedFiles.size > 0;
        const hasAnalysis = this.currentAnalysis !== null;
        
        // Hide all states first
        this.elements.loadingState.style.display = 'none';
        this.elements.emptyState.style.display = 'none';
        this.elements.analysisContent.style.display = 'none';
        this.elements.errorState.style.display = 'none';
        
        if (this.isAnalyzing) {
            this.elements.loadingState.style.display = 'block';
        } else if (!hasFiles) {
            this.elements.emptyState.style.display = 'block';
        } else if (hasAnalysis) {
            this.elements.analysisContent.style.display = 'block';
        } else {
            this.elements.emptyState.style.display = 'block';
        }
    }

    showLoadingState() {
        this.elements.loadingState.style.display = 'block';
        this.elements.emptyState.style.display = 'none';
        this.elements.analysisContent.style.display = 'none';
        this.elements.errorState.style.display = 'none';
        
        this.elements.statusText.textContent = 'Analyzing entities...';
        this.updateButtons();
    }

    showAnalysisContent() {
        this.elements.loadingState.style.display = 'none';
        this.elements.emptyState.style.display = 'none';
        this.elements.analysisContent.style.display = 'block';
        this.elements.errorState.style.display = 'none';
        
        this.elements.statusText.textContent = 'Analysis complete';
        this.updateButtons();
    }

    showError(message) {
        this.elements.loadingState.style.display = 'none';
        this.elements.emptyState.style.display = 'none';
        this.elements.analysisContent.style.display = 'none';
        this.elements.errorState.style.display = 'block';
        
        this.elements.errorMessage.textContent = message;
        this.elements.statusText.textContent = 'Analysis failed';
        this.updateButtons();
    }

    showSuccess(message) {
        // Show a temporary success message
        const originalStatus = this.elements.statusText.textContent;
        this.elements.statusText.textContent = message;
        this.elements.statusText.style.color = '#28a745';
        
        setTimeout(() => {
            this.elements.statusText.textContent = originalStatus;
            this.elements.statusText.style.color = '';
        }, 3000);
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
                displayData = this.currentAnalysis;
                break;
            case 'formatted':
            default:
                displayData = this.currentAnalysis;
                break;
        }

        this.elements.jsonOutput.textContent = JSON.stringify(displayData, null, 2);
    }

    updateLastAnalysisTime() {
        const now = new Date();
        this.elements.lastAnalysis.textContent = now.toLocaleString();
    }
}

// Initialize the renderer when the DOM is loaded
let renderer;
document.addEventListener('DOMContentLoaded', () => {
    renderer = new JpaEntityViewerRenderer();
});

// Make renderer available globally for debugging and file removal
window.renderer = renderer;