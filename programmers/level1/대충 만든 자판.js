function solution(keymap, targets) {
  const keyTable = keymap.reduce((table, keys) => {
    keys.split("").forEach((key, i) => {
      if (table[key]) {
        table[key] = Math.min(table[key], i + 1);
      } else {
        table[key] = i + 1;
      }
    });
    return table;
  }, {});

  const answer = targets.map(target => {
    let cnt = 0;
    for (const key of target.split("")) {
      if (!keyTable[key]) {
        cnt = -1;
        break;
      }
      cnt += keyTable[key];
    }
    return cnt;
  });

  return answer;
}
