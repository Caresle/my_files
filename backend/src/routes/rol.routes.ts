import { Router } from 'express';
import {
	getRoles,
	createRol,
	updateRol,
	deleteRol
} from '../controllers/rol.controller';


const routes = Router();

routes.get('/rol', getRoles);
routes.post('/rol', createRol);
routes.put('/rol', updateRol);
routes.delete('/rol', deleteRol);

export default routes;
