export function solution(string) {
  let duplicated = false
  const arr = string.split('')
  const obj = {}
  for (const char of arr) {
    if (obj[char]) {
      duplicated = true
      break
    } else {
      obj[char] = true
    }
  }
  return duplicated
}

// export function solution(string) {
//   let duplicated = false
//   const arr = string.split('')
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         duplicated = true
//         break
//       }
//     }
//   }
//   return duplicated
// }
