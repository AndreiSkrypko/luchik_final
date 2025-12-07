/**
 * Конвертация оставшихся используемых SVG в WebP
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, '../public/img');

// Файлы которые используются и нужно конвертировать
const filesToConvert = [
  'title.svg',
  'cta-button.svg',
  'слово-контакты.svg',
];

async function convertSvgToWebp(svgPath) {
  const webpPath = svgPath.replace('.svg', '.webp');
  
  if (!fs.existsSync(svgPath)) {
    console.log(`   ⚠️  Файл не найден: ${svgPath}`);
    return false;
  }
  
  const sizeBefore = Math.round(fs.statSync(svgPath).size / 1024);
  console.log(`\n📄 ${path.relative(imgDir, svgPath)} (${sizeBefore} КБ)`);
  
  try {
    // Читаем SVG как изображение
    await sharp(svgPath)
      .webp({ quality: 90 })
      .toFile(webpPath);
    
    const sizeAfter = Math.round(fs.statSync(webpPath).size / 1024);
    const savings = sizeBefore > 0 ? Math.round((1 - sizeAfter / sizeBefore) * 100) : 0;
    
    console.log(`   ✅ → ${path.relative(imgDir, webpPath)} (${sizeAfter} КБ, -${savings}%)`);
    return true;
  } catch (error) {
    console.log(`   ❌ Ошибка: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🔄 Конвертация оставшихся SVG в WebP...\n');
  console.log('=' .repeat(60));
  
  let converted = 0;
  
  for (const file of filesToConvert) {
    const svgPath = path.join(imgDir, file);
    const success = await convertSvgToWebp(svgPath);
    if (success) converted++;
  }
  
  console.log('\n' + '=' .repeat(60));
  console.log(`\n✅ Конвертировано: ${converted}`);
}

main().catch(console.error);

