import { contextBridge, ipcRenderer } from 'electron';
import { ElectronAPI } from './types';

// Expose the API to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // File operations
  selectFiles: () => ipcRenderer.invoke('select-files'),
  selectDirectory: () => ipcRenderer.invoke('select-directory'),
  
  // Analysis operations
  analyzeEntities: (filePaths: string[]) => ipcRenderer.invoke('analyze-entities', filePaths),
  exportAnalysis: (data: string) => ipcRenderer.invoke('export-analysis', data),
  
  // Menu event listeners
  onMenuAddFiles: (callback: () => void) => {
    ipcRenderer.on('menu-add-files', callback);
  },
  onMenuAddDirectory: (callback: () => void) => {
    ipcRenderer.on('menu-add-directory', callback);
  },
  onMenuExportAnalysis: (callback: () => void) => {
    ipcRenderer.on('menu-export-analysis', callback);
  },
  onMenuRefreshAnalysis: (callback: () => void) => {
    ipcRenderer.on('menu-refresh-analysis', callback);
  },
  onMenuClearFiles: (callback: () => void) => {
    ipcRenderer.on('menu-clear-files', callback);
  },
  
  // Utility
  removeAllListeners: (channel: string) => {
    ipcRenderer.removeAllListeners(channel);
  }
} as ElectronAPI);