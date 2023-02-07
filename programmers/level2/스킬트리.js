function solution(skill, skill_trees) {
  let answer = 0;
  
  const skillArr = skill.split('');
  
  skill_trees.forEach(tree => {
      const preceding = tree.split('').filter(s => skillArr.includes(s))
      if (preceding.every((skill, idx) => skill === skillArr[idx])) {
          answer++;
      }
  })
  return answer;
} 