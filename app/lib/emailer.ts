"use server";

import nodemailer from 'nodemailer';
import { z } from 'zod';

const Blacklist = [ "submissions@searchindex.site" ];

const FormSchema = z.object({
    name: z.string().min(1, "Name must be provided."),
    email: z.string().min(1, "Email must be provided.").email("Email must be in the correct format."),
    message: z.string().min(1, "Message must be provided.")
});

export type State = {
    errors?:{
        name?: string[];
        email?: string[];
        message?: string[];
    };
    message?:string | null;
    success?:boolean;
}

export async function send(prevState: State, formData: FormData){
    const validatedFields = FormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Failed to send email."
        }
    }

    const { name, email, message } = validatedFields.data;

    if(!Blacklist.includes(email)){
        await sendEmail(name, email, message);
    }

    return {
        errors: {},
        message: "",
        success: true
    }
}

async function sendEmail(name, email, message){
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_KEY
        }
    });

    const options = {
        from: "Anthony.Stiles.Developer@gmail.com",
        to: "Anthony.Stiles.Developer@gmail.com",
        subject: `Personal website contact from ${name} ${email}`,
        text: message
    };

    await transporter.sendMail(options);
}