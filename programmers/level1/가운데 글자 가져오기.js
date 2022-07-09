function solution(s) {
    let answer = '';
    const len = s.length
    // 짝수
    if (len % 2 === 0) {
       answer = s.split("")[(len/2)-1] + s.split("")[(len/2)]
    } else {
        answer = s.split("")[Math.floor(len/2)]
    }
    return answer;
}
