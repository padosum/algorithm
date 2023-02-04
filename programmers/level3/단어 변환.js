const canChange = (word, target) => {
  const wordArr = word.split("");
  let targetArr = target.split("");

  wordArr.forEach(w => {
    const idx = targetArr.findIndex(item => item === w);
    targetArr = targetArr.filter((_, i) => i !== idx);
  });

  return targetArr.length === 1;
};

function solution(begin, target, words) {
  let answer = 0;

  const queue = [[begin, words, 0]];

  while (queue.length) {
    const [from, candidate, count] = queue.shift();

    if (from === target) {
      return count;
    }

    candidate.forEach((w, idx) => {
      if (canChange(from, w)) {
        const rest = candidate.filter((_, i) => i !== idx);
        queue.push([w, rest, count + 1]);
      }
    });
  }

  return answer;
}
