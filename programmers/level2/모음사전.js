function solution(word) {
  let answer = 0;
  let flag = true;
  const vowels = ["A", "E", "I", "O", "U"];

  const dfs = w => {
    if (flag) {
      answer++;

      if (w === word) {
        flag = false;
        return;
      }

      if (w.length < 5) {
        vowels.forEach(vowel => {
          dfs(w + vowel);
        });
      }
    } else {
      return;
    }
  };

  dfs("");
  return answer - 1;
}
