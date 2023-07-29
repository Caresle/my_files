import {
	executeLogin,
	testLogin
} from '../controllers/login.controller';

import {
	RouterGenerator,
	ERouterActions,
} from '../helpers/router.helper';

const routes = RouterGenerator.resource({
	path: '/login',
	actions: [
		ERouterActions.GET,
		ERouterActions.POST
	],
	functions: [
		testLogin,
		executeLogin,
	],
});

export default routes;
