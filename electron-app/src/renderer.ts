// Types defined locally for renderer context
interface AnalysisResult {
    entities: any[];
    relationships: any[];
    metadata: {
        totalEntities: number;
        totalRelationships: number;
        analysisDate: string;
        [key: string]: any;
    };
}

interface ElectronAPI {
    selectFiles: () => Promise<string[]>;
    selectDirectory: () => Promise<string | null>;
    analyzeEntities: (filePaths: string[]) => Promise<AnalysisResult>;
    exportAnalysis: (data: string) => Promise<{ success: boolean; filePath?: string; error?: string }>;
    onMenuAddFiles: (callback: () => void) => void;
    onMenuAddDirectory: (callback: () => void) => void;
    onMenuExportAnalysis: (callback: () => void) => void;
    onMenuRefreshAnalysis: (callback: () => void) => void;
    onMenuClearFiles: (callback: () => void) => void;
    removeAllListeners: (channel: string) => void;
}

declare global {
    interface Window {
        electronAPI: ElectronAPI;
    }
}

class JpaEntityViewerRenderer {
    private selectedFiles: Set<string> = new Set();
    private currentAnalysis: AnalysisResult | null = null;
    private isAnalyzing: boolean = false;

    // DOM elements
    private elements = {
        addFilesBtn: document.getElementById('add-files-btn') as HTMLButtonElement,
        addDirectoryBtn: document.getElementById('add-directory-btn') as HTMLButtonElement,
        refreshBtn: document.getElementById('refresh-btn') as HTMLButtonElement,
        clearBtn: document.getElementById('clear-btn') as HTMLButtonElement,
        exportBtn: document.getElementById('export-btn') as HTMLButtonElement,
        retryBtn: document.getElementById('retry-btn') as HTMLButtonElement,
        
        fileList: document.getElementById('file-list') as HTMLDivElement,
        entityCount: document.getElementById('entity-count') as HTMLSpanElement,
        relationshipCount: document.getElementById('relationship-count') as HTMLSpanElement,
        fileCount: document.getElementById('file-count') as HTMLSpanElement,
        
        viewModeSelect: document.getElementById('view-mode') as HTMLSelectElement,
        jsonOutput: document.getElementById('json-output') as HTMLPreElement,
        
        loadingState: document.getElementById('loading-state') as HTMLDivElement,
        emptyState: document.getElementById('empty-state') as HTMLDivElement,
        analysisContent: document.getElementById('analysis-content') as HTMLDivElement,
        errorState: document.getElementById('error-state') as HTMLDivElement,
        errorMessage: document.getElementById('error-message') as HTMLParagraphElement,
        
        statusText: document.getElementById('status-text') as HTMLSpanElement,
        lastAnalysis: document.getElementById('last-analysis') as HTMLSpanElement
    };

    constructor() {
        this.setupEventListeners();
        this.setupMenuListeners();
        this.updateUI();
    }

    private setupEventListeners(): void {
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

    private setupMenuListeners(): void {
        // Menu event listeners
        window.electronAPI.onMenuAddFiles(() => this.handleAddFiles());
        window.electronAPI.onMenuAddDirectory(() => this.handleAddDirectory());
        window.electronAPI.onMenuExportAnalysis(() => this.handleExportAnalysis());
        window.electronAPI.onMenuRefreshAnalysis(() => this.handleRefreshAnalysis());
        window.electronAPI.onMenuClearFiles(() => this.handleClearFiles());
    }

    private async handleAddFiles(): Promise<void> {
        try {
            const files = await window.electronAPI.selectFiles();
            if (files.length > 0) {
                files.forEach((file: string) => this.selectedFiles.add(file));
                this.updateUI();
                await this.performAnalysis();
            }
        } catch (error) {
            this.showError(`Failed to add files: ${(error as Error).message}`);
        }
    }

    private async handleAddDirectory(): Promise<void> {
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
            this.showError(`Failed to add directory: ${(error as Error).message}`);
        }
    }

    private async handleRefreshAnalysis(): Promise<void> {
        if (this.selectedFiles.size > 0) {
            await this.performAnalysis();
        }
    }

    private handleClearFiles(): void {
        this.selectedFiles.clear();
        this.currentAnalysis = null;
        this.updateUI();
        this.setStatus('Files cleared');
    }

    private async handleExportAnalysis(): Promise<void> {
        if (!this.currentAnalysis) {
            this.showError('No analysis data to export');
            return;
        }

        try {
            const data = JSON.stringify(this.currentAnalysis, null, 2);
            const result = await window.electronAPI.exportAnalysis(data);
            
            if (result.success) {
                this.setStatus(`Analysis exported to ${result.path}`);
            } else {
                this.showError(`Export failed: ${result.error}`);
            }
        } catch (error) {
            this.showError(`Export failed: ${(error as Error).message}`);
        }
    }

    private async performAnalysis(): Promise<void> {
        if (this.isAnalyzing || this.selectedFiles.size === 0) {
            return;
        }

        this.isAnalyzing = true;
        this.showLoading();
        this.setStatus('Analyzing entities...');

        try {
            const filePaths = Array.from(this.selectedFiles);
            const result = await window.electronAPI.analyzeEntities(filePaths);
            
            this.currentAnalysis = result;
            this.showAnalysisResult();
            this.setStatus('Analysis complete');
            this.elements.lastAnalysis.textContent = new Date().toLocaleString();
        } catch (error) {
            this.showError(`Analysis failed: ${(error as Error).message}`);
            this.setStatus('Analysis failed');
        } finally {
            this.isAnalyzing = false;
            this.updateUI();
        }
    }

