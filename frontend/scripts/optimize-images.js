/**
 * Скрипт для анализа и оптимизации изображений
 * Запуск: node scripts/optimize-images.js
 * 
 * Для конвертации установите: npm install sharp
 */

const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/img');

function getFileSizeKB(filePath) {
  const stats = fs.statSync(filePath);
  return Math.round(stats.size / 1024);
}

function scanDirectory(dir, results = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      scanDirectory(filePath, results);
    } else if (file.endsWith('.svg')) {
      const sizeKB = getFileSizeKB(filePath);
      const relativePath = path.relative(imgDir, filePath);
      
      // Проверяем наличие base64
      const content = fs.readFileSync(filePath, 'utf8');
      const hasBase64 = content.includes('base64') || content.includes('data:image');
      
      results.push({
        path: relativePath,
        sizeKB,
        hasBase64,
        needsOptimization: sizeKB > 50 || hasBase64
      });
    }
  }
  
  return results;
}

console.log('🔍 Анализ изображений...\n');

const results = scanDirectory(imgDir);
results.sort((a, b) => b.sizeKB - a.sizeKB);

console.log('📊 Результаты анализа:\n');
console.log('=' .repeat(70));

let totalSize = 0;
let needsOptimization = [];

for (const file of results) {
  totalSize += file.sizeKB;
  const status = file.needsOptimization ? '⚠️  НУЖНА ОПТИМИЗАЦИЯ' : '✅';
  const base64 = file.hasBase64 ? ' [base64]' : '';
  console.log(`${file.sizeKB.toString().padStart(6)} КБ | ${file.path}${base64} ${status}`);
  
  if (file.needsOptimization) {
    needsOptimization.push(file);
  }
}

console.log('=' .repeat(70));
console.log(`\n📦 Общий размер: ${Math.round(totalSize / 1024 * 100) / 100} МБ`);
console.log(`⚠️  Требуют оптимизации: ${needsOptimization.length} файлов\n`);

if (needsOptimization.length > 0) {
  console.log('💡 Рекомендации:\n');
  
  for (const file of needsOptimization) {
    if (file.sizeKB > 100) {
      console.log(`   ${file.path}:`);
      console.log(`   → Конвертировать в WebP (ожидаемый размер: ~${Math.round(file.sizeKB * 0.05)}-${Math.round(file.sizeKB * 0.15)} КБ)`);
      console.log('');
    }
  }
  
  console.log('\n🛠️  Для конвертации используйте:');
  console.log('   - squoosh.app (онлайн)');
  console.log('   - TinyPNG (онлайн)');
  console.log('   - sharp (Node.js библиотека)');
  console.log('   - ImageMagick (командная строка)');
}

