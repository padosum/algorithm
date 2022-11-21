function solution(nums) {
  const ponkemon = [...new Set(nums)]

  if (nums.length / 2 < ponkemon.length) {
    return nums.length / 2
  } else {
    return ponkemon.length
  }
}
