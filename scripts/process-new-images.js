const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const workspace = "c:\\Users\\lenovo\\Desktop\\bliniq\\blinic-website";
const galleryDir = path.join(workspace, "public", "images", "gallery");

// Category mapping
const CATEGORY_MAP = {
    "Buccal fat pad removal": { category: "Buccal Fat Pad Removal", slug: "buccal-fat-removal" },
    "Gynocomestia": { category: "Gynecomastia", slug: "gynecomastia" },
    "Rhinoplasty": { category: "Rhinoplasty", slug: "rhinoplasty" },
    "breast implants": { category: "Breast Implants", slug: "breast-implants" },
    "breast reduction": { category: "Breast Reduction", slug: "breast-reduction" },
    "butt implants": { category: "Butt Augmentation", slug: "butt-augmentation" },
    "facial fat injection": { category: "Facial Fat Injection", slug: "facial-fat-injection" },
    "liposuction": { category: "Liposuction", slug: "liposuction" },
    "neck lift": { category: "Neck Lift", slug: "neck-lift" },
    "sex change male to female": { category: "Sex Change (Male to Female)", slug: "sex-change-mtf" }
};

// Next case numbering helper
function getNextCaseNumber(slug) {
    const dirPath = path.join(galleryDir, slug);
    if (!fs.existsSync(dirPath)) {
        return 1;
    }
    const subdirs = fs.readdirSync(dirPath).filter(f => {
        return fs.statSync(path.join(dirPath, f)).isDirectory() && f.startsWith("case-");
    });
    let maxNum = 0;
    subdirs.forEach(d => {
        const num = parseInt(d.replace("case-", ""), 10);
        if (!isNaN(num) && num > maxNum) {
            maxNum = num;
        }
    });
    return maxNum + 1;
}

