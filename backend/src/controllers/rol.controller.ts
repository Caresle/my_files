import { Request, Response } from 'express';
import { Rol } from '../entity/rol.entity';
import { getError } from '../helpers/responseError.helper';

export const getRoles = async (_: Request, res: Response) => {
	try {
		const roles = await Rol.find();
		return res.json({
			success: true,
			data: roles
		});
	} catch (error) {
		if (error instanceof Error)
			return res.status(500).json(getError('Server error'));
	}
};

export const createRol = (req: Request, res: Response) => {
	if (
		req.body === undefined ||
		req.body === null ||
		req.body === ''
	) return getError('Invalid JSON');

	const {
		rolName,
		rights,
	} = req.body;

	if ()

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
