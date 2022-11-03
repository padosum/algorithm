const getRspWinValue = (opposite) => {
  const SCISSOR_NUMBER = 2;
  const ROCK_NUMBER = 0;
  const PAPER_NUMBER = 5;

  const oppositeNum = Number(opposite);
  switch (oppositeNum) {
    case SCISSOR_NUMBER:
      return ROCK_NUMBER;
    case ROCK_NUMBER:
      return PAPER_NUMBER;
    case PAPER_NUMBER:
      return SCISSOR_NUMBER;
  }
};

function solution(rsp) {
  const rspArr = rsp.split("");
  const result = rspArr.reduce(
    (acc, curr) => acc + getRspWinValue(curr).toString(),
    ""
  );
  return result;
}
