function solution(numbers, direction) {
  if (direction === 'left') {
    return numbers.map((num, idx) => {
      if (idx === numbers.length - 1) {
        return numbers[0];
      } else {
        return numbers[idx + 1];
      }
    });
  } else if (direction === 'right') {
    return numbers.map((num, idx) => {
      if (idx === 0) {
        return numbers[numbers.length - 1];
      } else {
        return numbers[idx - 1];
      }
    });
  }
}
