import { Router } from 'express';
import getApi from './controllers/getApi';
import postApi from './controllers/postApi';

const router = Router();

router.get('/', getApi);

router.post('/post', postApi);

export default router;
