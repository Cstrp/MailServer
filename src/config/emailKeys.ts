import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || '8080';
export const MAIL = process.env.EMAIL || '';
export const PASSWORD = process.env.PASSWORD || '';
