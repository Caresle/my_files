import { Router } from 'express';
import {
	getRoles,
	createRol,
	updateRol,
	deleteRol
} from '../controllers/rol.controller';
import { isAuth } from '../middlewares/auth.middleware';

const routes = Router();

routes.get('/rol', isAuth, getRoles);
routes.post('/rol', isAuth, createRol);
routes.put('/rol', isAuth, updateRol);
routes.delete('/rol', isAuth, deleteRol);

export default routes;
