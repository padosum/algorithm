const assert = require("assert");

function solution(n, words) {
  const answer = [];
  const map = new Map();
  const completed = [];

  map.set(0, 1);
  completed.push(words[0]);

  for (let i = 1; i < words.length; i++) {
    const order = i % n;
    const prev = words[i - 1];
    const currentWord = words[i];
    const [currentFirst, ...rest] = currentWord;
    const prevLast = prev.slice(prev.length - 1);
    const duplicated = completed.includes(currentWord);

    if (currentFirst === prevLast && !duplicated) {
      map.set(order, (map.get(order) || 0) + 1);
      completed.push(currentWord);
    } else {
      answer.push(order + 1);
      answer.push((map.get(order) || 0) + 1);
      break;
    }
  }
  return answer.length === 0 ? [0, 0] : answer;
}
