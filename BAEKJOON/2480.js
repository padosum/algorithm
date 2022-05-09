const readFileSyncPath = require('path')
  .basename(__filename)
  .replace(/js$/, 'txt')
// const readFileSyncPath = '/dev/stdin';
const input = require('fs')
  .readFileSync(readFileSyncPath)
  .toString()
  .trim()
  .split('\n')

const inputArr = input[0].split(' ').map(Number)
const [first, second, third] = inputArr

let s = new Set([first, second, third])
let map = new Map()
inputArr.forEach((num) => map.set(num, (map.get(num) || 0) + 1))

if (s.size === 3) {
  // 모두 다른 눈
  const max = Math.max(...inputArr)
  console.log(max * 100)
} else if (s.size === 2) {
  ;[...s].forEach((num) => {
    if (map.get(num) === 2) {
      console.log(1000 + num * 100)
    }
  })
} else {
  // 모두 같은 눈
  console.log(10000 + inputArr[0] * 1000)
}
