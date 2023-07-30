import {
	getRoles,
	createRol,
	updateRol,
	deleteRol
} from '../controllers/rol.controller';
import { RouterGenerator } from '../helpers/router.helper';
import { isAuth } from '../middlewares/auth.middleware';

const routes = RouterGenerator.resourceAll({
	path: '/rol',
	functions: [
		getRoles,
		createRol,
		updateRol,
		deleteRol,
	],
	middlewares: [
		isAuth,
	]
});

export default routes;
