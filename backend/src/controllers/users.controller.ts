import { Request, Response } from 'express';
import { User } from '../entity/user.entity';

export const getUsers = (_: Request, res: Response) : Response => {
	return res.json({
		items: 'values'
	});
};

export const createUser = (req: Request, res: Response) : Response => {
	User.save({
		username: 'Carlos',
		password: 'asldkjasd',
	});
	return res.json({
		data: 'user created'
	});
};

export const updateUser = (req: Request, res: Response) : Response => {
	return res.json({
		data: 'user updated',
	});
};

export const deleteUser = (req: Request, res: Response) : Response => {
	return res.json({
		data: 'user deleted'
	});
};
