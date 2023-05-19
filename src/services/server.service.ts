import express from 'express';
import cors from 'cors';
import { emailRouter } from '../routes';
import bodyParser from 'body-parser';

export const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use('/api/email', emailRouter);
