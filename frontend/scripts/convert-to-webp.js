/**
 * Скрипт конвертации SVG (с base64) в WebP
 * Запуск: node scripts/convert-to-webp.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, '../public/img');

// Файлы для конвертации (SVG с base64, больше 10 КБ)
const filesToConvert = [
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
];

async function extractAndConvertBase64(svgPath) {
  const content = fs.readFileSync(svgPath, 'utf8');
  
  // Ищем base64 данные изображения
  const base64Match = content.match(/data:image\/(png|jpeg|jpg|gif);base64,([A-Za-z0-9+/=]+)/);
  
  if (!base64Match) {
    console.log(`   ⚠️  Нет base64 данных, пропускаю`);
    return null;
  }
  
  const imageData = Buffer.from(base64Match[2], 'base64');
  return imageData;
}

async function convertFile(relativePath) {
  const svgPath = path.join(imgDir, relativePath);
  const webpPath = svgPath.replace('.svg', '.webp');
  const webpRelative = relativePath.replace('.svg', '.webp');
  
  if (!fs.existsSync(svgPath)) {
    console.log(`   ❌ Файл не найден: ${relativePath}`);
    return false;
  }
  
  const sizeBefore = Math.round(fs.statSync(svgPath).size / 1024);
  console.log(`\n📄 ${relativePath} (${sizeBefore} КБ)`);
  
  try {
    const imageData = await extractAndConvertBase64(svgPath);
    
    if (!imageData) {
      return false;
    }
    
    // Конвертируем в WebP
    await sharp(imageData)
      .webp({ quality: 85 })
      .toFile(webpPath);
    
    const sizeAfter = Math.round(fs.statSync(webpPath).size / 1024);
    const savings = Math.round((1 - sizeAfter / sizeBefore) * 100);
    
    console.log(`   ✅ → ${webpRelative} (${sizeAfter} КБ, -${savings}%)`);
    return true;
  } catch (error) {
    console.log(`   ❌ Ошибка: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🔄 Конвертация SVG в WebP...\n');
  console.log('=' .repeat(60));
  
  let converted = 0;
  let failed = 0;
  
  for (const file of filesToConvert) {
    const success = await convertFile(file);
    if (success) converted++;
    else failed++;
  }
  
  console.log('\n' + '=' .repeat(60));
  console.log(`\n✅ Конвертировано: ${converted}`);
  console.log(`❌ Пропущено/ошибки: ${failed}`);
  
  if (converted > 0) {
    console.log('\n💡 Теперь обновите пути в коде:');
    console.log('   .svg → .webp');
  }
}

main().catch(console.error);

