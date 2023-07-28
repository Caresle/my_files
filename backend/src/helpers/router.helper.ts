import { Router, Request, Response } from 'express';

export enum ERouterActions {
	GET,
	POST,
	PUT,
	PATCH,
	DELETE,
}

interface IRouterElement {
	path: string;
	actions: ERouterActions[];
	functions: Array<(req: Request, res: Response) => unknown>;
}

export class RouterGenerator {
	static resource(res: IRouterElement) : Router {
		const routes = Router();

		if (res.actions.length !== res.functions.length) return routes;

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
