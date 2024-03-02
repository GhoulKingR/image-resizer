'use strict';
const Jimp = require('jimp');
const {
  disableConsole,
  enableConsole,
} = require('./consoleConfiguration');
const {
  RESIZE_WITH_WIDTH
} = require('./constants.js');

async function resizeWithOneDimension(imagePath, output, desiredLength, resizeType) {
  const image = await getImage(imagePath);
  if (image === null) return;
  const imageWidth = image.getWidth();
  const imageHeight = image.getHeight();
  let newWidth = null;
  let newHeight = null;
  if (resizeType === RESIZE_WITH_WIDTH) {
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
}

async function resizeWithBothDimensions (imagePath, output, newWidth, newHeight) {
  const image = await getImage(imagePath);
  if (image === null) return;
  const newImage = image.resize(newWidth, newHeight, handleImageResizeError)
  newImage.write(output);
}

async function getImage(imagePath) {
  disableConsole();
  try {
    const image = await Jimp.read(imagePath);
    enableConsole();
    return image;
  } catch (error) {
    enableConsole();
    console.error(error.message);
    return null;
  }
}

function handleImageResizeError (err){
  if (err) throw err;
}

module.exports = {
  resizeWithOneDimension,
  resizeWithBothDimensions,
};
