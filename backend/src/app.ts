import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'reflect-metadata';

// Routes
import usersRoutes from './routes/users.routes';
import loginRoutes from './routes/login.routes';
import rolRoutes from './routes/rol.routes';

const app : Application = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(usersRoutes);
app.use(loginRoutes);
app.use(rolRoutes);

export default app;
