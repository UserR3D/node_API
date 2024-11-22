import { Request, Response } from 'express';
import { DbDelete } from '../services/db.service';

const deleteApi = async (req: Request, res: Response) => {
  try {
    res.send(await DbDelete(+req.params.id));
  } catch (err) {
    if (err instanceof Error) {
      res.json({ Error: true, Message: 'Error execute sql' });
    }
  }
};

export default deleteApi;
