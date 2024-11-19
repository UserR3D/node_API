import { Request, Response } from 'express';
import { Dbcreate } from '../services/db.service';

const postApi = async (req: Request, res: Response) => {
  try {
    res.json(await Dbcreate(req.body as Api));
  } catch (err) {
    if (err instanceof Error)
      console.error('Error while creating tasks', err.message);
  }
};

export default postApi;
