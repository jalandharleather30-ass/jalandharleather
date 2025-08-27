// Create placeholder images with category-specific colors and text
const fs = require('fs');
const { createCanvas } = require('canvas');

// Category colors and text
const categories = {
  'handbag': { color: '#8B4513', text: 'Handbag' },
  'purse': { color: '#A0522D', text: 'Purse' },
  'jacket': { color: '#654321', text: 'Jacket' },
  'accessory': { color: '#D2691E', text: 'Accessory' },
  'wallet': { color: '#8B4513', text: 'Wallet' },
  'belt': { color: '#5D4037', text: 'Belt' },
  'travel': { color: '#6F4E37', text: 'Travel Bag' },
  'default': { color: '#8B4513', text: 'Leather Good' }
};

function createPlaceholder(name, config) {
  const canvas = createCanvas(400, 300);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 400, 300);
  gradient.addColorStop(0, config.color);
  gradient.addColorStop(1, config.color + '99');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 400, 300);
  
  // Text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Jalandhar Leather', 200, 130);
  
  ctx.font = '18px Arial';
  ctx.fillText(config.text, 200, 160);
  
  ctx.font = '14px Arial';
  ctx.fillText('Premium Quality', 200, 190);
  
  // Save as JPG
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(`public/images/products/placeholders/${name}.jpg`, buffer);
  console.log(`Created ${name}.jpg`);
}

// Create placeholder images
Object.keys(categories).forEach(name => {
  createPlaceholder(name, categories[name]);
});

console.log('All placeholder images created!');
