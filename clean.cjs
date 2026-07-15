const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove JSX comments: {/* ... */}
  content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  
  // Remove single line comments: // ... (except inside URLs)
  content = content.replace(/(?<!:)\/\/.*$/gm, '');
  
  // Remove multi-line comments (careful with these, usually ok)
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');

  // Remove multiple empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      cleanFile(fullPath);
    }
  }
}

traverseDir(path.join(__dirname, 'src'));
console.log("Comments removed.");
