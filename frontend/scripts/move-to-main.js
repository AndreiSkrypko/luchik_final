/**
 * Перемещение файлов из корня img в папку main
 * Запуск: node scripts/move-to-main.js
 */

const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/img');
const mainDir = path.join(imgDir, 'main');

// Создаём папку main если её нет
if (!fs.existsSync(mainDir)) {
  fs.mkdirSync(mainDir, { recursive: true });
  console.log('✅ Создана папка main\n');
}

// Файлы для перемещения (только .webp файлы из корня)
const filesToMove = [
  'bee.webp',
  'cloud-1.webp',
  'cloud-2.webp',
  'clouds.webp',
  'cta-button.webp',
  'ladybug.webp',
  'logo.webp',
  'socials.webp',
  'sun.webp',
  'title.webp',
  'малое-облако.webp',
  'облако-белое.webp',
  'слово-контакты.webp',
  'фон-волны.webp',
];

console.log('📦 Перемещение файлов в папку main...\n');
console.log('=' .repeat(60));

let movedCount = 0;

for (const file of filesToMove) {
  const sourcePath = path.join(imgDir, file);
  const destPath = path.join(mainDir, file);
  
  if (fs.existsSync(sourcePath)) {
    try {
      fs.renameSync(sourcePath, destPath);
      console.log(`✅ Перемещён: ${file}`);
      movedCount++;
    } catch (error) {
      console.log(`❌ Ошибка перемещения ${file}: ${error.message}`);
    }
  } else {
    console.log(`⚪ Не найден: ${file}`);
  }
}

console.log('\n' + '=' .repeat(60));
console.log(`\n✅ Перемещено файлов: ${movedCount}`);
console.log('\n💡 Теперь обновите пути в коде:');
console.log('   /img/... → /img/main/...');

