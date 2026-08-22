const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(__dirname, '..', 'public', 'images');
const websiteDir = path.join(publicImagesDir, 'website');

if (!fs.existsSync(websiteDir)) {
  console.error('public/images/website does not exist');
  process.exit(1);
}

// Subdirectories to ensure exist and copy matching/all files into
const subdirs = ['home', 'seo', 'scrollers', 'doctors', 'website'];

subdirs.forEach(sub => {
  const targetDir = path.join(publicImagesDir, sub);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`Created directory: ${targetDir}`);
  }
});

// Copy all files from website to home (since home references many website assets)
const websiteFiles = fs.readdirSync(websiteDir);
websiteFiles.forEach(file => {
  const src = path.join(websiteDir, file);
  if (fs.statSync(src).isFile()) {
    // Copy to home
    const homeTarget = path.join(publicImagesDir, 'home', file);
    if (!fs.existsSync(homeTarget)) {
      fs.copyFileSync(src, homeTarget);
    }
  }
});

// Specific copies for seo, scrollers, doctors
const specificCopies = [
  { src: 'logo.png', dest: ['seo', 'home'] },
  { src: 'instagram.svg', dest: ['scrollers'] },
  { src: 'Dr-Ashwini.jpg', dest: ['doctors'] },
  { src: 'Doctor_01.jpg', dest: ['doctors'] },
  { src: 'doctor.jpeg', dest: ['doctors'] },
];

specificCopies.forEach(({ src, dest }) => {
  const srcPath = path.join(websiteDir, src);
  if (fs.existsSync(srcPath)) {
    dest.forEach(dir => {
      const destPath = path.join(publicImagesDir, dir, src);
      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${src} -> ${dir}/${src}`);
      }
    });
  }
});

console.log('Image directories fixed successfully!');
