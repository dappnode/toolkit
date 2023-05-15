import fs from "fs";
import path from "path";

// Define the directory with the generated files
const directoryPath = path.join(process.cwd(), "src/typechain");

function processDirectory(dirPath) {
  fs.readdir(dirPath, { withFileTypes: true }, (err, entries) => {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    entries.forEach((entry) => {
      const entryPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        processDirectory(entryPath);
      } else if (entry.isFile()) {
        processFile(entryPath);
      }
    });
  });
}

function processFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log("Unable to read file: " + err);
    }

    const result = data
      .replace(
        /from ['"](.*?)(factories|contracts_v0\.5|contracts_v0\.4)['"]/g,
        'from "$1$2/index.js"'
      )
      .replace(/from ['"](\.\/.*?|..\/.*?)(?<!\.js)['"]/g, 'from "$1.js"');

    fs.writeFile(filePath, result, "utf8", (err) => {
      if (err) return console.log("Error writing file: " + err);
    });
  });
}

processDirectory(directoryPath);
