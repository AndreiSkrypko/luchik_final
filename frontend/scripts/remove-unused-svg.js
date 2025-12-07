/**
 * Удаление неиспользуемых SVG файлов
 */

const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/img');

// Неиспользуемые файлы для удаления
const filesToDelete = [
  // Не используются в коде
  'card-blue.svg',
  'card-green.svg',
  'card-pink.svg',
  'card-photo.svg',
  'hero-button.svg',
  'hero-subtitle.svg',
  'contacts-button.svg',
  'footer/divider.svg',
  'conacts/рамка.svg',
  'conacts/текст в рамке.svg',
  
  // Уже конвертированы в WebP
  'title.svg',
  'cta-button.svg',
  'слово-контакты.svg',
];

let deletedCount = 0;
let freedBytes = 0;

console.log('🗑️  Удаление неиспользуемых SVG...\n');
console.log('=' .repeat(60));

for (const file of filesToDelete) {
  const filePath = path.join(imgDir, file);
  
  if (fs.existsSync(filePath)) {
    try {
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      freedBytes += stats.size;
      
      fs.unlinkSync(filePath);
      console.log(`✅ Удалён: ${file} (${sizeKB} КБ)`);
      deletedCount++;
    } catch (error) {
      console.log(`❌ Ошибка удаления ${file}: ${error.message}`);
    }
  } else {
    console.log(`⚪ Не найден: ${file}`);
  }
}

console.log('\n' + '=' .repeat(60));
console.log(`\n✅ Удалено файлов: ${deletedCount}`);
console.log(`💾 Освобождено: ${(freedBytes / 1024).toFixed(2)} КБ`);

