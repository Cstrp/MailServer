import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { emailContent } from '../services';
import { MAIL, PASSWORD } from '../config';
import { MailOptions } from 'nodemailer/lib/json-transport';

export const sendEmail = async (req: Request, res: Response) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.titan.email',
    port: 587,
    auth: {
      user: MAIL,
      pass: PASSWORD,
    },
    tls: { rejectUnauthorized: false },
    logger: true,
    debug: true,
  });

  const { name, email, businessType, comment } = req.body;

  const message: MailOptions = {
    from: {
      name: name,
      address: MAIL,
    },
    to: MAIL,
    subject: `New message from ${name}`,
    html: emailContent(name, email, businessType, comment),
  };

  await transporter.sendMail(message, (err) => {
    console.error(`Error while sending email ${err}`);
    if (err) {
      return res.status(500).json({
        message: `Error while sending email. Server error: ${err}`,
      });
    } else {
      res.status(200).json({
        message: 'Email sent successfully',
      });
    }
  });
};
