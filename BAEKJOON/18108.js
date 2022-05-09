const readFileSyncPath = require('path')
  .basename(__filename)
  .replace(/js$/, 'txt')
// const readFileSyncPath = '/dev/stdin';
const input = Number(
  require('fs').readFileSync(readFileSyncPath).toString().trim().split('\n')
)

console.log(input - 543)
