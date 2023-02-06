function solution(fees, records) {
  let answer = [];

  const IN_LIST = {};
  const OUT_LIST = {};

  records.forEach(record => {
    const [time, number, action] = record.split(" ");

    if (action === "IN") {
      if (IN_LIST[number]) {
        IN_LIST[number].push(time);
      } else {
        IN_LIST[number] = [time];
      }
    } else if (action === "OUT") {
      if (OUT_LIST[number]) {
        OUT_LIST[number].push(time);
      } else {
        OUT_LIST[number] = [time];
      }
    }
  });

  const [base, baseCharge, unitTime, unitCharge] = fees;

  for (const item of Object.entries(IN_LIST).sort(
    ([a], [b]) => Number(a) - Number(b)
  )) {
    const [number, inList] = item;
    const outList = OUT_LIST[number];

    let fee = 0;
    let totalMinutes = 0;
    inList.forEach((inTime, idx) => {
      const [inHour, inMinutes] = inTime.split(":").map(Number);
      const [outHour, outMinutes] =
        outList && outList.length > idx
          ? outList[idx].split(":").map(Number)
          : [23, 59];

      let calcHour = outHour;
      let calcMinutes = outMinutes;

      if (calcMinutes < inMinutes) {
        calcMinutes = calcMinutes + 60 - inMinutes;
        calcHour = calcHour - 1;
      } else {
        calcMinutes = calcMinutes - inMinutes;
      }

      calcHour = calcHour - inHour;
      totalMinutes += calcHour * 60 + calcMinutes;
    });

    if (base < totalMinutes) {
      fee =
        baseCharge + Math.ceil((totalMinutes - base) / unitTime) * unitCharge;
    } else {
      fee = baseCharge;
    }

    answer.push(fee);
  }

  return answer;
}
