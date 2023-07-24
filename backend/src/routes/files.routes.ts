import { Router } from 'express';

import { isAuth } from '../middlewares/auth.middleware';

import {
	getFiles,
	createFiles,
	updateFiles,
	deleteFiles,
} from '../controllers/files.controller';

const routes = Router();

routes.get('/files', isAuth, getFiles);
routes.post('/files', isAuth, createFiles);
routes.put('/files', isAuth, updateFiles);
routes.delete('/files', isAuth, deleteFiles);

export default routes;
