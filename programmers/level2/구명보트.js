function solution(people, limit) {
  let answer = 0;
  const sortedPeople = people.sort((a, b) => a - b);

  let start = 0;
  let end = sortedPeople.length - 1;

  while (start <= end) {
    if (sortedPeople[start] + sortedPeople[end] <= limit) {
      start++;
    }
    end--;
    answer += 1;
  }
  return answer;
}
