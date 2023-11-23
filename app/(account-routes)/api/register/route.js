import connectMongodb from "@/libs/mongodb/mongodb";
import Accounts from "@/models/register";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 13);
    const { db } = await connectMongodb();
    const collection = db.collection("accounts");

    // Create the user with a verified field set to false
    const user = await Accounts.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate a verification token
    // Generate a verification token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    }); // For simplicity, we're using the user's ID as the token

    // Send the verification email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chideraigboka7@gmail.com",
        pass: "oyhm hrdt rkte hwji",
      },
    });
    // console.log(user.email, token);
    const mailOptions = {
      from: "chideraigboka7@gmail.com",
      to: user.email,
      subject: "Verify your email",
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Email Verification</title>
      </head>
      <body>
        <h1>Verify Your Email</h1>
        <p>Dear ${user.name},</p>
        <p>Thank you for creating an account. To verify your email address, please click the button below:</p>
        <p>
          <a href="bototask.vercel.app/email-verification?token=${token}" style="display: inline-block; padding: 10px 20px; background-color: #0a04c3; color: white; text-decoration: none;">Verify Email</a>
        </p>
        <p>If you did not create an account, you can safely ignore this email.</p>
        <p>Best regards,<br>Proneat Tech</p>
      </body>
      </html>
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return NextResponse.json(
      { message: "Account created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred while creating your account" },
      { status: 500 }
    );
  }
}
