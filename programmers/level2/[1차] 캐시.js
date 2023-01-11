function solution(cacheSize, cities) {
  const CACHE_HIT = 1;
  const CACHE_MISS = 5;

  let lru = [];
  let totalTime = 0;

  const upperCaseCities = cities.map(city => city.toUpperCase());

  if (cacheSize === 0) {
    return cities.length * CACHE_MISS;
  }
  upperCaseCities.forEach((city, idx) => {
    if (lru.includes(city)) {
      lru = lru.filter(item => item !== city);
      lru.push(city);
      totalTime += CACHE_HIT;
    } else {
      if (lru.length === cacheSize) {
        lru = lru.slice(1);
      }
      lru.push(city);
      totalTime += CACHE_MISS;
    }
  });
  return totalTime;
}
