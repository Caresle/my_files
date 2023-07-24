import { Request, Response } from 'express';

export const getFiles = (_: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'files'
	});
};

export const createFiles = (req: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'created',
	});
};

export const updateFiles = (req: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'Updated'
	});
};

export const deleteFiles = (req: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'deleted',
	});
};
