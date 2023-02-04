function solution(maps) {
  const DIRECTION = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const row = maps.length - 1;
  const col = maps[0].length - 1;

  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [y, x, count] = queue.shift();

    if (y === row && x === col) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const [dy, dx] = DIRECTION[i];
      const nextX = x + dx;
      const nextY = y + dy;

      if (nextY < 0 || nextX < 0 || nextY > row || nextX > col) {
        continue;
      }

      if (maps[nextY][nextX] === 0) {
        continue;
      }

      maps[nextY][nextX] = 0;

      queue.push([nextY, nextX, count + 1]);
    }
  }
  return -1;
}
