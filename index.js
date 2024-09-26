const express = require("express");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
require('dotenv').config(); // Para carregar variáveis de ambiente


const app = express();

// Middleware para entender requisições JSON
app.use(express.json());

// Middleware para limitar requisições
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 5, // Limite de 5 requisições por minuto
  message: "Você excedeu o limite de tentativas. Tente novamente mais tarde.",
});

// Aplica o limiter apenas na rota de envio de email
app.use("/send-email", limiter);

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/send-email", (req, res) => {
  let { nome, email, mensagem } = req.body

  transport
    .sendMail({
      from: `Startup MelDireto <${email}>`,
      to: "meldireto@gmail.com",
      subject: `Nova mensagem de ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    })
    .then(() => res.status(200).send("Email enviado com sucesso!"))
    .catch((err) => res.status(500).send("Erro ao enviar email"));
});

// Middleware para tratamento de rotas não encontradas
app.use((req, res) => {
  res.status(404).send("Rota não encontrada");
});

//iniciar o servidor
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});