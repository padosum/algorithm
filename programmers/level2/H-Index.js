function solution(citations) {
  const sorted = citations.sort((a, b) => b - a);
  let answer = sorted.length;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] <= i) {
      answer = i;
      break;
    }
  }

  return answer;
}
