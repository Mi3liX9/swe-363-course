const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);

if (process.argv.length !== 4) {
  console.error('Usage: node copyFiles.js <source directory> <target directory>');
  process.exit(1);
}
const sourceDir = process.argv[2]; const targetDir = process.argv[3];
if (!fs.existsSync(sourceDir) || !fs.statSync(sourceDir).isDirectory()) {
  console.error('Source directory does not exist or is not a directory.');
  process.exit(1);
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

const allowedExtensions = ['.txt', '.jpg'];
fs.readdir(sourceDir, (err,
  files) => {
  if (err) {
    console.error('Error reading source directory:', err);
    process.exit(1);
  }
  files.forEach((file) => {
    const fileExtension = path.extname(file);
    if (allowedExtensions.includes(fileExtension)) {
      const sourceFilePath
        = path.join(sourceDir, file); const targetFilePath =
          path.join(targetDir, file);

      copyFile(sourceFilePath, targetFilePath).then(() => {
        console.log(`Copied: ${file}`);
      })
        .catch((copyErr) => {
          console.error(`Error copying ${file}: 
          ${copyErr}`);
        });
    }
  });
});
