function solution(name) {
  const CODE_A = 'A'.charCodeAt(0);
  const CODE_Z = 'Z'.charCodeAt(0);
  const BASE = Math.floor(CODE_A + (CODE_Z - CODE_A) / 2);
 
  let result = 0;
  const nameArr = name.split('')
  let len = nameArr.length;
  let index; 
  let move = len - 1; // 단순히 1칸씩 이동하는 경우 이동 횟수는 길이 - 1

  for(let i = 0; i < len; i++){
      const code = nameArr[i].charCodeAt(0)
      result += Math.min(code - CODE_A, CODE_Z - code + 1);

      index = i + 1;
      while(index < len && name.charAt(index) == 'A'){
          index++;
      }

      // 순방향으로 갔다가 A를 만나면 다시 돌아간 후, 역방향(전체 길이 - A를 만날 때까지)으로
      move = Math.min(move, i * 2 + len - index);
      
      // 역방향(전체 길이 - A를 만날 때 까지)으로 갔다가 A를 만나면 다시 돌아온 후 순방향으로 
      move = Math.min(move, (len - index) * 2 + i);
  }
  return result + move;
} 


 