function solution(bridge_length, weight, truck_weights) {
  const onBridge = [];
  let onBridgeFlag = [];
  let answer = 0;

  while (truck_weights.length > 0 || onBridge.length > 0) {
    onBridgeFlag = onBridgeFlag.map(val => val + 1);

    if (onBridgeFlag[0] >= bridge_length) {
      onBridge.shift();
      onBridgeFlag.shift();
    }

    const totalWeight = onBridge.reduce((acc, curr) => acc + curr, 0);
    const [current] = truck_weights;

    if (totalWeight + current <= weight && onBridge.length < bridge_length) {
      onBridge.push(truck_weights.shift());
      onBridgeFlag.push(0);
    }

    answer++;
  }
  return answer;
}

// const bridge_length = 2;
// const weight = 10;
// const truck_weights = [7, 4, 5, 6];

// const bridge_length = 100;
// const weight = 100;
// const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

const bridge_length = 100;
const weight = 100;
const truck_weights = [10];
console.log(solution(bridge_length, weight, truck_weights));
