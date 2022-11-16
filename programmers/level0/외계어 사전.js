function solution(spell, dic) {
  const result = dic.map(word => {
    let newWord = word;

    spell.forEach(char => {
      const wordArr = newWord.split('');
      const idx = wordArr.findIndex(value => value === char);
      if (idx !== -1) {
        wordArr[idx] = '';
      } else {
        wordArr.push(',');
      }

      newWord = wordArr.join('');
    });

    return newWord;
  });

  if (result.filter(val => val === '').length > 0) {
    return 1;
  } else {
    return 2;
  }
}
