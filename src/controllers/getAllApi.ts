import { Request, Response } from 'express';
import { DbgetAll } from '../services/db.service';
const getAllApi = async (_req: Request, res: Response) => {
  try {
    res.send(await DbgetAll());
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error:', err);
    }
  }
};

export default getAllApi;
