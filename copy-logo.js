const fs = require('fs');

const sourceDir = 'C:/Users/userSL0925/.cursor/luchik_final/img/footer';
const destDir = 'C:/Users/userSL0925/.cursor/luchik_final/frontend/public/img/footer';

try {
  const files = fs.readdirSync(sourceDir);
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const sourcePath = sourceDir + '/' + file;
    const destPath = destDir + '/logo' + i + '.svg';
    
    fs.copyFileSync(sourcePath, destPath);
  }
  
  // Check result
  const result = fs.readdirSync(destDir);
  fs.writeFileSync(destDir + '/result.txt', result.join('\n'));
} catch (err) {
  fs.writeFileSync(destDir + '/error.txt', err.message);
}
