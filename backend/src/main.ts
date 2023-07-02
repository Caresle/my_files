import DotEnv from 'dotenv';
import express, { Application } from 'express';
import usersRoutes from './routes/users.routes';

DotEnv.config();


const PORT = process.env.PORT || 3000;

const app : Application = express();

app.use(usersRoutes);

app.listen(PORT, () => {
	console.log(`Server on PORT ${PORT}`);
});


