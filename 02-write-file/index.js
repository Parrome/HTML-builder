const fs = require('fs');
const path = require('path');
const {stdout, stdin} = require('process');
const process = require('process');

let writeableStream = fs.createWriteStream(path.resolve(__dirname, 'test.txt'));

stdout.write('Hi! write some text: \n');
stdin.read();

stdin.on('data', val => {
  let str = val.toString();
  if (str.trim() === 'exit') {
    writeableStream.end();
    console.log('\nGood Bye!\n');
    process.exit();
  } else {
    writeableStream.write(str);
  }
});

process.on('SIGINT', () => {
  console.log('\nGood Bye!\n');
  process.exit();
});