import query from './mysql.service';

async function create(post: Api) {
  const result = await query(
    'INSERT INTO showBoard(Task, Results) VALUES (?, ?)',
    [post.Task, post.Results]
  );
  return result;
}

export default create;
