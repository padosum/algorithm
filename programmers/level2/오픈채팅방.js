function solution(record) {
  const log = [];
  const users = {};

  record.forEach(r => {
    const [action, uid, nickname] = r.split(" ");

    if (action === "Enter") {
      users[uid] = nickname;
      log.push({ uid, action });
    } else if (action === "Leave") {
      log.push({ uid, action });
    } else if (action === "Change") {
      users[uid] = nickname;
    }
  });

  const answer = log.map(({ uid, action }) => {
    return `${users[uid]}님이 ${
      action === "Enter" ? "들어왔습니다." : "나갔습니다."
    }`;
  });

  return answer;
}
