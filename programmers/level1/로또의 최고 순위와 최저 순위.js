function solution(lottos, win_nums) {
  var answer = []

  // [44, 1, 0, 0, 31, 25]
  // [31, 10, 45, 1, 6, 19]

  // lottos 배열에서
  // win_nums에 존재하는 값 확인
  // 1, 31
  // 0 , 0 -> 최대 4개
  // 최소 -> 2개

  const zeroCnt = lottos.filter((l) => l === 0).length

  const corrects = lottos.filter((l) => win_nums.includes(l)).length

  const checkLottoRank = (correctCnt) => {
    let rank = 0
    switch (correctCnt) {
      case 6:
        rank = 1
        break
      case 5:
        rank = 2
        break
      case 4:
        rank = 3
        break
      case 3:
        rank = 4
        break
      case 2:
        rank = 5
        break
      default:
        rank = 6
        break
    }
    return rank
  }

  const high = corrects + zeroCnt
  const low = corrects

  answer.push(checkLottoRank(high))
  answer.push(checkLottoRank(low))

  return answer
}
