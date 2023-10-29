export default class Environment {
	static PORT = process.env.PORT || 3333;

	static DB_NAME = process.env.DB_NAME ?? '';
	static DB_HOST = process.env.DB_HOST ?? '';
	static DB_USER =  process.env.DB_USER ?? '';
	static DB_PASS = process.env.DB_PASS ?? '';
	static DB_PORT = process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined;

	static JWT_SECRET = process.env.JWT_SECRET ?? '';

	static SALT_ROUND = process.env.SALT_ROUND ?? '';
}