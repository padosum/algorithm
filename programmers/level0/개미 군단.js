function solution(hp) {
  let hpTemp = hp;

  const GENERAL_ANT_POWER = 5;
  const SOLDIER_ANT_POWER = 3;
  const WORK_ANT_POWER = 1;
  const offensePowers = [GENERAL_ANT_POWER, SOLDIER_ANT_POWER, WORK_ANT_POWER];

  let antIndex = 0;
  let militaryPower = 0;

  while (hpTemp !== 0) {
    militaryPower = militaryPower + parseInt(hpTemp / offensePowers[antIndex]);
    hpTemp = hpTemp % offensePowers[antIndex];
    antIndex = antIndex + 1;
  }

  return militaryPower;
}
