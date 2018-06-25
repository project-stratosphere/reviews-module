// const largeBuffer = new Buffer("");
// const anotherBuffer = new Buffer("a");
// fs = require("fs");

// for (i=0; i<=100000; i++) {
//   largeBuffer = Buffer.concat([largeBuffer, anotherBuffer]);
// }

// fs.writeFile("a.txt", largeBuffer);
const path = require('path');
const fstorm = require('fstorm');

// const writer = fstorm('./test.txt');
const f = filename => path.join(__dirname, filename);
// writer
//   .write('1')
//   .write('2')
//   .write('3')
//   .write('4')
//   .write('5')
//   .write('6')

// process.nextTick(function(){
//   writer
//     .write('7')
// })
const lines = 1000;
const fileName = f('fstorm.txt');
const writer = fstorm(fileName);

// writer.on('end', () => {
//   console.log(`writer wrote ${i} lines`);
// }); // emitted when a squence is over
console.time('fstorm')
for (let i = 0; i < lines; i += 1) {
  writer.write(i + '\n');
}
writer.on('end', () => {
  console.timeEnd('fstorm')
  console.log('wrote all lines');
}); // emitted when a squence is over