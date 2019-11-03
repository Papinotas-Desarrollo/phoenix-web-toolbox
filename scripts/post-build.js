// Replace main and typings route on dist package
const path = require('path');

const inputPath = path.join(__dirname, '../dist/package.json');
const outputPath = path.join(__dirname, '../dist/package.json');
const fs = require('fs');

const rawInputData = fs.readFileSync(inputPath);
const json = JSON.parse(rawInputData);
json.main = './index.js';
json.typings = './index.d.ts';
fs.writeFileSync(outputPath, JSON.stringify(json, null, 2));
