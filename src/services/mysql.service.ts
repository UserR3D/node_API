import mysql from 'mysql2/promise';
import db from '../configs/db.config';
import 'dotenv/config';

async function query(sql: string, params: unknown) {
  const connection = await mysql.createConnection(db);
  const [results] = await connection.execute(sql, params);

  return results;
}

export default query;
