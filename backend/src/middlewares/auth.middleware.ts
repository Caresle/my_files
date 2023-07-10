import { Request, Response, NextFunction } from 'express';

/**
 * Middleware for check if the user is auth, in case no, redirect to
 * login, this auth middleware need to check the next:
 * TODO: Add basic validation of the token
 * @returns
 */
export const isAuth = (req: Request, res: Response, next: NextFunction) => {
	return next();
};
