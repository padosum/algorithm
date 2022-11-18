function solution(babbling) {
  const pronounces = ['aya', 'ye', 'woo', 'ma'];

  const result = babbling
    .map(word => {
      let remainWord = word;
      for (pronounce of pronounces) {
        remainWord = remainWord.replace(new RegExp(`(${pronounce})`, 'g'), ' ');
      }

      return remainWord;
    })
    .filter(word => word.trim() === '').length;

  return result;
}
