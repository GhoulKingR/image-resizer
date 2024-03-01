#!/usr/bin/env node
'use strict';

const { ArgumentParser } = require('argparse');
const { version } = require('./package.json');
const { resize } = require('./resizer.js');

const parser = new ArgumentParser({ description: 'Argparse example' });
parser.add_argument('image', { metavar: '\"image\"', type: 'str', help: 'A path to the image you want to resize' });
parser.add_argument('-v', '--version', { action: 'version', version });
parser.add_argument('-o', '--output', { help: 'If you want to specify the output file. The output file is output.jpg by default.' });
parser.add_argument('--width', { help: 'The new width you want to resize the image to.' });
parser.add_argument('--height', { help: 'The new height you want to resize the image to.' });
const {
  image,
  output,
  width, height,
} = parser.parse_args();
const RESIZE_WITH_WIDTH = true;
const RESIZE_WITH_HEIGHT = false;
const OUTPUT = output || "output.jpg";

function toNumber(string) {
  const convertedString = Number(string);
  if (Number.isNaN(convertedString)) throw new Error(`"${string}" is not a number.`);
  else return convertedString;
};

try {
  if (height && !width) {
    const heightInNumber = toNumber(height);
    resize(image, OUTPUT, heightInNumber, RESIZE_WITH_HEIGHT);
  }else if (width && !height) {
    const widthInNumber = toNumber(width);
    resize(image, OUTPUT, widthInNumber, RESIZE_WITH_WIDTH);
  } else {
    throw new Error("You can only either suggest a new width or a new hight. But not both");
  }
} catch (error) {
  console.error("Error: " + error.message);
}
