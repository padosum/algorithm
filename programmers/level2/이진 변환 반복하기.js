function solution(s) {
  let count = 0;
  let totalZeroCnt = 0;

  while (s !== "1") {
    count++;
    totalZeroCnt += s.split("").filter(val => val === "0").length;
    s = s
      .split("")
      .filter(val => val === "1")
      .join("");
    s = s.length.toString(2);
  }

  return [count, totalZeroCnt];
}
