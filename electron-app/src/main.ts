import { app, BrowserWindow, ipcMain, dialog, Menu } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import { spawn } from 'child_process';

class JpaEntityViewerApp {
  private mainWindow: BrowserWindow | null = null;
  private isDev: boolean = process.argv.includes('--dev');

  constructor() {
    this.setupApp();
    this.setupIpcHandlers();
  }

  private setupApp(): void {
    // Handle app ready
    app.whenReady().then(() => {
      this.createWindow();
      this.createMenu();

      app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          this.createWindow();
        }
      });
    });

    // Handle app window closed
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });
  }

  private createWindow(): void {
    this.mainWindow = new BrowserWindow({
      width: 1400,
      height: 900,
      minWidth: 800,
      minHeight: 600,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js'),
        webSecurity: !this.isDev
      },
      icon: path.join(__dirname, '../assets/icon.png'),
      title: 'JPA Entity Viewer',
      show: false
    });

    // Load the HTML file
    this.mainWindow.loadFile(path.join(__dirname, '../assets/index.html'));

    // Show window when ready
    this.mainWindow.once('ready-to-show', () => {
      this.mainWindow?.show();
      
      if (this.isDev) {
        this.mainWindow?.webContents.openDevTools();
      }
    });

    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });
  }

  private createMenu(): void {
    const template: Electron.MenuItemConstructorOptions[] = [
      {
        label: 'File',
        submenu: [
          {
            label: 'Add Java Files...',
            accelerator: 'CmdOrCtrl+O',
            click: () => this.handleAddFiles()
          },
          {
            label: 'Add Directory...',
            accelerator: 'CmdOrCtrl+Shift+O',
            click: () => this.handleAddDirectory()
          },
          { type: 'separator' },
          {
            label: 'Export Analysis...',
            accelerator: 'CmdOrCtrl+S',
            click: () => this.handleExportAnalysis()
          },
          { type: 'separator' },
          {
            label: 'Exit',
            accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
            click: () => app.quit()
          }
        ]
      },
      {
        label: 'Analysis',
        submenu: [
          {
            label: 'Refresh Analysis',
            accelerator: 'F5',
            click: () => this.handleRefreshAnalysis()
          },
          {
            label: 'Clear All Files',
            click: () => this.handleClearFiles()
          }
        ]
      },
      {
        label: 'View',
        submenu: [
          {
            label: 'Toggle Developer Tools',
            accelerator: 'F12',
            click: () => this.mainWindow?.webContents.toggleDevTools()
          },
          {
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click: () => this.mainWindow?.reload()
          }
        ]
      },
      {
        label: 'Help',
        submenu: [
          {
            label: 'About',
            click: () => this.showAbout()
          }
        ]
      }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }

  private setupIpcHandlers(): void {
    // Handle file selection
    ipcMain.handle('select-files', async () => {
      const result = await dialog.showOpenDialog(this.mainWindow!, {
        properties: ['openFile', 'multiSelections'],
        filters: [
          { name: 'Java Files', extensions: ['java'] },
          { name: 'All Files', extensions: ['*'] }
        ]
      });

      return result.canceled ? [] : result.filePaths;
    });

    // Handle directory selection
    ipcMain.handle('select-directory', async () => {
      const result = await dialog.showOpenDialog(this.mainWindow!, {
        properties: ['openDirectory']
      });

      return result.canceled ? null : result.filePaths[0];
    });

    // Handle JPA analysis
    ipcMain.handle('analyze-entities', async (event, filePaths: string[]) => {
      return this.analyzeEntities(filePaths);
    });

    // Handle export
    ipcMain.handle('export-analysis', async (event, data: string) => {
      const result = await dialog.showSaveDialog(this.mainWindow!, {
        filters: [
          { name: 'JSON Files', extensions: ['json'] },
          { name: 'All Files', extensions: ['*'] }
        ],
        defaultPath: 'jpa-analysis.json'
      });

      if (!result.canceled && result.filePath) {
        try {
          await fs.promises.writeFile(result.filePath, data, 'utf-8');
          return { success: true, path: result.filePath };
        } catch (error) {
          return { success: false, error: (error as Error).message };
        }
      }

      return { success: false, error: 'Export cancelled' };
    });
  }

  private async analyzeEntities(filePaths: string[]): Promise<any> {
    return new Promise((resolve, reject) => {
      if (filePaths.length === 0) {
        resolve({ entities: [], metadata: { totalEntities: 0, totalRelationships: 0 } });
        return;
      }

      // Create a temporary directory for analysis
      const tempDir = path.join(__dirname, '../../temp');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }

      const outputFile = path.join(tempDir, `analysis-${Date.now()}.json`);
      
      // Path to the JPA analyzer
      const analyzerPath = path.join(__dirname, '../src-analyzer/cli.ts');
      
      // Build command arguments
      const args = ['analyze', ...filePaths, '-o', outputFile];
      
      // Run the analyzer
      const child = spawn('npx', ['ts-node', analyzerPath, ...args], {
        cwd: path.join(__dirname, '..'),
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
            // Read the analysis result
            const analysisData = await fs.promises.readFile(outputFile, 'utf-8');
            const result = JSON.parse(analysisData);
            
            // Clean up temp file
            fs.unlinkSync(outputFile);
            
            resolve(result);
          } catch (error) {
            reject(new Error(`Failed to read analysis result: ${(error as Error).message}`));
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

  private async handleAddFiles(): Promise<void> {
    this.mainWindow?.webContents.send('menu-add-files');
  }

  private async handleAddDirectory(): Promise<void> {
    this.mainWindow?.webContents.send('menu-add-directory');
  }

  private async handleExportAnalysis(): Promise<void> {
    this.mainWindow?.webContents.send('menu-export-analysis');
  }

  private async handleRefreshAnalysis(): Promise<void> {
    this.mainWindow?.webContents.send('menu-refresh-analysis');
  }

  private async handleClearFiles(): Promise<void> {
    this.mainWindow?.webContents.send('menu-clear-files');
  }

  private showAbout(): void {
    dialog.showMessageBox(this.mainWindow!, {
      type: 'info',
      title: 'About JPA Entity Viewer',
      message: 'JPA Entity Viewer',
      detail: 'A desktop application for analyzing and visualizing Java JPA entities.\n\nVersion: 1.0.0\nBuilt with Electron and TypeScript'
    });
  }
}

// Create the application
new JpaEntityViewerApp();