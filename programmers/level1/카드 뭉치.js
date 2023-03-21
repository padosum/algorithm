function solution(cards1, cards2, goal) {
  let answer = 'Yes';
  
  for (const word of goal) {
      if (cards1.indexOf(word) === 0) {
          cards1 = cards1.slice(1, cards1.length + 1)
      } else if (cards2.indexOf(word) === 0) {
          cards2 = cards2.slice(1, cards2.length + 1)
      } else {
          answer = 'No'
          break;
      }
  }
  return answer;
}