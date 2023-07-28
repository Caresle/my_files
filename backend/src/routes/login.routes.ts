// import { Router } from 'express';

import {
	executeLogin,
	testLogin
} from '../controllers/login.controller';

import {
	RouterGenerator,
	ERouterActions,
} from '../helpers/router.helper';

// const routes = Router();

// routes.get('/login', testLogin);
// routes.post('/login', executeLogin);

const routes = RouterGenerator.resource({
	path: '/login',
	actions: [
		ERouterActions.GET,
		ERouterActions.POST
	],
	functions: [
		testLogin,
		executeLogin,
	]
});

export default routes;
