const dfs = (numbers, target, sum, idx) => {
  let result = 0;

  if (idx === numbers.length) {
    return target === sum ? 1 : 0;
  }

  result += dfs(numbers, target, sum + numbers[idx], idx + 1);
  result += dfs(numbers, target, sum + numbers[idx] * -1, idx + 1);

  return result;
};

function solution(numbers, target) {
  return dfs(numbers, target, 0, 0);
}
