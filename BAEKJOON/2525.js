const readFileSyncPath = require('path')
  .basename(__filename)
  .replace(/js$/, 'txt')
// const readFileSyncPath = '/dev/stdin';
const input = require('fs')
  .readFileSync(readFileSyncPath)
  .toString()
  .trim()
  .split('\n')

const [hour, minute] = input[0].split(' ').map(Number)
const time = Number(input[1])

const addMinute = minute + time
if (minute + time >= 60) {
  const addHour = Math.floor(addMinute / 60)
  if (hour + addHour >= 24) {
    console.log(hour + addHour - 24, addMinute % 60)
  } else {
    console.log(hour + addHour, addMinute % 60)
  }
} else {
  console.log(hour, addMinute)
}
