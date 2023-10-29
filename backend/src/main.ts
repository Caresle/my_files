import DotEnv from 'dotenv';
DotEnv.config();
import app from './app';
import Environment from './config/environment';
import { AppDataSource } from './db';


async function main() {
	try {
		await AppDataSource.initialize();
		app.listen(Environment.PORT, () => console.log(`Server on PORT ${Environment.PORT}`));
	} catch (error) {
		console.error(error);
	}
}

main();