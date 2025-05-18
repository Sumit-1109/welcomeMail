const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sumitkumar2000sep@gmail.com",
    pass: "nfxc eghm csdt rjkm",
  },
});

app.post("/send-welcome", (req, res) => {
  const { email, name } = req.body;

  const mailOptions = {
    from: "your@gmail.com",
    to: email,
    subject: "Welcome!",
    text: `Hi ${name || "User"}, welcome to our app!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return res.status(500).send(error.toString());
    res.send("Email sent: " + info.response);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});