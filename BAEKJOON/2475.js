const readFileSyncPath = require('path')
  .basename(__filename)
  .replace(/js$/, 'txt')
// const readFileSyncPath = '/dev/stdin';
const input = require('fs')
  .readFileSync(readFileSyncPath)
  .toString()
  .trim()
  .split('\n')

const number = input[0].split(' ').map(Number)

const bit = number.reduce((acc, curr) => acc + curr ** 2, 0) % 10
console.log(bit)
