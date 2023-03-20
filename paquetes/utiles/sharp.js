const sharp = require('sharp');

sharp('img.png')
    .resize(80)
    .toFile('gray.png')
    .grayscale();