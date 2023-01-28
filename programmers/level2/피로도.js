function solution(k, dungeons) {
  let result = -1;

  const dfs = (dungeons, k, cnt) => {
    dungeons.forEach((dungeon, idx) => {
      if (dungeon === "marked") {
        return;
      }

      const [essential, usage] = dungeon;
      if (k < essential) {
        return;
      }
      const markedDungeons = [...dungeons];
      markedDungeons[idx] = "marked";
      dfs(markedDungeons, k - usage, cnt + 1);
    });

    result = Math.max(result, cnt);
  };

  dfs(dungeons, k, 0);

  return result;
}
