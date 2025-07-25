"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sendMessage = async (req, res) => {
    const { fullName, email, orgName, service, message } = req.body;
    console.log("🔔 Message received at backend:", req.body);
    // Basic validation
    if (!fullName?.trim()) {
        return res.status(400).json({ message: "Full name is required." });
    }
    if (!email?.trim()) {
        return res.status(400).json({ message: "Email is required." });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format." });
    }
    if (!message?.trim()) {
        return res.status(400).json({ message: "Message is required." });
    }
    try {
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        const mailOptions = {
            from: `"${fullName} via zohebhasan.com" <${email}>`,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            subject: `New Contact Message from ${fullName} at zohebhasan.com`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Contact Message</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@200;500&display=swap" rel="stylesheet">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: white; padding: 40px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
          <tr>
            <td style="display: flex; align-items: center; justify-content: center; padding-bottom: 20px;">
              <img src="https://raw.githubusercontent.com/ZohebHasan/assets/main/glassLight.png" width="60" height="60" style="object-fit: cover;" />
              <img src="https://i.imgur.com/kvZk34M.png" width="60" height="60" style="object-fit: cover;" />
            </td>
          </tr>
          <tr>
            <td style="font-size: 1.5rem; font-weight: 400; color: rgba(0,0,0,0.6); padding-bottom: 10px;">
              New <span style="background: linear-gradient(to right, #662D8C, #ED1E79); color: transparent; -webkit-background-clip: text; background-clip: text;">Message</span>
            </td>
          </tr>
          <tr>
            <td style="font-size: 0.95rem; color: #555; font-weight: 300; padding-bottom: 10px;">
              Hi Boss,
            </td>
          </tr>
          <tr>
            <td style="font-size: 0.95rem; color: #555; font-weight: 300; padding-bottom: 20px;">
              Our system detected a new message from a potential client.
            </td>
          </tr>
          <tr>
            <td style="font-size: 0.95rem; color: #555; font-weight: 300; padding-bottom: 20px;">
              <strong>Name:</strong> ${fullName}<br/>
              <strong>Email:</strong> ${email}<br/>
              <strong>Organization:</strong> ${orgName || 'N/A'}<br/>
              <strong>Service:</strong> ${service || 'N/A'}<br/>
              <strong>Message:</strong><br/>
              <div style="margin-top: 10px; padding: 12px; background: #f4f4f4; border-left: 4px solid #ED1E79; border-radius: 4px;">
                ${message}
              </div>
            </td>
          </tr>
          <tr>
            <td style="font-size: 0.9rem; color: #999; font-weight: 300; padding-top: 20px; text-align: center;">
              Technology starts from here.<br/>
              Zoheb Hasan © 2025
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
        };
        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully");
        return res.status(200).json({
            responseMessage: "Message received successfully and sent to email.",
            fullName,
            email,
            orgName,
            service,
            message,
        });
    }
    catch (err) {
        console.error("❌ Failed to send email:", err);
        return res.status(500).json({ message: "Something went wrong. Please try again later." });
    }
};
exports.sendMessage = sendMessage;
