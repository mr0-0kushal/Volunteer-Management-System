import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',  // You can change this if using a different email provider
  auth: {
    user: process.env.EMAIL_USER,  // Email address from .env
    pass: process.env.EMAIL_PASS,  // App password from .env
  },
});

export default transporter;
