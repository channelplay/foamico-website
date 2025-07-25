const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create scripts directory if it doesn't exist
const scriptsDir = path.dirname(__filename);
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
}

const images = [
  // Homepage Images
  { name: 'hero-banner-couple-sleeping-1920x800.jpg', width: 1920, height: 800, text: 'Hero Banner\nCouple Sleeping\n1920x800' },
  { name: 'product-grid-sova-600x400.jpg', width: 600, height: 400, text: 'Sova Product\n600x400' },
  { name: 'product-grid-ultima-600x400.jpg', width: 600, height: 400, text: 'Ultima Product\n600x400' },
  { name: 'product-grid-natura-600x400.jpg', width: 600, height: 400, text: 'Natura Product\n600x400' },
  { name: 'product-grid-marvel-600x400.jpg', width: 600, height: 400, text: 'Marvel Product\n600x400' },
  { name: 'technology-orthosense-icon-200x200.png', width: 200, height: 200, text: 'OrthoSense\nIcon\n200x200' },
  { name: 'technology-iqs-icon-200x200.png', width: 200, height: 200, text: 'IQS\nIcon\n200x200' },
  { name: 'warranty-badge-25years-300x300.png', width: 300, height: 300, text: '25 Years\nWarranty\n300x300' },
  
  // Product Images
  { name: 'sova-classic-hero-1200x800.jpg', width: 1200, height: 800, text: 'Sova Classic\nHero Image\n1200x800' },
  { name: 'sova-premium-hero-1200x800.jpg', width: 1200, height: 800, text: 'Sova Premium\nHero Image\n1200x800' },
  { name: 'sova-luxury-hero-1200x800.jpg', width: 1200, height: 800, text: 'Sova Luxury\nHero Image\n1200x800' },
  { name: 'ultima-classic-hero-1200x800.jpg', width: 1200, height: 800, text: 'Ultima Classic\nHero Image\n1200x800' },
  { name: 'ultima-premium-hero-1200x800.jpg', width: 1200, height: 800, text: 'Ultima Premium\nHero Image\n1200x800' },
  { name: 'ultima-luxury-hero-1200x800.jpg', width: 1200, height: 800, text: 'Ultima Luxury\nHero Image\n1200x800' },
  { name: 'natura-1-hero-1200x800.jpg', width: 1200, height: 800, text: 'Natura 1.0\nHero Image\n1200x800' },
  { name: 'natura-2-hero-1200x800.jpg', width: 1200, height: 800, text: 'Natura 2.0\nHero Image\n1200x800' },
  { name: 'marvel-hero-1200x800.jpg', width: 1200, height: 800, text: 'Marvel\nHero Image\n1200x800' },
  { name: 'layer-diagram-generic-800x600.png', width: 800, height: 600, text: 'Layer Diagram\nGeneric\n800x600' },
  
  // About Page Images
  { name: 'about-factory-interior-1200x600.jpg', width: 1200, height: 600, text: 'Factory Interior\n1200x600' },
  { name: 'about-team-photo-1200x600.jpg', width: 1200, height: 600, text: 'Team Photo\n1200x600' },
  { name: 'about-sustainability-icon-400x400.png', width: 400, height: 400, text: 'Sustainability\nIcon\n400x400' },
  
  // Blog Images
  { name: 'blog-sleep-science-thumbnail-600x400.jpg', width: 600, height: 400, text: 'Sleep Science\nBlog Thumbnail\n600x400' },
  { name: 'blog-mattress-care-thumbnail-600x400.jpg', width: 600, height: 400, text: 'Mattress Care\nBlog Thumbnail\n600x400' },
  { name: 'blog-hero-generic-1920x600.jpg', width: 1920, height: 600, text: 'Blog Hero\nGeneric\n1920x600' },
];

function generatePlaceholder(imageInfo) {
  const canvas = createCanvas(imageInfo.width, imageInfo.height);
  const ctx = canvas.getContext('2d');
  
  // Background color (light gray)
  ctx.fillStyle = '#e5e7eb';
  ctx.fillRect(0, 0, imageInfo.width, imageInfo.height);
  
  // Border
  ctx.strokeStyle = '#9ca3af';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, imageInfo.width - 2, imageInfo.height - 2);
  
  // Text
  ctx.fillStyle = '#4b5563';
  ctx.font = `${Math.min(imageInfo.width / 10, 48)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Split text by newlines and draw each line
  const lines = imageInfo.text.split('\n');
  const lineHeight = Math.min(imageInfo.width / 10, 48) * 1.5;
  const startY = imageInfo.height / 2 - (lines.length - 1) * lineHeight / 2;
  
  lines.forEach((line, index) => {
    ctx.fillText(line, imageInfo.width / 2, startY + index * lineHeight);
  });
  
  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  const outputPath = path.join(__dirname, '..', 'public', 'images', imageInfo.name);
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated: ${imageInfo.name}`);
}

// Check if canvas module is available
try {
  require.resolve('canvas');
  
  // Generate all placeholder images
  images.forEach(generatePlaceholder);
  console.log('All placeholder images generated successfully!');
} catch (e) {
  console.log('Canvas module not found. Creating a simple HTML-based placeholder generator instead...');
  
  // Create a simple HTML file that can be used to generate placeholders
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
<title>Placeholder Image Generator</title>
<style>
  body { font-family: Arial, sans-serif; padding: 20px; }
  .placeholder { 
    display: inline-block; 
    margin: 10px; 
    border: 2px solid #9ca3af; 
    background: #e5e7eb;
    text-align: center;
    color: #4b5563;
    font-weight: bold;
  }
  .placeholder div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
</head>
<body>
<h1>Foamico Placeholder Images</h1>
<p>Right-click and save each image as needed:</p>
${images.map(img => `
<div class="placeholder" style="width: ${img.width}px; height: ${img.height}px;">
  <div>${img.text.replace(/\n/g, '<br>')}</div>
</div>
<p>${img.name}</p>
`).join('')}
</body>
</html>`;

  fs.writeFileSync(path.join(__dirname, '..', 'public', 'placeholder-generator.html'), htmlContent);
  console.log('Created placeholder-generator.html in public directory.');
  console.log('Open this file in a browser to see placeholder images.');
}