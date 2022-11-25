function solution(priorities, location) {
  const flags = priorities.map((value, idx) => (idx === location ? 1 : 0));

  let order = 0;
  while (true) {
    const [first] = priorities;
    const priors = priorities.filter(value => value > first);

    if (priors.length > 0) {
      priorities.push(priorities.shift());
      flags.push(flags.shift());
    } else {
      order = order + 1;
      priorities.shift();
      const current = flags.shift();
      if (current === 1) {
        break;
      }
    }
  }

  return order;
}
