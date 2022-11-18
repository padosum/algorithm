function solution(id_pw, db) {
  const [id, pw] = id_pw;
  if (db.some(([db_id, db_pw]) => db_id === id && db_pw === pw)) {
    return 'login';
  }

  if (db.some(([db_id, db_pw]) => db_id === id && db_pw !== pw)) {
    return 'wrong pw';
  }

  return 'fail';
}
