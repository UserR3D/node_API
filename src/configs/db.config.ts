import 'dotenv/config';
import { ConnectionOptions } from 'mysql2';

const db: ConnectionOptions = {
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  port: +!process.env.MYSQL_PORT | 3306,
};

export default db;
