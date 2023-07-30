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
		console.log(error);
		if (error instanceof Error)
			return res.status(500).json(getError('Server error'));
	}
};

export const createRol = async (req: Request, res: Response) => {
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

	// Check if the rolName doesn't exist's already

	const duplicated = await Rol.findOneBy({
		name: rolName
	});

	if (duplicated !== null) {
		return res.status(400).json(
			getError(
				ErrorMessage.exists(rolName, 'rol')
			)
		);
	}

	// Rights validations

	if (!Validator.isArray(rights)) {
		return res.status(400).json(
			getError(
				ErrorMessage.isArray('rights')
			)
		);
	}

	if (!Validator.minLength(rights, 1)) {
		return res.status(400).json(
			getError(
				ErrorMessage.minLength('rights', 1)
			)
		);
	}

	const response = await Rol.save({
		name: rolName,
		// Temporary
		idRights: 0
	});

	return res.json({
		success: true,
		message: 'created',
		data: response
	});
};

export const updateRol = async (req: Request, res: Response) => {
	if (Validator.empty(req.body)) {
		return res.status(400).json(
			getError(ErrorMessage.invalidJSON())
		);
	}

	const { id } = req.params;

	if (Validator.empty(id)) {
		return res.status(400).json(
			getError(ErrorMessage.required('id'))
		);
	}
	// Chekc if the id exist in the db
	const rol = await Rol.findOneBy({
		id: +id
	});

	// Rol doesn't exists
	if (rol === null) {
		return res.status(400).json(
			getError(ErrorMessage.invalid('id'))
		);
	}

	const { rolName, rights } = req.body;

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

	if (!Validator.betweenLength(rolName, 5, 255)) {
		return res.status(400).json(
			getError(ErrorMessage.between('rolName', 5, 255))
		);
	}

	return res.json({
		success: true,
		message: 'updated',
	});
};

export const deleteRol = async (req: Request, res: Response) => {
	if (Validator.empty(req.body))
		return getError(ErrorMessage.invalidJSON());

	const { id } = req.body;

	if (Validator.empty(id))
		return getError(ErrorMessage.invalid('id'));

	const rol = await Rol.delete({
		id,
	});

	if (rol.affected === 0) {
		return res.json({
			success: true,
			message: 'Not found',
		});
	}

	return res.json({
		success: true,
		message: 'deleted'
	});
};
