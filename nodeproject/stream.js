const fs = require('fs')

const readStream = fs.createReadStream('./docs/file.txt') // One can add a second arguement here and call it {encoding "utf8"}

const writeStream = fs.createWriteStream('./docs/filethree.txt')

/*readStream.on('data', (chunk)=>{
    
    console.log(chunk.toString())
    console.log('**********READ BABY************')
    writeStream.write('\nNEW CHUNK OF DATA\n')
    writeStream.write(chunk.toString())
})*/

readStream.pipe(writeStream);