function solution(numbers) {
  const answer = numbers.map(num => {
    if (num % 2 === 0) {
      return num + 1;
    } else {
      let binary = num.toString(2);
      let zeroIdx = binary.split("").lastIndexOf("0");

      if (zeroIdx === -1) {
        binary = "0" + binary;
        zeroIdx = 0;
      }

      const number = binary.split("").map((bit, idx) => {
        if (idx === zeroIdx) {
          return 1;
        } else if (idx === zeroIdx + 1) {
          return Number(!bit);
        } else {
          return bit;
        }
      });

      return parseInt(number.join(""), 2);
    }
  });
  return answer;
}
