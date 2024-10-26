import { Router } from 'express';
import { Request, Response } from 'express';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});

router.post('/post', (req: Request, res: Response) => {
  res.send(req.body);
});

export default router;
