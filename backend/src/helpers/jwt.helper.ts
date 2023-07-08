/**
 * Every single JWT token expires after 12 hours,
 * this helper provides function, interfaces, for creating, validate
 * and update everything related to the jwt
 */

import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET ?? '';

export interface IJWTUserInfo {
	username: string;
	// The rights of the user across the app, these will be checked later on by the client side of the app
	rights: Array<number>;
	rol: string;
}

export interface IJWTInvalidToken {
	status: boolean;
	message: string;
}

export const createJWT = (payload: IJWTUserInfo) => {
	const token = jwt.sign(payload, SECRET, {
		expiresIn: '12h'
	});
	return token;
};

export const validateJWT = (token: string) : IJWTUserInfo | IJWTInvalidToken => {
	try {
		const verify = jwt.verify(token, SECRET);

		if (!verify) return {
			status: false,
			message: 'Invalid token',
		} as IJWTInvalidToken;

		return verify as IJWTUserInfo;
	} catch (error) {
		console.log(error);
		return {
			status: false,
			message: 'Invalid token'
		} as IJWTInvalidToken;
	}

};
