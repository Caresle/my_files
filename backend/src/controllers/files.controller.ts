import { Request, Response } from 'express';
import { FileModel } from '../entity/fileModel.entity';
import { getError } from '../helpers/responseError.helper';
import ErrorMessage from '../helpers/errorMessage.helper';
import { getUserFromJWT } from '../helpers/jwt.helper';
import { User } from '../entity/user.entity';

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

export const deleteFiles = (req: Request, res: Response) => {
	return res.json({
		success: true,
		message: 'deleted',
	});
};
