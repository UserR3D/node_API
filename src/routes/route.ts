import { Router } from 'express';
import getApi from '../controllers/getApi';
import postApi from '../controllers/postApi';
import deleteApi from '../controllers/deleteApi';

const router = Router();

router.get('/', getApi);
router.post('/createTask', postApi);
router.delete('/deleteTask/:id', deleteApi);

export default router;
