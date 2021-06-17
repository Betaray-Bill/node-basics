const path = require('path')

console.log(path.sep)

const filepath = path.join('/content/subfolder/test.txt')
console.log(filepath)

const abs = path.resolve(__dirname, 'text.txt')
console.log(abs)