    private updateUI(): void {
        const hasFiles = this.selectedFiles.size > 0;
        const hasAnalysis = this.currentAnalysis !== null;

        // Update button states
        this.elements.refreshBtn.disabled = !hasFiles || this.isAnalyzing;
        this.elements.clearBtn.disabled = !hasFiles;
        this.elements.exportBtn.disabled = !hasAnalysis;

        // Update file list
        this.updateFileList();

        // Update summary
        this.updateSummary();

        // Update content area
        if (!hasFiles) {
            this.showEmptyState();
        } else if (hasAnalysis) {
            this.showAnalysisResult();
        }
    }

    private updateFileList(): void {
        if (this.selectedFiles.size === 0) {
            this.elements.fileList.innerHTML = `
                <div class="empty-state">
                    <p>No files selected</p>
                    <p class="hint">Use "Add Files" or "Add Directory" to get started</p>
                </div>
            `;
        } else {
            const fileItems = Array.from(this.selectedFiles).map(filePath => {
                const fileName = filePath.split(/[/\\]/).pop() || filePath;
                return `
                    <div class="file-item">
                        <span class="file-path" title="${filePath}">${fileName}</span>
                        <button class="file-remove" onclick="renderer.removeFile('${filePath.replace(/'/g, "\\'")}')">×</button>
                    </div>
                `;
            }).join('');

            this.elements.fileList.innerHTML = fileItems;
        }
    }

    private updateSummary(): void {
        this.elements.fileCount.textContent = this.selectedFiles.size.toString();
        
        if (this.currentAnalysis) {
            this.elements.entityCount.textContent = this.currentAnalysis.metadata.totalEntities.toString();
            this.elements.relationshipCount.textContent = this.currentAnalysis.metadata.totalRelationships.toString();
        } else {
            this.elements.entityCount.textContent = '0';
            this.elements.relationshipCount.textContent = '0';
        }
    }

    private showLoading(): void {
        this.elements.loadingState.style.display = 'flex';
        this.elements.emptyState.style.display = 'none';
        this.elements.analysisContent.style.display = 'none';
        this.elements.errorState.style.display = 'none';
    }

    private showEmptyState(): void {
        this.elements.loadingState.style.display = 'none';
        this.elements.emptyState.style.display = 'flex';
        this.elements.analysisContent.style.display = 'none';
        this.elements.errorState.style.display = 'none';
    }

    private showAnalysisResult(): void {
        this.elements.loadingState.style.display = 'none';
        this.elements.emptyState.style.display = 'none';
        this.elements.analysisContent.style.display = 'block';
        this.elements.errorState.style.display = 'none';
        
        this.updateJsonDisplay();
    }

    private showError(message: string): void {
        this.elements.loadingState.style.display = 'none';
        this.elements.emptyState.style.display = 'none';
        this.elements.analysisContent.style.display = 'none';
        this.elements.errorState.style.display = 'flex';
        this.elements.errorMessage.textContent = message;
    }

    private updateJsonDisplay(): void {
        if (!this.currentAnalysis) {
            return;
        }

        const viewMode = this.elements.viewModeSelect.value;
        let displayData: any;

        switch (viewMode) {
            case 'entities':
                displayData = { entities: this.currentAnalysis.entities };
                break;
            case 'relationships':
                displayData = this.extractRelationships();
                break;
            case 'raw':
                displayData = this.currentAnalysis;
                break;
            case 'formatted':
            default:
                displayData = this.currentAnalysis;
                break;
        }

        const jsonString = JSON.stringify(displayData, null, 2);
        this.elements.jsonOutput.textContent = jsonString;
        
        // Apply syntax highlighting
        this.applySyntaxHighlighting();
    }

    private extractRelationships(): any {
        if (!this.currentAnalysis) {
            return { relationships: [] };
        }

        const relationships: any[] = [];
        
        this.currentAnalysis.entities.forEach(entity => {
            entity.relationships?.forEach((rel: any) => {
                relationships.push({
                    sourceEntity: entity.className,
                    targetEntity: rel.targetEntity,
                    type: rel.type,
                    fieldName: rel.fieldName,
                    mappedBy: rel.mappedBy,
                    joinColumn: rel.joinColumn,
                    cascade: rel.cascade,
                    fetch: rel.fetch
                });
            });
        });

        return { relationships };
    }

    private applySyntaxHighlighting(): void {
        // Simple syntax highlighting for JSON
        let html = this.elements.jsonOutput.textContent || '';
        
        // Highlight strings
        html = html.replace(/"([^"\\]*(\\.[^"\\]*)*)"/g, '<span class="json-string">"$1"</span>');
        
        // Highlight numbers
        html = html.replace(/\b(-?\d+\.?\d*)\b/g, '<span class="json-number">$1</span>');
        
        // Highlight booleans
        html = html.replace(/\b(true|false)\b/g, '<span class="json-boolean">$1</span>');
        
        // Highlight null
        html = html.replace(/\bnull\b/g, '<span class="json-null">null</span>');
        
        this.elements.jsonOutput.innerHTML = html;
    }

    private setStatus(message: string): void {
        this.elements.statusText.textContent = message;
    }

    // Public method for removing files (called from HTML)
    public removeFile(filePath: string): void {
        this.selectedFiles.delete(filePath);
        this.updateUI();
        
        if (this.selectedFiles.size > 0) {
            this.performAnalysis();
        } else {
            this.currentAnalysis = null;
            this.showEmptyState();
        }
    }
}

// Initialize the renderer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    (window as any).renderer = new JpaEntityViewerRenderer();
});