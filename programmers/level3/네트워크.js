const getParent = (parentTable, item) => {
  if (parentTable[item] === item) {
    return item;
  }
  return getParent(parentTable, parentTable[item]);
};

const unionParent = (parentTable, a, b) => {
  a = getParent(parentTable, a);
  b = getParent(parentTable, b);

  if (a < b) {
    parentTable[b] = a;
  } else {
    parentTable[a] = b;
  }
};

function solution(n, computers) {
  var answer = 0;
  const parents = {};

  for (let i = 1; i <= n; i++) {
    parents[i] = i;
  }

  computers.forEach((computer, idx) => {
    computer.forEach((route, i) => {
      if (idx !== i) {
        if (route) {
          unionParent(parents, idx + 1, i + 1);
        }
      }
    });
  });

  const result = {};
  for (const v of Object.values(parents)) {
    if (getParent(parents, v) in result) {
      result[getParent(parents, v)] += 1;
    } else {
      result[getParent(parents, v)] = 1;
    }
  }

  return Object.values(result).length;
}
