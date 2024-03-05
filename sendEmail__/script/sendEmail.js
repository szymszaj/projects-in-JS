const nodemailer = require("nodemailer");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "twoj_email@gmail.com",
    pass: "twoje_haslo",
  },
});

function sendEmail() {
  const mailOptions = {
    from: "twoj_email@gmail.com",
    to: "adres_odbiorcy@gmail.com",
    subject: "Temat emaila",
    text: "Treść wiadomości",
    attachments: [
      {
        filename: "plik.jpg", // Nazwa załączonego pliku
        path: __dirname + "/plik.jpg", // Ścieżka do załączonego pliku
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Błąd podczas wysyłania emaila:", error);
    } else {
      console.log("Email został wysłany:", info.response);
    }
  });
}

sendEmail();
