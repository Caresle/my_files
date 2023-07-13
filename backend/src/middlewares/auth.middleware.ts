import { Request, Response, NextFunction } from 'express';
import {
	validateJWT
} from '../helpers/jwt.helper';

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers['api-key'] as string;

	if (
		token === undefined
		|| token === null
		|| token === ''
	)
		return res.status(400).json({
			success: false,
			message: 'No API-KEY header',
			data: []
		});

	const validate = validateJWT(token);

	if ('status' in validate) {
		return res.status(400).json({
			success: false,
			message: 'Invalid Token',
			data: [],
		});
	}

	return next();
};
