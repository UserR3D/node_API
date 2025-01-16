import { Request, Response } from 'express';
import { DbUpdate } from '../services/db.service';

const updateApi = async (req: Request, res: Response) => {
  try {
    res.json(await DbUpdate(+req.params.id, req.body.Task, req.body.Results));
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error:', err.message);
    }
  }
};

export default updateApi;
