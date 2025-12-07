/**
 * Скрипт очистки ненужных файлов
 * Запуск: node scripts/cleanup.js
 */

const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/img');

// Файлы для удаления (конвертированы в WebP или не используются)
const filesToDelete = [
  // Конвертированы в WebP
  'sun.svg',
  'socials.svg', 
  'logo.svg',
  'облако-белое.svg',
  'малое-облако.svg',
  'фон-волны.svg',
  'ladybug.svg',
  'bee.svg',
  'clouds.svg',
  'cloud-1.svg',
  'cloud-2.svg',
  'footer/logo.svg',
  'footer/pchela.svg',
  'footer/grass.svg',
  'footer/oblako1.svg',
  'conacts/mail.svg',
  'conacts/adress.svg',
  'conacts/adress2.svg',
  'conacts/коровка.svg',
  'conacts/лист1.svg',
  'conacts/лист2.svg',
  
  // Не используются вообще
  'navbar.svg',
  'full.svg',
  
  // Дубликаты без расширения
  'adress',
  'adress2', 
  'mail',
  'conacts/коровка',
  'рамка контакты',
];

let deletedCount = 0;
let freedBytes = 0;

console.log('🗑️  Очистка ненужных файлов...\n');
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
console.log(`💾 Освобождено: ${(freedBytes / 1024 / 1024).toFixed(2)} МБ`);

