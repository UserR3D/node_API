import express from 'express';
import 'dotenv/config';
import router from './routes/route';
import cors from 'cors';

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log('Server Starting');
});
