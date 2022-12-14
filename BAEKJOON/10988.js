const readFileSyncPath = require('path')
  .basename(__filename)
  .replace(/js$/, 'txt')
// const readFileSyncPath = '/dev/stdin';
const input = require('fs')
  .readFileSync(readFileSyncPath)
  .toString()
  .trim()
  .split('\n')

const word = input[0]

const front = word.slice(
  0,
  word.length % 2 === 0 ? word.length / 2 : parseInt(word.length / 2)
)
const back = word.slice(
  word.length % 2 === 0 ? word.length / 2 : Math.ceil(word.length / 2),
  word.length
)

if (front === back.split('').reverse().join('')) {
  console.log(1)
} else {
  console.log(0)
}
