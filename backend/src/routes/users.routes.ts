import { Router } from 'express';
import {
	getUsers,
	createUser,
} from '../controllers/users.controller';

const routes = Router();

routes.get('/users', getUsers);
routes.post('/users', createUser);

export default routes;
