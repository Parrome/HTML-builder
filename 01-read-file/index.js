const fs = require('fs');
const path = require('path');

let stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'));

stream.on('data', (data) =>
  console.log(data.toString())
);