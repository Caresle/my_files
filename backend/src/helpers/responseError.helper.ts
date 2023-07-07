import { User } from '../entity/user.entity';

export interface IErrorResponse {
	success: boolean;
	message: Array<string> | string;
}

export interface IErrorUser extends IErrorResponse {
	data: Array<User | null>;
}

export const getError = (msg : string | Array<string>) : IErrorUser => {
	const error : IErrorUser = {
		success: false,
		message: (typeof msg === 'string') ? msg : [...msg],
		data: [],
	};

	return error;
};
