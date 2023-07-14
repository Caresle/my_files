import { Request, Response, NextFunction } from 'express';
import {
	validateJWT
} from '../helpers/jwt.helper';
import {
	getError
} from '../helpers/responseError.helper';

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers['api-key'] as string;

	if (
		token === undefined
		|| token === null
		|| token === ''
	) {
		const error = getError('No API-KEY header');
		return res.status(400).json(error);
	}

	const validate = validateJWT(token);

	if ('status' in validate) {
		const error = getError('Invalid Token');
		return res.status(400).json(error);
	}

	return next();
};
