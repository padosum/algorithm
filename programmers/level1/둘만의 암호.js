function solution(s, skip, index) {
  const answer = [];
  const CODE_A = 97;
  const CODE_Z = 122;

  const codes = Array.from({ length: 26 }, (v, i) => i + CODE_A).filter(
    code =>
      !skip
        .split("")
        .map(s => s.charCodeAt(0))
        .includes(code)
  );

  const result = [...s].map(char => {
    const idx = codes.indexOf(char.charCodeAt(0)) + index;
    const code = idx >= codes.length ? codes[idx % codes.length] : codes[idx];
    return code;
  });

  return result.map(code => String.fromCharCode(code)).join("");
}
