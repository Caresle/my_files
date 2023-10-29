import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'reflect-metadata';

const app : Application = express();

// config
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.json({success: 'my files api'}));

export default app;