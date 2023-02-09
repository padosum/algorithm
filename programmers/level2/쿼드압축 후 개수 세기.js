const same = (board, x, y, n) => {
  let v = board[y][x];
  let flag = true;
  for (let i = y; i < y + n; i++) {
    if (!flag) {
      break;
    }
    for (let j = x; j < x + n; j++) {
      if (board[i][j] !== v) {
        flag = false;
        break;
      }
    }
  }

  return flag;
};

const result = [0, 0];

const dfs = (x, y, n, board) => {
  if (n === 1 || same(board, x, y, n)) {
    if (board[y][x] === 0) {
      result[0] = result[0] + 1;
    } else {
      result[1] = result[1] + 1;
    }
    return;
  }

  // 1사분면
  const one = dfs(x, y, n / 2, board);
  // 2사분면
  const two = dfs(x + n / 2, y, n / 2, board);
  // 3사분면
  const three = dfs(x, y + n / 2, n / 2, board);
  // 4사분면
  const four = dfs(x + n / 2, y + n / 2, n / 2, board);

  return;
};

function solution(arr) {
  const n = arr.length;

  if (arr.every(row => row.every(cell => cell === 0))) {
    return [1, 0];
  }
  if (arr.every(row => row.every(cell => cell === 1))) {
    return [0, 1];
  }

  dfs(0, 0, n, arr);

  return result;
}
