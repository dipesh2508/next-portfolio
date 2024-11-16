"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(formData: FormData) {
  try {
    const validatedFields = formSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    const mailOptions = {
      from: validatedFields.email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${validatedFields.name}`,
      text: validatedFields.message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${validatedFields.name}</p>
        <p><strong>Email:</strong> ${validatedFields.email}</p>
        <p><strong>Message:</strong> ${validatedFields.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to send email" };
  }
} 