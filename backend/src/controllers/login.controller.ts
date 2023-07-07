import { Request, Response } from 'express';
import {
	createJWT,
	IJWTUserInfo,
	validateJWT,
} from '../helpers/jwt.helper';
import { getError } from '../helpers/responseError.helper';
import { User } from '../entity/user.entity';
import bcrypt from 'bcrypt';

export const executeLogin = async (req: Request, res: Response) => {
	const { username, password } = req.body;

	if (username === '' || username === null || username === undefined)
		return res.status(400).json(getError('Invalid username or password'));

	if (password === '' || password === null || password === undefined)
		return res.status(400).json(getError('Invalid username or password'));

	const userDB = await User.findBy({
		username,
	});

	if (userDB.length <= 0)
		return res.status(400).json(getError('Invalid username or password'));

	const passwordToCompare = userDB[0].password;

	if (!bcrypt.compareSync(password, passwordToCompare))
		return res.status(400).json(getError('Invalid username or password'));

	const user : IJWTUserInfo = {
		username,
		rights: [1, 2, 3, 4],
		rol: 'test rol',
	};

	const token = createJWT(user);

	// Save the token in the db
	userDB[0].token = token;
	await userDB[0].save();

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
