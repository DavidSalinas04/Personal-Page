import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS, // no tu password real
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL,
            subject: `New message from ${name}`,
            text: message,
        });

        res.status(200).json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error sending email" });
    }
});

app.listen(3001, () => console.log("Backend running on http://localhost:3001"));
