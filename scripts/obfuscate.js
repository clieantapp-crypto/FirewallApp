// scripts/obfuscate.js (example)
const fs = require('fs');
const obfuscator = require('javascript-obfuscator');

const src = fs.readFileSync('./out/_next/static/chunks/main.js', 'utf8');
const ob = obfuscator.obfuscate(src, {
  compact: true,
  controlFlowFlattening: true,
  stringArray: true,
  // tune options carefully
});
fs.writeFileSync('./out/_next/static/chunks/main.obf.js', ob.getObfuscatedCode());
