import { Request, Response } from 'express';
import { Rol } from '../entity/rol.entity';
import { getError } from '../helpers/responseError.helper';
import Validator from '../helpers/validator.helper';
import ErrorMessage from '../helpers/errorMessage.helper';

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
		Validator.empty(req.body)
	) return res.status(400).json(getError(ErrorMessage.invalidJSON()));

	const {
		rolName,
		rights,
	} = req.body;

	// Check rolName and rights are not empty

	if (Validator.empty(rolName)) {
		return res.status(400).json(
			getError(ErrorMessage.required('rolName'))
		);
	}

	if (Validator.empty(rights)) {
		return res.status(400).json(
			getError(ErrorMessage.required('rights'))
		);
	}

	// rolName validations

	if (!Validator.betweenLength(rolName, 5, 255)) {
		return res.status(400).json(
			getError(
				ErrorMessage.between('rolName', 5, 255)
			)
		);
	}

	if (!Validator.minLength(rights, 5)) {
		return res.status(400).json(
			getError(
				ErrorMessage.minLength('rights', 5)
			)
		);
	}

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
