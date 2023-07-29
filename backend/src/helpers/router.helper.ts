import { Router, Request, Response, NextFunction } from 'express';

export enum ERouterActions {
	GET,
	POST,
	PUT,
	PATCH,
	DELETE,
	ALL,
}

interface IRouterElement {
	path: string;
	actions: ERouterActions[];
	functions: Array<(req: Request, res: Response) => unknown>;
	middlewares?: Array<(req: Request, res: Response, next: NextFunction) => unknown>;
}

export class RouterGenerator {
	static resource(res: IRouterElement) : Router {
		const routes = Router();

		if (res.actions.length !== res.functions.length) return routes;

		if (res.middlewares !== undefined)
			routes.use(res.path, ...res.middlewares);

		for (let i = 0; i < res.actions.length; i++) {
			if (res.actions[i] === ERouterActions.GET)
				routes.get(res.path, res.functions[i]);

			if (res.actions[i] === ERouterActions.POST)
				routes.post(res.path, res.functions[i]);

			if (res.actions[i] === ERouterActions.PUT)
				routes.put(res.path, res.functions[i]);

			if (res.actions[i] === ERouterActions.PATCH)
				routes.patch(res.path, res.functions[i]);

			if (res.actions[i] === ERouterActions.DELETE)
				routes.delete(res.path, res.functions[i]);
		}

		return routes;
	}
}
