#!/usr/bin/env node

/**
 * Test script to verify file selection functionality
 * This simulates the IPC communication between main and renderer processes
 */

const { ipcMain, ipcRenderer } = require('electron');
const { dialog } = require('electron');

// Mock Electron environment for testing
class MockElectronTest {
    constructor() {
        this.handlers = new Map();
        this.listeners = new Map();
    }

    // Mock ipcMain.handle
    handle(channel, handler) {
        this.handlers.set(channel, handler);
        console.log(`✓ Registered IPC handler for: ${channel}`);
    }

    // Mock ipcRenderer.invoke
    async invoke(channel, ...args) {
        const handler = this.handlers.get(channel);
        if (handler) {
            console.log(`📞 Invoking IPC handler: ${channel}`);
            return await handler(null, ...args);
        } else {
            throw new Error(`No handler registered for channel: ${channel}`);
        }
    }

    // Mock ipcRenderer.on
    on(channel, callback) {
        if (!this.listeners.has(channel)) {
            this.listeners.set(channel, []);
        }
        this.listeners.get(channel).push(callback);
        console.log(`✓ Registered listener for: ${channel}`);
    }

    // Mock webContents.send
    send(channel, ...args) {
        const listeners = this.listeners.get(channel);
        if (listeners) {
            console.log(`📤 Sending message to channel: ${channel}`);
            listeners.forEach(callback => {
                try {
                    callback({ sender: this }, ...args);
                } catch (error) {
                    console.error(`Error in listener for ${channel}:`, error.message);
                }
            });
        } else {
            console.log(`⚠️  No listeners for channel: ${channel}`);
        }
    }
}

// Mock dialog for testing
const mockDialog = {
    showOpenDialog: async (window, options) => {
        console.log(`📁 Mock file dialog opened with options:`, options);
        
        if (options.properties.includes('openDirectory')) {
            // Mock directory selection
            return {
                canceled: false,
                filePaths: ['/workspace/examples/java/com/example/entities']
            };
        } else {
            // Mock file selection
            return {
                canceled: false,
                filePaths: [
                    '/workspace/examples/java/com/example/entities/User.java',
                    '/workspace/examples/java/com/example/entities/Order.java'
                ]
            };
        }
    }
};

async function testFileSelection() {
    console.log('🧪 Testing File Selection Functionality');
    console.log('=' .repeat(50));

    const mockElectron = new MockElectronTest();

    // Set up IPC handlers (simulating main.ts)
    console.log('\n📋 Setting up IPC handlers...');
    
    mockElectron.handle('select-files', async () => {
        const result = await mockDialog.showOpenDialog(null, {
            properties: ['openFile', 'multiSelections'],
            filters: [
                { name: 'Java Files', extensions: ['java'] },
                { name: 'All Files', extensions: ['*'] }
            ]
        });
        return result.canceled ? [] : result.filePaths;
    });

    mockElectron.handle('select-directory', async () => {
        const result = await mockDialog.showOpenDialog(null, {
            properties: ['openDirectory']
        });
        return result.canceled ? null : result.filePaths[0];
    });

    // Set up menu listeners (simulating renderer.ts)
    console.log('\n📋 Setting up menu listeners...');
    
    let selectedFiles = new Set();
    
    const handleAddFiles = async () => {
        console.log('\n🔄 handleAddFiles() called');
        try {
            const files = await mockElectron.invoke('select-files');
            console.log(`📁 Selected files:`, files);
            if (files.length > 0) {
                files.forEach(file => selectedFiles.add(file));
                console.log(`✅ Added ${files.length} files to selection`);
                console.log(`📊 Total files selected: ${selectedFiles.size}`);
            }
        } catch (error) {
            console.error(`❌ Failed to add files: ${error.message}`);
        }
    };

    const handleAddDirectory = async () => {
        console.log('\n🔄 handleAddDirectory() called');
        try {
            const directory = await mockElectron.invoke('select-directory');
            console.log(`📂 Selected directory:`, directory);
            if (directory) {
                selectedFiles.add(directory);
                console.log(`✅ Added directory to selection`);
                console.log(`📊 Total items selected: ${selectedFiles.size}`);
            }
        } catch (error) {
            console.error(`❌ Failed to add directory: ${error.message}`);
        }
    };

    // Register menu listeners
    mockElectron.on('menu-add-files', (_event) => handleAddFiles());
    mockElectron.on('menu-add-directory', (_event) => handleAddDirectory());

    // Test scenarios
    console.log('\n🧪 Test 1: Menu "Add Java Files..." clicked');
    mockElectron.send('menu-add-files');

    console.log('\n🧪 Test 2: Menu "Add Directory..." clicked');
    mockElectron.send('menu-add-directory');

    console.log('\n🧪 Test 3: Button click simulation');
    await handleAddFiles();

    console.log('\n🧪 Test 4: Directory button click simulation');
    await handleAddDirectory();

    // Final status
    console.log('\n' + '='.repeat(50));
    console.log('📊 FINAL STATUS');
    console.log('='.repeat(50));
    console.log(`Total items selected: ${selectedFiles.size}`);
    console.log('Selected items:');
    Array.from(selectedFiles).forEach((item, index) => {
        console.log(`   ${index + 1}. ${item}`);
    });

    console.log('\n✅ File selection functionality test completed!');
}

// Run the test
if (require.main === module) {
    testFileSelection().catch(error => {
        console.error('\n❌ Test failed:', error.message);
        process.exit(1);
    });
}

module.exports = { testFileSelection };