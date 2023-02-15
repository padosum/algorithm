const divide = arr => {
  if (arr.length === 0) {
    return "";
  }

  if (rightParenthiesis(arr)) {
    return arr.join("");
  } else {
    const pMap = new Map();
    let i = 0;
    for (const item of arr) {
      pMap.set(item, (pMap.get(item) || 0) + 1);

      if (pMap.get("(") === pMap.get(")")) {
        break;
      }
      i++;
    }
    const u = arr.slice(0, i + 1);
    const v = arr.slice(i + 1);

    if (rightParenthiesis(u)) {
      const result = divide(v);
      return `${u.join("") + result}`;
    } else {
      const result = divide(v);

      const removeFirstLast = u.map((item, idx) =>
        idx === 0 || idx === u.length - 1 ? "" : item
      );
      const reverse = removeFirstLast.map(item => {
        if (item === ")") {
          return "(";
        } else if (item === "(") {
          return ")";
        } else {
          return item;
        }
      });

      return `(${result})${reverse.join("")}`;
    }
  }
};

const rightParenthiesis = parenthiesis => {
  let stack = [];
  parenthiesis.forEach(item => {
    const top = stack[stack.length - 1];
    if (top === "(") {
      if (item !== ")") {
        stack.push(item);
      } else {
        stack.pop();
      }
    } else {
      stack.push(item);
    }
  });
  return stack.length === 0;
};

function solution(p) {
  const arr = p.split("");
  const result = divide(arr);
  return result;
}
