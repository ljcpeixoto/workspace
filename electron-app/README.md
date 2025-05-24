# JPA Entity Viewer - Desktop Application

A desktop application built with Electron and TypeScript for analyzing and visualizing Java JPA entities. This application provides an interactive interface to analyze JPA entity files and display their relationships in a user-friendly format.

## Features

- **File Management**: Add individual Java files or entire directories containing JPA entities
- **Real-time Analysis**: Automatically analyzes entities when files are added or removed
- **Interactive Display**: View analysis results in multiple formats (formatted JSON, raw JSON, entities only, relationships only)
- **Export Functionality**: Export analysis results to JSON files
- **Cross-platform**: Works on Windows, macOS, and Linux

## Architecture

The application consists of two main components:

1. **JPA Analyzer Backend**: Uses ANTLR4 to parse Java source files and extract JPA entity information
2. **Electron Frontend**: Provides a desktop GUI for file management and result visualization

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Java Runtime Environment (for ANTLR4 grammar generation)

## Installation

1. Clone the repository and navigate to the electron-app directory:
```bash
cd electron-app
```

2. Install dependencies:
```bash
npm install
```

3. Build the application:
```bash
npm run build
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## Usage

### Adding Files

1. **Add Individual Files**: Click "Add Files" button or use `Ctrl+O` (Windows/Linux) or `Cmd+O` (macOS)
2. **Add Directory**: Click "Add Directory" button or use `Ctrl+Shift+O` (Windows/Linux) or `Cmd+Shift+O` (macOS)

### Viewing Results

The application displays analysis results in the main content area with the following view modes:

- **Formatted JSON**: Pretty-printed JSON with syntax highlighting
- **Raw JSON**: Unformatted JSON output
- **Entities Only**: Shows only the entity definitions
- **Relationships Only**: Shows only the relationship mappings

### Analysis Summary

The sidebar shows:
- Number of entities found
- Number of relationships detected
- Number of source files analyzed

### Exporting Results

1. Click "Export JSON" button or use `Ctrl+S` (Windows/Linux) or `Cmd+S` (macOS)
2. Choose the destination file location
3. The complete analysis results will be saved as a JSON file

## Menu Options

### File Menu
- **Add Java Files...** (`Ctrl+O`): Select individual Java files
- **Add Directory...** (`Ctrl+Shift+O`): Select a directory to scan for Java files
- **Export Analysis...** (`Ctrl+S`): Export current analysis results
- **Exit** (`Ctrl+Q`): Close the application

### Analysis Menu
- **Refresh Analysis** (`F5`): Re-analyze all selected files
- **Clear All Files**: Remove all files and clear analysis results

### View Menu
- **Toggle Developer Tools** (`F12`): Open/close developer tools
- **Reload** (`Ctrl+R`): Reload the application

## Analysis Output Format

The application generates a comprehensive analysis result with the following structure:

```json
{
  "entities": [
    {
      "className": "User",
      "packageName": "com.example.entities",
      "tableName": "users",
      "fields": [...],
      "relationships": [...],
      "annotations": [...]
    }
  ],
  "metadata": {
    "totalEntities": 3,
    "totalRelationships": 7,
    "sourceFiles": [...],
    "analysisDate": "2024-01-01T12:00:00.000Z"
  }
}
```

### Entity Information Extracted

- **Basic Info**: Class name, package, table name
- **Fields**: All entity fields with their types and JPA annotations
- **Relationships**: OneToOne, OneToMany, ManyToOne, ManyToMany relationships
- **Annotations**: @Entity, @Table, @Id, @GeneratedValue, @Column, etc.
- **Constraints**: Primary keys, foreign keys, unique constraints

### Relationship Details

For each relationship, the analyzer extracts:
- Relationship type (OneToOne, OneToMany, etc.)
- Target entity
- Field name
- Mapping information (mappedBy, joinColumn)
- Cascade settings
- Fetch type (LAZY, EAGER)

## Building for Distribution

### Create Installer/Package
```bash
npm run dist
```

This will create platform-specific installers in the `release` directory.

### Package Only (No Installer)
```bash
npm run pack
```

## Development

### Project Structure
```
electron-app/
├── src/
│   ├── main.ts          # Main Electron process
│   ├── preload.ts       # Preload script for secure IPC
│   ├── renderer.ts      # Renderer process (UI logic)
│   └── types.ts         # TypeScript type definitions
├── assets/
│   ├── index.html       # Main HTML file
│   ├── styles.css       # Application styles
│   └── renderer.js      # Compiled renderer script
├── dist/                # Compiled TypeScript files
└── temp/                # Temporary files for analysis
```

### Key Technologies

- **Electron**: Desktop application framework
- **TypeScript**: Type-safe JavaScript
- **ANTLR4**: Parser generator for Java source analysis
- **Node.js**: Runtime for the analyzer backend

### Security

The application uses Electron's security best practices:
- Context isolation enabled
- Node integration disabled in renderer
- Secure IPC communication via preload script
- Content Security Policy (CSP) ready

## Troubleshooting

### Common Issues

1. **Analysis Fails**: Ensure Java files contain valid JPA annotations
2. **Files Not Found**: Check file paths and permissions
3. **Performance Issues**: Large directories may take time to analyze

### Debug Mode

Run in development mode to access developer tools:
```bash
npm run dev
```

Press `F12` to open developer tools for debugging.

## Future Enhancements

- **Graph Visualization**: Integration with D3.js for interactive entity relationship diagrams
- **Database Schema Generation**: Export DDL scripts from entity definitions
- **Validation Rules**: Check for common JPA modeling issues
- **Import/Export**: Support for other formats (XML, YAML)
- **Plugin System**: Extensible architecture for custom analyzers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.