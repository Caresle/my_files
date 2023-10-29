import { DataSource } from 'typeorm';
import entities from './entity/entity';
import Environment from './config/environment';

interface IDBConfig {
	name?: string;
	host?: string;
	username?: string;
	password?: string;
	port?: number;
}

const getConfig = () : IDBConfig => {
	return {
		name: Environment.DB_NAME,
		host: Environment.DB_HOST,
		username: Environment.DB_USER,
		password: Environment.DB_PASS,
		port: Environment.DB_PORT,
	};
};

const dbConfig = getConfig();

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: dbConfig.host,
	database: dbConfig.name,
	username: dbConfig.username,
	password: dbConfig.password,
	port: dbConfig.port,
	entities,
	// synchronize: true,
});