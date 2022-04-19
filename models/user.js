import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please provide an Email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid Email",
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide an password"],
      min: 6,
      max: 64,
    },
    emailVerificationToken: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    about: {},
    image: {
      url: String,
      public_id: String,
    },
    role: {
      type: String,
      enum: ["Subscriber", "Admin"],
      default: "Subscriber",
    },
    following: [{ type: Schema.ObjectId, ref: "User" }],
    followers: [{ type: Schema.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

userSchema.methods.verificationEmail = function () {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const token = jwt.sign({ email: this.email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  const link = `${process.env.LINK}/verifyemail?token=${token}`;

  transporter.sendMail({
    from: '"Sharegram" <support@sharegram.com>', // sender address
    to: this.email, // list of receivers
    subject: "Verify Email", // Subject line
    html: `
    <!DOCTYPE html>
<html>
<head>
<style>

body {background-color: powderblue;}
div {text-align: center;}
h2 {font-weight: normal;}
p   {color: white;}

</style>
</head>
<body>

<div>
<h2>Please verify your email by clicking <a href=${link}> here </a> <br/> This link will be valid for 24 hours  </h2>

</div

</body>
</html>
    `,
  });
};

userSchema.methods.forgotPassword = function () {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const token = jwt.sign({ email: this.email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  const link = `${process.env.LINK}/reset-password?token=${token}`;

  transporter.sendMail({
    from: '"Sharegram" <support@sharegram.com>', // sender address
    to: this.email, // list of receivers
    subject: "Reset Password", // Subject line
    html: `
    <!DOCTYPE html>
<html>
<head>
<style>

body {background-color: powderblue;}
div {text-align: center;}
h2 {font-weight: normal;}
p   {color: white;}

</style>
</head>
<body>

<div>
<h2>Please reset your password by clicking <a href=${link}> here </a> <br/> This link will be valid for 24 hours</h2>

</div

</body>
</html>
    `, // html body
  });
};

export default mongoose.model("User", userSchema);
