function solution(places) {
  const answer = [];

  places.forEach((place, idx) => {
    let flag = false;
    const pArr = place.map(p => p.split(""));
    for (let i = 0; i < pArr.length; i++) {
      for (let j = 0; j < pArr[0].length; j++) {
        if (pArr[i][j] === "P") {
          // 우측
          if (j + 1 < pArr[0].length) {
            const right = pArr[i][j + 1];
            if (right === "P") {
              flag = true;
            }

            if (right === "O") {
              if (j + 2 < pArr[0].length) {
                const r = pArr[i][j + 2];
                if (r === "P") {
                  flag = true;
                }
              }

              if (i + 1 < pArr.length) {
                const rightBottom = pArr[i + 1][j + 1];
                if (rightBottom === "P") {
                  flag = true;
                }
              }

              if (i - 1 >= 0) {
                const rightTop = pArr[i - 1][j + 1];
                if (rightTop === "P") {
                  flag = true;
                }
              }
            }
          }

          // 좌측
          if (j - 1 >= 0) {
            const left = pArr[i][j - 1];
            if (left === "P") {
              flag = true;
            }

            if (left === "O") {
              if (i + 1 < pArr.length) {
                const leftBottom = pArr[i + 1][j - 1];
                if (leftBottom === "P") {
                  flag = true;
                }
              }
              if (i - 1 >= 0) {
                const leftTop = pArr[i - 1][j - 1];
                if (leftTop === "P") {
                  flag = true;
                }
              }
            }
          }

          // 하단
          if (i + 1 < pArr.length) {
            const bottom = pArr[i + 1][j];
            if (bottom === "P") {
              flag = true;
            }

            if (bottom === "O") {
              if (i + 2 < pArr.length) {
                const b = pArr[i + 2][j];
                if (b === "P") {
                  flag = true;
                }
              }
            }
          }
        }
      }
    }
    answer.push(flag ? 0 : 1);
  });
  return answer;
}
