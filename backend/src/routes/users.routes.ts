import {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
} from '../controllers/users.controller';
import {
	isAuth
} from '../middlewares/auth.middleware';
import { RouterGenerator } from '../helpers/router.helper';

const routes = RouterGenerator.resourceAll({
	path: '/users',
	functions: [
		getUsers,
		createUser,
		updateUser,
		deleteUser,
	],
	middlewares: [
		isAuth,
	],
});

export default routes;
