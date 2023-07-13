import { Router } from 'express';
import {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
} from '../controllers/users.controller';
import {
	isAuth
} from '../middlewares/auth.middleware';

const routes = Router();

routes.get('/users', isAuth, getUsers);
routes.post('/users', isAuth, createUser);
routes.put('/users/:id', isAuth, updateUser);
routes.delete('/users/:id', isAuth, deleteUser);

export default routes;
