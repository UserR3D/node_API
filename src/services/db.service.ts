import query from './mysql.service';

async function DbgetAll() {
  const result = await query('SELECT * FROM showBoard');
  return result;
}

async function Dbget(params: number) {
  const result = await query('SELECT* FROM `showBoard` WHERE id= ?', [params]);
  return result;
}

async function Dbcreate(task: Api) {
  const result = await query(
    'INSERT INTO showBoard(Task, Results) VALUES (?, ?)',
    [task.Task, task.Results]
  );
  return result;
}

async function DbDelete(params: number) {
  const result = await query('DELETE FROM showBoard where Id = ?', [params]);
  return result;
}
async function DbUpdate(response: string, id: number) {
  const result = await query('UPDATE showBoard set Results = ? WHERE id = ?', [
    response,
    id,
  ]);
  return result;
}

export { Dbcreate, Dbget, DbgetAll, DbDelete, DbUpdate };
