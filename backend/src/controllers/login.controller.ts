import { Request, Response } from 'express';
import {
	createJWT,
	IJWTUserInfo,
	validateJWT,
} from '../helpers/jwt.helper';

export const executeLogin = (req: Request, res: Response) => {
	const user : IJWTUserInfo = {
		username: 'admin',
		rights: [1, 2, 3, 4],
		rol: 'test rol',
	};

	const token = createJWT(user);

	return res.json({
		success: true,
		message: 'login wait a moment',
		data: token,
	});
};

export const testLogin = (req: Request, res: Response) => {
	const token = req.headers['api-key'] as string;

	validateJWT(token);

	return res.json({
		success: true,
		message: 'login true'
	});
};
