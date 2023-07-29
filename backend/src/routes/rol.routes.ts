import {
	getRoles,
	createRol,
	updateRol,
	deleteRol
} from '../controllers/rol.controller';
import { ERouterActions, RouterGenerator } from '../helpers/router.helper';
import { isAuth } from '../middlewares/auth.middleware';

const routes = RouterGenerator.resource({
	path: '/rol',
	actions: [
		ERouterActions.GET,
		ERouterActions.POST,
		ERouterActions.PUT,
		ERouterActions.DELETE,
	],
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
