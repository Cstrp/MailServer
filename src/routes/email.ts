import express from 'express';
import * as emailController from '../controller';

const emailRouter = express.Router();

emailRouter.post('/sent', emailController.sendEmail);

export { emailRouter };
