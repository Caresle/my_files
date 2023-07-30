import { isAuth } from '../middlewares/auth.middleware';
import {
	getFiles,
	createFiles,
	updateFiles,
	deleteFiles,
} from '../controllers/files.controller';
import { RouterGenerator } from '../helpers/router.helper';

const routes = RouterGenerator.resourceAll({
	path: '/files',
	functions: [
		getFiles,
		createFiles,
		updateFiles,
		deleteFiles,
	],
	middlewares: [
		isAuth
	]
});

export default routes;