// Generate censor SVG for nipples
// We can overlay small circular gold stars, hearts, or standard circular blurs.
// The user said: "put some kind of stickers or blur the nipple in breast implant images"
// Let's create an SVG sticker overlay!
function createStickerSVG(width, height) {
    // We place stickers at roughly 35% and 65% width, and 52% height (typical nipple placement on front photos)
    // We can also let it be customized or just put a cute gold star/heart sticker.
    const cx1 = Math.round(width * 0.35);
    const cx2 = Math.round(width * 0.65);
    const cy = Math.round(height * 0.52);
    const radius = Math.round(width * 0.08); // 8% of width

    // SVG with nice gold stars
    return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- Left sticker (gold star) -->
      <g transform="translate(${cx1}, ${cy}) scale(${radius / 24})">
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" fill="#C9A96E" stroke="#fff" stroke-width="1.5"/>
      </g>
      <!-- Right sticker (gold star) -->
      <g transform="translate(${cx2}, ${cy}) scale(${radius / 24})">
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" fill="#C9A96E" stroke="#fff" stroke-width="1.5"/>
      </g>
    </svg>`;
}

async function processImage(srcPath, destPath, isBreastImplant) {
    try {
        let image = sharp(srcPath);
        const metadata = await image.metadata();

        if (isBreastImplant) {
            // Apply stickers by compositing SVG overlay
            const svgSticker = createStickerSVG(metadata.width, metadata.height);
            image = image.composite([{
                input: Buffer.from(svgSticker),
                top: 0,
                left: 0
            }]);
        }

        await image.webp({ quality: 85 }).toFile(destPath);
        console.log(`Processed: ${path.basename(srcPath)} -> ${path.basename(destPath)}`);
    } catch (err) {
        console.error(`Error processing image ${srcPath}:`, err);
    }
}

async function main() {
    const generatedCases = [];

    // Ensure scratch directory exists
    const scratchDir = path.join(workspace, "scratch");
    if (!fs.existsSync(scratchDir)) {
        fs.mkdirSync(scratchDir, { recursive: true });
    }

    // 1. Process folders
    for (const [folderName, config] of Object.entries(CATEGORY_MAP)) {
        const fullFolder = path.join(workspace, folderName);
        if (!fs.existsSync(fullFolder)) continue;

        // Find subfolders or files
        const items = fs.readdirSync(fullFolder);
        const subdirs = items.filter(f => fs.statSync(path.join(fullFolder, f)).isDirectory());

        if (subdirs.length > 0) {
            // Multiple patient cases (subdirs)
            for (const subdir of subdirs) {
                const caseNum = getNextCaseNumber(config.slug);
                const caseFolder = `case-${String(caseNum).padStart(2, '0')}`;
                const destDir = path.join(galleryDir, config.slug, caseFolder);
                fs.mkdirSync(destDir, { recursive: true });

                const subdirPath = path.join(fullFolder, subdir);
                const imageFiles = fs.readdirSync(subdirPath)
                    .filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f))
                    .sort();

                const relativeImages = [];
                for (let i = 0; i < imageFiles.length; i++) {
                    const srcPath = path.join(subdirPath, imageFiles[i]);
                    const filename = `${config.slug}-${caseFolder}-${String(i + 1).padStart(2, '0')}.webp`;
                    const destPath = path.join(destDir, filename);

                    await processImage(srcPath, destPath, config.slug === "breast-implants");
                    relativeImages.push(`/images/gallery/${config.slug}/${caseFolder}/${filename}`);
                }

                if (relativeImages.length > 0) {
                    generatedCases.push({
                        caseId: `${config.slug}-${caseFolder}`,
                        title: `${config.category} — Case ${caseNum}`,
                        category: config.category,
                        coverImage: relativeImages[0],
                        images: relativeImages
                    });
                }
            }
        } else {
            // Single patient case (files in root folder directly)
            const imageFiles = items.filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f)).sort();
            if (imageFiles.length > 0) {
                const caseNum = getNextCaseNumber(config.slug);
                const caseFolder = `case-${String(caseNum).padStart(2, '0')}`;
                const destDir = path.join(galleryDir, config.slug, caseFolder);
                fs.mkdirSync(destDir, { recursive: true });

                const relativeImages = [];
                for (let i = 0; i < imageFiles.length; i++) {
                    const srcPath = path.join(fullFolder, imageFiles[i]);
                    const filename = `${config.slug}-${caseFolder}-${String(i + 1).padStart(2, '0')}.webp`;
                    const destPath = path.join(destDir, filename);

                    await processImage(srcPath, destPath, config.slug === "breast-implants");
                    relativeImages.push(`/images/gallery/${config.slug}/${caseFolder}/${filename}`);
                }

                if (relativeImages.length > 0) {
                    generatedCases.push({
                        caseId: `${config.slug}-${caseFolder}`,
                        title: `${config.category} — Case ${caseNum}`,
                        category: config.category,
                        coverImage: relativeImages[0],
                        images: relativeImages
                    });
                }
            }
        }
    }

    // 2. Process special files (scar revision) at root
    const scarFiles = fs.readdirSync(workspace).filter(f => f.startsWith("scar revision") && /\.(png|jpg|jpeg|webp)$/i.test(f)).sort();
    if (scarFiles.length > 0) {
        const config = { category: "Scar Revision", slug: "scar-revision" };
        const caseNum = getNextCaseNumber(config.slug);
        const caseFolder = `case-${String(caseNum).padStart(2, '0')}`;
        const destDir = path.join(galleryDir, config.slug, caseFolder);
        fs.mkdirSync(destDir, { recursive: true });

        const relativeImages = [];
        for (let i = 0; i < scarFiles.length; i++) {
            const srcPath = path.join(workspace, scarFiles[i]);
            const filename = `${config.slug}-${caseFolder}-${String(i + 1).padStart(2, '0')}.webp`;
            const destPath = path.join(destDir, filename);

            await processImage(srcPath, destPath, false);
            relativeImages.push(`/images/gallery/${config.slug}/${caseFolder}/${filename}`);
        }

        if (relativeImages.length > 0) {
            generatedCases.push({
                caseId: `${config.slug}-${caseFolder}`,
                title: `${config.category} — Case ${caseNum}`,
                category: config.category,
                coverImage: relativeImages[0],
                images: relativeImages
            });
        }
    }

    console.log("\nGenerated JSON Cases:");
    console.log(JSON.stringify(generatedCases, null, 2));

    // Save to temp file
    fs.writeFileSync(path.join(workspace, "scratch", "new_cases.json"), JSON.stringify(generatedCases, null, 2));
}

main();
