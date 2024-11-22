import { Request, Response } from 'express';
import { Dbget } from '../services/db.service';

const getApi = async (req: Request, res: Response) => {
  try {
    res.send(await Dbget(+req.params.id));
  } catch (err) {
    if (err instanceof Error) {
      res.json({ Error: true, Message: 'Error execute sql' });
    }
  }
};

export default getApi;
