import express, { Application } from 'express';
import usersRoutes from './routes/users.routes';
import morgan from 'morgan';
import cors from 'cors';
import 'reflect-metadata';

const app : Application = express();

app.use(usersRoutes);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

export default app;
