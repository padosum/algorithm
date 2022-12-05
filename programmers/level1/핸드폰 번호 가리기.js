function solution(phone_number) {
  let len = phone_number.length - 5;
  const result = phone_number.split("").map((number, idx) => {
    return idx <= len ? "*" : number;
  });
  return result.join("");
}
