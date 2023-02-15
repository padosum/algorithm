const getMusicNoteArr = arr => {
  const musicNote = [];
  let prev = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === "#") {
      prev = arr[i];
    } else {
      if (arr[i] === "#") {
        musicNote.push(`${prev}#`);
      } else {
        musicNote.push(arr[i]);
      }
    }
  }
  return musicNote;
};

function solution(m, musicinfos) {
  const correctArr = [];
  musicinfos.map(musicInfo => {
    const [start, end, title, music] = musicInfo.split(",");

    const [startHour, startMinutes] = start.split(":").map(Number);
    const [endHour, endMinutes] = end.split(":").map(Number);

    let calcHour = endHour;
    let calcMinutes = startMinutes;
    if (startMinutes > endMinutes) {
      calcHour = calcHour - 1;
      calcMinutes = endMinutes + 60 - startMinutes;
    } else {
      calcMinutes = endMinutes - startMinutes;
    }

    calcHour = calcHour - startHour;

    const playMinutes = calcHour * 60 + calcMinutes;

    let musicArr = music.split("");
    const musicNote = music.match(/[A-Z]#?/g);

    let playMusic = "";
    for (let i = 0; i < playMinutes; i++) {
      playMusic += musicNote[i % musicNote.length];
    }

    let i = playMusic.indexOf(m);
    if (i === -1) {
      return;
    }

    while (i !== -1) {
      if (playMusic[i + m.length] !== "#") {
        correctArr.push({ playMinutes, title });
        break;
      }
      i = playMusic.indexOf(m, i + 1);
    }
  });

  if (correctArr.length === 0) {
    return "(None)";
  } else {
    correctArr.sort((a, b) => {
      if (a.playMinutes === b.playMinutes) {
        return 0;
      } else {
        return b.playMinutes - a.playMinutes;
      }
    });
    return correctArr[0].title;
  }
}
