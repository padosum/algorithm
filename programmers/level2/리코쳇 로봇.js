function getPos(index, now, map) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let { x, y } = now;
  const ix = dx[index];
  const iy = dy[index];
  while (
    x + ix >= 0 &&
    x + ix < map.length &&
    y + iy >= 0 &&
    y + iy < map[0].length &&
    map[x + ix][y + iy] !== "D"
  ) {
    x += ix;
    y += iy;
  }
  return { x, y, level: now.level + 1 };
}

function bfs(start, goal, map) {
  const visited = Array.from(Array(map.length), () =>
    new Array(map[0].length).fill(false)
  );

  const queue = [start];
  visited[start.x][start.y] = true;

  while (queue.length > 0) {
    const now = queue.shift();
    const { x, y, level } = now;
    if (x === goal.x && y === goal.y) {
      return level;
    }

    for (let i = 0; i < 4; i++) {
      const next = getPos(i, now, map);
      if (!visited[next.x][next.y]) {
        visited[next.x][next.y] = true;
        queue.push(next);
      }
    }
  }

  return -1;
}

function solution(board) {
  let answer = 0;
  const map = board.map(row => row.split(""));
  let start = {};
  let goal = {};

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === "R") {
        start = { x: i, y: j, level: 0 };
      }
      if (map[i][j] === "G") {
        goal = { x: i, y: j, level: 0 };
      }
    }
  }

  answer = bfs(start, goal, map);
  return answer;
}
