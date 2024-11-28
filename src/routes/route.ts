import { Router } from 'express';
import getAllApi from '../controllers/getAllApi';
import postApi from '../controllers/postApi';
import deleteApi from '../controllers/deleteApi';
import getApi from '../controllers/getApi';
import updateApi from '../controllers/updateApi';

const router = Router();

router.get('/', getAllApi);
router.get('/showTask/:id', getApi);
router.post('/createTask', postApi);
router.delete('/deleteTask/:id', deleteApi);
router.put('/updateTask/:id', updateApi);

export default router;
