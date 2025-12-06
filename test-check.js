const fs = require('fs');

const sourceDir = 'C:/Users/userSL0925/.cursor/luchik_final/img/footer';
const destDir = 'C:/Users/userSL0925/.cursor/luchik_final/frontend/public/img/footer';

let output = '';

try {
  output += 'Source exists: ' + fs.existsSync(sourceDir) + '\n';
  output += 'Dest exists: ' + fs.existsSync(destDir) + '\n';
  
  if (fs.existsSync(sourceDir)) {
    const files = fs.readdirSync(sourceDir);
    output += 'Files in source: ' + files.length + '\n';
    files.forEach((f, i) => {
      output += i + ': ' + f + '\n';
    });
  }
} catch (err) {
  output += 'Error: ' + err.message + '\n';
}

fs.writeFileSync(destDir + '/check.txt', output);
