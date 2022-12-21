function solution(X, Y) {
  const x = X.split("");
  const y = Y.split("");
  const xMap = new Map();
  const yMap = new Map();

  x.forEach((val, idx) => {
    xMap.set(val, (xMap.get(val) || 0) + 1);
  });
  y.forEach((val, idx) => {
    yMap.set(val, (yMap.get(val) || 0) + 1);
  });

  let result = "";
  for ([key, val] of xMap) {
    if (yMap.has(key)) {
      const min = Math.min(xMap.get(key), yMap.get(key));
      result += key.repeat(min);
    }
  }

  let answer =
    result === ""
      ? "-1"
      : result
          .split("")
          .sort((a, b) => b - a)
          .join("");

  if (Number(answer) === 0) answer = "0";

  return answer;
}
