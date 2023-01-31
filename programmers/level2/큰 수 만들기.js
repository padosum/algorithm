function solution(number, k) {
  let answer = [];
  const numArr = number.split("").map(Number);
  for (let num of numArr) {
    while (k > 0 && answer.length > 0 && answer[answer.length - 1] < num) {
      answer.pop();
      k = k - 1;
    }
    answer.push(num);
  }

  return answer.slice(0, answer.length - k).join("");
}
