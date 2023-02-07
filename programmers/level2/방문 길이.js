function solution(dirs) {
  var answer = 0;

  let curX = 0;
  let curY = 0;

  const dirArr = dirs.split("");
  const routeSet = new Set();

  for (let i = 0; i < dirArr.length; i++) {
    const command = dirArr[i];
    if (command === "U") {
      if (curY === 5) {
        continue;
      }
      routeSet.add(`${curX}${curY}${curX}${curY + 1}`);
      curY = curY + 1;
    } else if (command === "D") {
      if (curY === -5) {
        continue;
      }
      routeSet.add(`${curX}${curY - 1}${curX}${curY}`);
      curY = curY - 1;
    } else if (command === "R") {
      if (curX === 5) {
        continue;
      }
      routeSet.add(`${curX}${curY}${curX + 1}${curY}`);
      curX = curX + 1;
    } else if (command === "L") {
      if (curX === -5) {
        continue;
      }
      routeSet.add(`${curX - 1}${curY}${curX}${curY}`);
      curX = curX - 1;
    }
  }
  return routeSet.size;
}
