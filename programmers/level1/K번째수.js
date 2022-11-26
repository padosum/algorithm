function solution(array, commands) {
  const result = Array.from({ length: commands.length });

  commands.forEach((command, idx) => {
    const [start, end, index] = command;
    const sliceArray = array.slice(start - 1, end);
    result[idx] = sliceArray.sort((a, b) => a - b)[index - 1];
  });

  return result;
}
