const getMultiset = str => {
  return str
    .split("")
    .slice(0, str.length - 1)
    .map((s, idx) => {
      return s + str[idx + 1];
    })
    .map(s => s.toUpperCase())
    .filter(s => s.match(/^[A-Z]+$/));
};

function solution(str1, str2) {
  let result = 0;
  str1 = getMultiset(str1);
  str2 = getMultiset(str2);

  let str1Map = new Map();
  let str2Map = new Map();

  str1.forEach(str => {
    str1Map.set(str, (str1Map.get(str) || 0) + 1);
  });
  str2.forEach(str => {
    str2Map.set(str, (str2Map.get(str) || 0) + 1);
  });

  let intersectionCnt = 0;
  let unionCnt = 0;
  for (const [key, val] of str1Map) {
    if (str2Map.has(key)) {
      intersectionCnt += Math.min(val, str2Map.get(key));
      unionCnt += Math.max(val, str2Map.get(key));
    } else {
      unionCnt += val;
    }
  }

  for (const [key, val] of str2Map) {
    if (!str1Map.has(key)) {
      unionCnt += val;
    }
  }

  if (str1.length === 0 && str2.length === 0) {
    result = 1;
  } else {
    result = intersectionCnt / unionCnt;
  }
  return Math.floor(result * 65536);
}
