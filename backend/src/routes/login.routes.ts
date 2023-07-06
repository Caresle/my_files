import { Router } from 'express';

import {
	executeLogin,
	testLogin
} from '../controllers/login.controller';

const routes = Router();

routes.get('/login', testLogin);
routes.post('/login', executeLogin);

export default routes;
