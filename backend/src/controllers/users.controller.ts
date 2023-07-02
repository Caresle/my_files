import { Request, Response } from 'express';

export const getUsers = (_: Request, res: Response) : Response => {
	return res.json({
		items: 'values'
	});
};

export const createUser = (req: Request, res: Response) : Response => {
	return res.json({
		data: 'user created'
	});
};

export const updateUSer = (req: Request, res: Response) : Response => {
	return res.json({
		data: 'user updated',
	});
};

export const deleteUser = (req: Request, res: Response) : Response => {
	return res.json({
		data: 'user deleted'
	});
};
