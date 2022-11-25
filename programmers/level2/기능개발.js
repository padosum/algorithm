function solution(progresses, speeds) {
  let result = [];
  let pro = [...progresses];
  while (pro.length > 0) {
    let n = 0;
    pro = pro.map((value, idx) => value + speeds[idx]);

    const [first] = pro;

    if (first >= 100) {
      for (let i = 0; i < pro.length; i++) {
        if (pro[i] < 100) break;
        n++;
      }

      for (let i = 0; i < n; i++) {
        pro.shift();
        speeds.shift();
      }

      if (n > 0) {
        result = [...result, n];
      }
    }
  }
  return result;
}

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];
console.log(solution(progresses, speeds));
