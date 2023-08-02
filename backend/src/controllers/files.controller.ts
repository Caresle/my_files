import { FileModel } from '../entity/fileModel.entity';
import { getError } from '../helpers/responseError.helper';
import { getUserFromJWT } from '../helpers/jwt.helper';
import { Request, Response } from 'express';
import { User } from '../entity/user.entity';
import ErrorMessage from '../helpers/errorMessage.helper';
import Validator from '../helpers/validator.helper';

export const getFiles = async (_: Request, res: Response) => {
	const response = await FileModel.find();

	return res.json({
		success: true,
		message: 'files',
		data: response,
	});
};

export const createFiles = async (req: Request, res: Response) => {
	if (Object.keys(req.body).length <= 0)
		return res.json(getError(ErrorMessage.invalidJSON()));

	const user = getUserFromJWT(req);

	const userDB = await User.findOneBy({ username: user.username });

	// FileModel.create()

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

export const deleteFiles = async (req: Request, res: Response) => {
	const { id } = req.params;

	if (Validator.empty(id))
		return getError(ErrorMessage.invalid('id'));


	const files = await FileModel.delete({
		id: +id
	});

	if (files.affected === 0) {
		return res.json({
			success: true,
			message: 'Not Found',
		});
	}

	return res.json({
		success: true,
		message: 'deleted',
	});
};
