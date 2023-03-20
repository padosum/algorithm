function solution(wallpaper) {
  const files = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === "#") {
        files.push([i, j]);
      }
    }
  }

  let minX = 0;
  let maxX = 0;
  for (let i = 0; i <= wallpaper[0].length; i++) {
    if (files.filter(file => file[1] < i).length === 0) {
      minX = i;
    }

    if (
      files.filter(file => file[1] < i).length === files.length &&
      maxX === 0
    ) {
      maxX = i;
    }
  }

  let minY = 0;
  let maxY = 0;
  for (let i = 0; i <= wallpaper.length; i++) {
    if (files.filter(file => file[0] < i).length === 0) {
      minY = i;
    }

    if (
      files.filter(file => file[0] < i).length === files.length &&
      maxY === 0
    ) {
      maxY = i;
    }
  }

  return [minY, minX, maxY, maxX];
}
