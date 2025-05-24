// Electron API interface
export interface ElectronAPI {
  // File operations
  selectFiles: () => Promise<string[]>;
  selectDirectory: () => Promise<string | null>;
  
  // Analysis operations
  analyzeEntities: (filePaths: string[]) => Promise<any>;
  exportAnalysis: (data: string) => Promise<{ success: boolean; path?: string; error?: string }>;
  
  // Menu event listeners
  onMenuAddFiles: (callback: () => void) => void;
  onMenuAddDirectory: (callback: () => void) => void;
  onMenuExportAnalysis: (callback: () => void) => void;
  onMenuRefreshAnalysis: (callback: () => void) => void;
  onMenuClearFiles: (callback: () => void) => void;
  
  // Utility
  removeAllListeners: (channel: string) => void;
}

// Analysis result interfaces
export interface AnalysisResult {
  entities: any[];
  relationships: any[];
  metadata: {
    totalEntities: number;
    totalRelationships: number;
    analysisDate: string;
    [key: string]: any;
  };
}

// Global window interface extension
declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}