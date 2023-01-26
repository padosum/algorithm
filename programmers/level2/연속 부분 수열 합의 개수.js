function solution(elements) {
  const set = new Set();
  for (let i = 0; i < elements.length; i++) {
    const newElements = elements.concat(elements.slice(0, i + 1));
    for (let j = 0; j < elements.length; j++) {
      const end = j + i + 1;
      set.add(newElements.slice(j, end).reduce((acc, curr) => acc + curr, 0));
    }
  }
  return set.size;
}
