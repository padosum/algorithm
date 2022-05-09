const readFileSyncPath = require('path')
  .basename(__filename)
  .replace(/js$/, 'txt')
// const readFileSyncPath = '/dev/stdin';
const input = require('fs')
  .readFileSync(readFileSyncPath)
  .toString()
  .trim()
  .split('\n')

const pitches = input[0].split(' ').map(Number)
let prev = pitches[0]
let isAscending = false
let isDescending = false
let isMixed = false
pitches.forEach((pitch, idx) => {
  if (idx > 0) {
    if (prev > pitch) {
      if (isAscending) {
        isMixed = true
      }
      isDescending = true
      // isAscending = false
    } else if (prev < pitch) {
      if (isDescending) {
        isMixed = true
      }

      isAscending = true
      // isDescending = false
    }
    prev = pitch
  }
})

if (isMixed) {
  console.log('Mixed')
} else if (isAscending) {
  console.log('ascending')
} else {
  console.log('descending')
}
