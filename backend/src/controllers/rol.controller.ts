import { Request, Response } from 'express';

export const getRoles = (_: Request, res: Response) => {
	return res.json({
		success: true,
		data: [{
			name: 'rol'
		}]
	});
};

export const createRol = (req: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'created',
	});
};

export const updateRol = (req: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'updated',
	});
};

export const deleteRol = (req: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'deleted'
	});
};
