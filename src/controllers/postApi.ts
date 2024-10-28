import { Request, Response } from 'express';

const postApi = (req: Request, res: Response) => {
  console.log(req.body);
  res.send('teste realizado');
};

export default postApi;
