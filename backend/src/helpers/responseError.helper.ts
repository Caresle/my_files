import { User } from '../entity/user.entity';

export interface IErrorResponse {
	success: boolean;
	message: Array<string> | string;
}

export interface IErrorUser extends IErrorResponse {
	data: Array<User | null>;
}
