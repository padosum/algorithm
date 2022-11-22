function solution(genres, plays) {
  const playTimeMap = new Map();
  const songMap = new Map();
  genres.forEach((genre, idx) => {
    playTimeMap.set(genre, (playTimeMap.get(genre) || 0) + plays[idx]);
    songMap.set(idx, [genre, plays[idx]]);
  });

  const sortedByPlayTime = [...new Set(genres)].sort(
    (a, b) => playTimeMap.get(b) - playTimeMap.get(a)
  );
  const result = [];
  sortedByPlayTime.forEach(genreName => {
    let songs = [];
    for (let [key, value] of songMap.entries()) {
      const [genre, playTime] = value;
      if (genreName === genre) {
        songs.push([key, playTime]);
      }
    }
    songs
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .forEach(([uniqueNum, playTime]) => {
        result.push(uniqueNum);
      });
  });

  return result;
}
