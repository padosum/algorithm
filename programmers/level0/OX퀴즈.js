function solution(quiz) {
  const result = quiz.map((q) => {
    const [calc, result] = q.split('=');

    const sign = calc.includes('+') ? 1 : -1;
    const [x, y] = calc.split(sign === 1 ? ' + ' : ' - ');

    return Number(x) + Number(y * sign) === Number(result) ? 'O' : 'X';
  });

  return result;
}
