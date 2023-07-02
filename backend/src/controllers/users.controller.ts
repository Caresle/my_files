import { Request, Response } from 'express';
import { User } from '../entity/user.entity';
import bcrypt from 'bcrypt';
import { IErrorUser } from '../helpers/responseError.helper';

const secret = process.env.SECRET_PASS ?? 10;

const generatePassword = (text: string) => {
	return bcrypt.hashSync(text, secret);
};

const getError = (msg : string | Array<string>) : IErrorUser => {
	const error : IErrorUser = {
		success: false,
		message: (typeof msg === 'string') ? msg : [...msg],
		data: [],
	};

	return error;
};

export const getUsers = async (_: Request, res: Response) => {
	try {
		const users = await User.find();
		return res.json({
			success: true,
			message: 'Users finded',
			data: users,
		});
	} catch (error) {
		if (error instanceof Error)
			return res.status(500).json(getError('Server Error'));
	}
};

export const createUser = async (req: Request, res: Response) : Promise<Response> => {
	if (Object.keys(req.body).length <= 0) return res.json(getError('Invalid JSON'));

	const { username, password } = req.body;

	if (username === '' || username === null || username === undefined)
		return res.json(getError('Username required'));

	if (password === '' || password === null || password === undefined)
		return res.json(getError('Password required'));

	const userToSave = new User();

	userToSave.username = username;
	userToSave.password = generatePassword(password);

	const userCreated = await userToSave.save();

	return res.json({
		success: true,
		message: 'User created',
		data: userCreated,
	});
};

export const updateUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const user = await User.findOneBy({ id: +id });

		if (!user) return res.status(404).json(getError('User not found'));

		const { password } = req.body;

		if (password !== '' && password !== undefined && password !== null)
			req.body.password = generatePassword(password);

		await User.update({ id: +id }, req.body);

		return res.status(204).json({
			message: 'User updated',
			data: [],
		});
	} catch (error) {
		console.error(error);
		if (error instanceof Error)
			return res.status(500).json(getError('Server error'));
	}
};

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const result = await User.delete({ id: +id });

		if (result.affected === 0)
			return res.status(404).json(getError('Not found'));

		return res.status(204).json({
			success: true,
			message: 'User deleted',
			data: [],
		});
	} catch (error) {
		if (error instanceof Error)
			return res.status(500).json(getError('Server error'));
	}

};
