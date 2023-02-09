const getFilePart = file => {
  const name = file.split("");
  const numStartIdx = name.findIndex(
    s => s !== " " && Number.isInteger(Number(s))
  );
  const head = name.slice(0, numStartIdx).join("").toUpperCase();
  const numEndIdx = name
    .slice(numStartIdx, name.length)
    .findIndex((s, idx) => s === " " || !Number.isInteger(Number(s)));
  const number = Number(
    name
      .slice(
        numStartIdx,
        numStartIdx + (numEndIdx === -1 || numEndIdx >= 6 ? 5 : numEndIdx)
      )
      .join("")
  );

  return {
    head,
    number,
  };
};

function solution(files) {
  files.sort((a, b) => {
    const fileA = getFilePart(a);
    const fileB = getFilePart(b);

    if (fileA.head !== fileB.head) {
      return fileA.head.localeCompare(fileB.head);
    } else {
      if (fileA.number !== fileB.number) {
        return fileA.number - fileB.number;
      } else {
        return 0;
      }
    }
  });
  return files;
}
