const fs = require('fs');
const path = require('path');

// Constants
const GALLERY_DIR = 'public/gallery';
const DATA_DIR = 'public/data';
const DATA_FILE = path.join(DATA_DIR, 'gallery.json');
const BASE_PATH = '/crazy-garage';

// Ensure data directory exists
!fs.existsSync(DATA_DIR) && fs.mkdirSync(DATA_DIR, { recursive: true });

// Load existing data or initialize empty array
let galleryData = [];
if (fs.existsSync(DATA_FILE)) {
  try {
    galleryData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch (error) {
    console.error('Error reading gallery data:', error);
  }
}

// Get all files and find pairs
const files = fs.readdirSync(GALLERY_DIR);
const pairs = new Map();

// Helper function to get timestamp from file stats
function getTimestamp(filePath) {
  const stats = fs.statSync(filePath);
  return stats.mtimeMs;
}

// Group files by pairs
files.forEach(file => {
  const match = file.match(/^(before|after)_(\d+)\.(webp|jpg|jpeg|png)$/i);
  if (match) {
    const [, type, timestamp] = match;
    if (!pairs.has(timestamp)) {
      pairs.set(timestamp, {});
    }
    pairs.get(timestamp)[type.toLowerCase()] = `${BASE_PATH}/gallery/${file}`;
  }
});

// Update gallery data
pairs.forEach((pair, timestamp) => {
  const existingIndex = galleryData.findIndex(item => item.timestamp === Number(timestamp));
  const item = {
    timestamp: Number(timestamp),
    title: {
      en: 'Car Detailing',
      mk: 'Детаилирање на автомобил',
      sq: 'Detajimi i makinës'
    },
    description: {
      en: pair.after && !pair.before ? 'After professional detailing' :
          pair.before && !pair.after ? 'Before professional detailing' :
          'Professional detailing transformation',
      mk: pair.after && !pair.before ? 'После професионално детаилирање' :
          pair.before && !pair.after ? 'Пред професионално детаилирање' :
          'Професионална трансформација со детаилирање',
      sq: pair.after && !pair.before ? 'Pas detajimit profesional' :
          pair.before && !pair.after ? 'Para detajimit profesional' :
          'Transformim profesional i detajuar'
    },
    beforeImage: pair.before || null,
    afterImage: pair.after || null
  };

  if (existingIndex >= 0) {
    galleryData[existingIndex] = item;
  } else {
    galleryData.push(item);
  }
});

// Sort by timestamp (newest first) and save
galleryData.sort((a, b) => b.timestamp - a.timestamp);
fs.writeFileSync(DATA_FILE, JSON.stringify(galleryData, null, 2));

console.log('Gallery data updated successfully!'); 