'use strict';
const Jimp = require('jimp');
const {
  disableConsole,
  enableConsole,
} = require('./consoleConfiguration');

async function resize(imagePath, output, desiredLength, resizeWithWidth) {
  disableConsole();
  const image = await Jimp.read(imagePath);
  const imageWidth = image.getWidth();
  const imageHeight = image.getHeight();
  let newWidth = null;
  let newHeight = null
  if (resizeWithWidth) {
    const heightWidthRatio = imageHeight / imageWidth;
    newWidth = desiredLength;
    newHeight = newWidth * heightWidthRatio;
  } else {
    const widthHeightRatio = imageWidth / imageHeight;
    newHeight = desiredLength;
    newWidth = newHeight * widthHeightRatio;
  }
  const newImage = image.resize(newWidth, newHeight, handleImageResizeError)
  newImage.write(output);
  enableConsole();
}

function handleImageResizeError (err){
  if (err) throw err;
}

module.exports = {
  resize,
};
