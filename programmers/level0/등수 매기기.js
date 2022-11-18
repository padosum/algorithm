function solution(score) {
  const average = score.map(value => {
    const [eng, math] = value;
    return (eng + math) / 2;
  });

  const sorted = [...average].sort((a, b) => b - a);

  return average.map(avg => sorted.findIndex(v => v === avg) + 1);
}
