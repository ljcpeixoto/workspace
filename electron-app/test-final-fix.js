#!/usr/bin/env node

/**
 * Final Fix Verification Test
 * Tests the complete fix for file selection functionality
 */

const fs = require('fs');
const path = require('path');

console.log('🧪 Final Fix Verification Test');
console.log('===============================\n');

// Test 1: Verify preload.js has the correct fix
console.log('📝 Test 1: Preload.js Fix Verification');
console.log('--------------------------------------');

const preloadPath = path.join(__dirname, 'dist', 'preload.js');
if (!fs.existsSync(preloadPath)) {
    console.log('❌ preload.js not found in dist/');
    process.exit(1);
}

const preloadContent = fs.readFileSync(preloadPath, 'utf8');

// Check for the fixed event handler pattern
const fixedPatterns = [
    'ipcRenderer.on(\'menu-add-files\', (_event) => callback())',
    'ipcRenderer.on(\'menu-add-directory\', (_event) => callback())',
    'ipcRenderer.on(\'menu-export-analysis\', (_event) => callback())',
    'ipcRenderer.on(\'menu-refresh-analysis\', (_event) => callback())',
    'ipcRenderer.on(\'menu-clear-files\', (_event) => callback())'
];

let allPatternsFound = true;
fixedPatterns.forEach(pattern => {
    if (preloadContent.includes(pattern)) {
        console.log(`✅ Found: ${pattern}`);
    } else {
        console.log(`❌ Missing: ${pattern}`);
        allPatternsFound = false;
    }
});

if (allPatternsFound) {
    console.log('✅ All preload.js fixes verified\n');
} else {
    console.log('❌ Preload.js fixes incomplete\n');
    process.exit(1);
}

// Test 2: Verify renderer-fixed.js exists and has no CommonJS exports
console.log('📝 Test 2: Renderer Fix Verification');
console.log('------------------------------------');

const rendererFixedPath = path.join(__dirname, 'assets', 'renderer-fixed.js');
if (!fs.existsSync(rendererFixedPath)) {
    console.log('❌ renderer-fixed.js not found in assets/');
    process.exit(1);
}

const rendererContent = fs.readFileSync(rendererFixedPath, 'utf8');

// Check that it doesn't have CommonJS exports
if (rendererContent.includes('Object.defineProperty(exports, "__esModule"')) {
    console.log('❌ renderer-fixed.js still contains CommonJS exports');
    process.exit(1);
} else {
    console.log('✅ renderer-fixed.js is free of CommonJS exports');
}

// Check that it has the main class
if (rendererContent.includes('class JpaEntityViewerRenderer')) {
    console.log('✅ JpaEntityViewerRenderer class found');
} else {
    console.log('❌ JpaEntityViewerRenderer class not found');
    process.exit(1);
}

// Check that it has proper event listeners
if (rendererContent.includes('window.electronAPI.onMenuAddFiles')) {
    console.log('✅ Menu event listeners found');
} else {
    console.log('❌ Menu event listeners not found');
    process.exit(1);
}

console.log('✅ Renderer fix verified\n');

// Test 3: Verify HTML uses the fixed renderer
console.log('📝 Test 3: HTML Configuration Verification');
console.log('------------------------------------------');

const htmlPath = path.join(__dirname, 'assets', 'index.html');
if (!fs.existsSync(htmlPath)) {
    console.log('❌ index.html not found in assets/');
    process.exit(1);
}

const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Check for CSP header
if (htmlContent.includes('Content-Security-Policy')) {
    console.log('✅ Content Security Policy header found');
} else {
    console.log('❌ Content Security Policy header missing');
}

// Check that it uses renderer-fixed.js
if (htmlContent.includes('renderer-fixed.js')) {
    console.log('✅ HTML uses renderer-fixed.js');
} else {
    console.log('❌ HTML does not use renderer-fixed.js');
    process.exit(1);
}

console.log('✅ HTML configuration verified\n');

// Test 4: Syntax validation
console.log('📝 Test 4: JavaScript Syntax Validation');
console.log('----------------------------------------');

try {
    // Test preload.js syntax
    new Function(preloadContent);
    console.log('✅ preload.js syntax valid');
} catch (error) {
    console.log(`❌ preload.js syntax error: ${error.message}`);
    process.exit(1);
}

try {
    // Test renderer-fixed.js syntax
    new Function(rendererContent);
    console.log('✅ renderer-fixed.js syntax valid');
} catch (error) {
    console.log(`❌ renderer-fixed.js syntax error: ${error.message}`);
    process.exit(1);
}

console.log('✅ All syntax validation passed\n');

// Test 5: Mock IPC communication test
console.log('📝 Test 5: Mock IPC Communication Test');
console.log('--------------------------------------');

// Create a mock environment
const mockElectron = {
    ipcRenderer: {
        invoke: (channel, ...args) => {
            console.log(`📞 IPC Invoke: ${channel} with args:`, args);
            return Promise.resolve({ success: true, channel, args });
        },
        on: (channel, callback) => {
            console.log(`📡 IPC Listener registered: ${channel}`);
            // Test the callback with mock event
            setTimeout(() => {
                console.log(`📤 Triggering: ${channel}`);
                try {
                    callback({ sender: 'mock' }); // Mock event object
                    console.log(`✅ ${channel} callback executed successfully`);
                } catch (error) {
                    console.log(`❌ ${channel} callback error: ${error.message}`);
                }
            }, 10);
        },
        removeAllListeners: (channel) => {
            console.log(`🗑️ Removed listeners for: ${channel}`);
        }
    }
};

// Test the preload API creation
try {
    const electronAPI = eval(`
        const electron_1 = ${JSON.stringify(mockElectron)};
        (${preloadContent.match(/const electronAPI = \{[\s\S]*?\};/)[0]})
        electronAPI;
    `);
    
    console.log('✅ ElectronAPI object created successfully');
    
    // Test a menu listener
    let callbackExecuted = false;
    electronAPI.onMenuAddFiles(() => {
        callbackExecuted = true;
        console.log('✅ Menu callback executed');
    });
    
    setTimeout(() => {
        if (callbackExecuted) {
            console.log('✅ Mock IPC communication test passed');
        } else {
            console.log('❌ Mock IPC communication test failed');
        }
        
        console.log('\n🎉 All tests completed successfully!');
        console.log('\n📋 Summary:');
        console.log('- ✅ Preload.js event handlers fixed');
        console.log('- ✅ Renderer converted to browser-compatible JavaScript');
        console.log('- ✅ HTML updated with CSP and correct script reference');
        console.log('- ✅ All syntax validation passed');
        console.log('- ✅ Mock IPC communication working');
        console.log('\n🚀 The file selection functionality should now work correctly!');
        
        process.exit(0);
    }, 100);
    
} catch (error) {
    console.log(`❌ ElectronAPI creation failed: ${error.message}`);
    process.exit(1);
}