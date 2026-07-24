const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/lenovo/Desktop/bliniq/blinic-website/uploads/2021/06';

async function checkImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.startsWith('12') || file.includes('2996dd42')) {
      const filePath = path.join(dir, file);
      try {
        const metadata = await sharp(filePath).metadata();
        console.log(`${file}: ${metadata.width}x${metadata.height} (${metadata.format})`);
      } catch (err) {
        // Not an image or error
      }
    }
  }
}

checkImages();
