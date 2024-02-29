const Jimp = require('jimp');
const ctx = this;

let internalImagePath = '';
let internalDesiredLength = 0;
let internalOutput = '';
let internalResizeWithWidth = false;


function init (inputPath, output, desiredLength, resizeWithWidth) {
  internalImagePath = inputPath;
  internalOutput = output;
  internalDesiredLength = desiredLength;
  internalResizeWithWidth = resizeWithWidth;
}

async function resize() {
  const image = await Jimp.read(internalImagePath);
  const imageWidth = image.getWidth();
  const imageHeight = image.getHeight();
  let newWidth = null;
  let newHeight = null
  if (internalResizeWithWidth) {
    const heightWidthRatio = imageHeight / imageWidth;
    newWidth = internalDesiredLength;
    newHeight = newWidth * heightWidthRatio;
  } else {
    const widthHeightRatio = imageWidth / imageHeight;
    newHeight = internalDesiredLength;
    newWidth = newHeight * widthHeightRatio;
  }
  const newImage = image.resize(newWidth, newHeight, handleImageResizeError)
  newImage.write(internalOutput);
  console.log("Image is processed successfully");
}

function handleImageResizeError (err){
  if (err) throw err;
}

module.exports = {
  init,
  resize,
};
