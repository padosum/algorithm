
const getParent = (parentTable, item) => {
  if (parentTable[item] === item) {
      return item
  }
  
  return getParent(parentTable, parentTable[item])
}

const unionParent = (parentTable, a, b) => {
  a = getParent(parentTable, a);
  b = getParent(parentTable, b);
  
  if (a < b) {
      parentTable[b] = a;
  } else {
      parentTable[a] = b;
  }
}

const sameParent = (parentTable, a, b)  => {
  a = getParent(parentTable, a);
  b = getParent(parentTable, b);
  
  if (a === b) {
      return 1;
  }
  
  return 0;
}
function solution(n, costs) {
  let result = 0;
  let parentTable = {}
  
  const sortedCosts = costs.sort((a, b) => a[2] - b[2])
  
  for (let i = 0; i < n; i++) {
      parentTable[i] = i;
  }
  
  sortedCosts.map((item) => {
      const [a, b, cost] = item
      // 사이클이 발생하지 않는 경우(같은 부모에 연결되지 않은 경우)에만 부모 노드를 병합한다.
      if (!sameParent(parentTable, a, b)) {
          unionParent(parentTable, a, b)
          result += cost
      }
  })
  return result;
} 