import query from './mysql.service';

async function DbgetAll() {
  const result = await query('SELECT * FROM showBoard');
  return result;
}

async function Dbcreate(task: Api) {
  const result = await query(
    'INSERT INTO showBoard(Task, Results) VALUES (?, ?)',
    [task.Task, task.Results]
  );
  return result;
}

export { Dbcreate, DbgetAll };
