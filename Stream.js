const fs = require('fs');

const readStream = fs.createReadStream('./Docs/TextExampleLarge.txt',{ encoding:'utf8'});
const writeStream = fs.createWriteStream('./Docs/TextExampleLargeWrite.txt');

// readStream.on ('data',(chunk) => {
//     console.log ('----New Chunk----');
//     console.log (chunk);
//     writeStream.write ('\nNewChunk\n');
//     writeStream.write(chunk);
// }
// );

//piping

readStream.pipe(writeStream);

