function solution(tickets) {
  let answer = [];

  const DFS = (path, to, result) => {
    if (answer.length !== 0) {
      return;
    }

    for (let i = 0; i < path.length; i++) {
      let [currentFrom, currentTo] = path[i];

      if (to === currentFrom) {
        const nextPath = path.filter((p, idx) => idx !== i);

        if (nextPath.length === 0) {
          answer = [...result, currentFrom, currentTo];
          break;
        } else {
          DFS(nextPath, currentTo, [...result, to]);
        }
      }
    }
  };

  const path = tickets.sort();

  tickets.forEach((ticket, idx) => {
    const [from, to] = ticket;

    if (from === "ICN") {
      const nextPath = path.filter((p, index) => index !== idx);
      DFS(nextPath, to, [from]);
    }
  });

  return answer;
}
