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

function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;

  wires.forEach((wire, idx) => {
    const parentTable = {};
    for (let i = 1; i <= n; i++) {
      parentTable[i] = i;
    }

    const cutWires = wires.filter((w, i) => i !== idx);

    cutWires.map(([a, b]) => {
      unionParent(parentTable, a, b);
    });

    let nodes = {};
    for (const v of Object.values(parentTable)) {
      if (getParent(parentTable, v) in nodes) {
        nodes[getParent(parentTable, v)] += 1;
      } else {
        nodes[getParent(parentTable, v)] = 1;
      }
    }

    const [first, second] = Object.values(nodes);
    answer = Math.min(answer, Math.abs(first - second));
  });

  return answer;
}
