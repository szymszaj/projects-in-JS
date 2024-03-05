// Importowanie modułu nodemailer
const nodemailer = require("nodemailer");

// Konfiguracja danych do wysyłki emaila
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "twoj_email@gmail.com", // Email, z którego będziesz wysyłać
    pass: "twoje_haslo", // Hasło do tego emaila
  },
});

// Funkcja do wysyłania emaila
function sendEmail() {
  // Ustawienia emaila
  const mailOptions = {
    from: "twoj_email@gmail.com", // Email nadawcy
    to: "adres_odbiorcy@gmail.com", // Email odbiorcy
    subject: "Temat emaila", // Temat emaila
    text: "Treść wiadomości", // Treść emaila
  };

  // Wysłanie emaila
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Błąd podczas wysyłania emaila:", error);
    } else {
      console.log("Email został wysłany:", info.response);
    }
  });
}

sendEmail();
