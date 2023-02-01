function solution(answers) {
  var answer = [];

  // 1번: 1, 2, 3, 4, 5,
  //      6, 7, 8, 9, 10
  // 2번: 2, 1, 2, 3, 2, 4, 2, 5
  // a[0] = p2[0] 0 % 7 = 0
  // a[1] = p2[1] 1 % 7 = 1
  // a[8] = p2[0] 8 % 7 = 1 - 1
  // 3번: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5
  // a[0] = p3[0] = 0 & 9 = 0
  // a[1] = p3[1] = 1 % 9 = 1

  // a[10] = p3[0] 10 % 9 - 1
  // a[11] = p3[1] 11 % 9 = 2 - 1 = 1
  // a[12] = p3[2] 12 % 9 = 3 - 1 = 2

  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const corrects = [0, 0, 0];

  answers.forEach((ans, idx) => {
    if (ans === (idx % 5) + 1) {
      corrects[0] = corrects[0] + 1;
    }

    if (ans === p2[idx % 8]) {
      corrects[1] = corrects[1] + 1;
    }

    if (ans === p3[idx % 10]) {
      corrects[2] = corrects[2] + 1;
    }
  });

  const max = Math.max(...corrects);

  corrects.forEach((c, i) => {
    if (c === max) {
      answer.push(i + 1);
    }
  });

  return answer;
}

function solution2(answers) {
  let answer = [];

  const num1 = [1, 2, 3, 4, 5];
  const num2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const score = new Map();
  score.set(1, 0);
  score.set(2, 0);
  score.set(3, 0);

  answers.forEach((ans, idx) => {
    if (num1[idx % 5] === ans) {
      score.set(1, score.get(1) + 1);
    }

    if (num2[idx % 8] === ans) {
      score.set(2, score.get(2) + 1);
    }

    if (num3[idx % 10] === ans) {
      score.set(3, score.get(3) + 1);
    }
  });

  const max = Math.max(...score.values());

  for (const [key, value] of score.entries()) {
    if (value === max) {
      answer.push(key);
    }
  }
  return answer;
}
