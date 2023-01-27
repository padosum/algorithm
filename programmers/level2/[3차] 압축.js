function solution(msg) {
  const result = [];
  const CODE_A = 65;
  const CODE_Z = 90;

  const dic = {};
  for (let i = CODE_A; i <= CODE_Z; i++) {
    dic[String.fromCharCode(i)] = i - CODE_A + 1;
  }

  const msgArr = msg.split("");

  let existsInDicCnt = 0;
  for (let i = 0; i < msgArr.length; i++) {
    if (existsInDicCnt !== 0) {
      existsInDicCnt--;
    } else {
      let nextIdx = i + 1;
      let newWord = msgArr[i];

      while (nextIdx <= msgArr.length - 1) {
        newWord += msg[nextIdx];
        if (dic[newWord]) {
          existsInDicCnt++;
          nextIdx++;
        } else {
          dic[newWord] = Object.keys(dic).length + 1;
          if (existsInDicCnt === 0) {
            result.push(dic[msgArr[i]]);
          } else {
            result.push(dic[newWord.slice(0, -1)]);
          }
          break;
        }
      }

      if (msgArr.length === nextIdx) {
        result.push(dic[newWord]);
      }
    }
  }

  return result;
}
