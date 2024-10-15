import express from 'express';
import { Request, Response } from 'express';

const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(3333, () => {
  console.log('test');
});

export default app;
