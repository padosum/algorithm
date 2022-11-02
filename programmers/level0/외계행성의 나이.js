const getAsciiCode = (num) => num.charCodeAt(0) - 48 + 97;
const getCharFromAsciiCode = (code) => String.fromCharCode(code);
function solution(age) {
  const ageArr = age.toString().split("");
  const result = ageArr.map(getAsciiCode).map(getCharFromAsciiCode).join("");
  return result;
}
