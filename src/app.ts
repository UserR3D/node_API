import express from 'express';
import 'dotenv/config';
import router from './server';

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log('test');
});
