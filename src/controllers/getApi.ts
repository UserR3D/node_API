import { Request, Response } from 'express';

const getApi = (_req: Request, res: Response) => {
  res.send('Hello World');
};

export default getApi;
