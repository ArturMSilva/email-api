# API de Envio de Email com Nodemailer

Esta é uma API simples construída com Node.js e Express para enviar emails usando o Nodemailer. A API é projetada para ser integrada a uma aplicação de e-commerce, permitindo o envio de mensagens através de um formulário.

## Funcionalidades

- Envio de emails com as informações do usuário (nome, email, mensagem).
- Limitação de requisições para evitar abusos.
- Tratamento de erros e mensagens de sucesso.

## Tecnologias Utilizadas

- Node.js
- Express
- Nodemailer
- dotenv (para gerenciar variáveis de ambiente)
- express-rate-limit (para limitar requisições)

## Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (gerenciador de pacotes do Node)

### Passo a Passo

1. Clone este repositório:
   ```bash
   git clone https://github.com/ArturMSilva/email-api.git
   cd email-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente:
   ```plaintext
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=seu_email@gmail.com
   SMTP_PASS=sua_senha
   ```

4. Inicie o servidor:
   ```bash
   node seuArquivo.js
   ```

## Uso

A API está disponível no seguinte endpoint:

### Enviar Email

- **URL**: `/enviar-email`
- **Método**: `POST`
- **Headers**:
  - `Content-Type`: `application/json`
  
- **Corpo da Requisição**:
```json
{
  "nome": "Nome do Usuário",
  "email": "email@exemplo.com",
  "mensagem": "Sua mensagem aqui."
}
```

- **Resposta**:
  - `200 OK` se o email for enviado com sucesso.
  - `500 Internal Server Error` se ocorrer um erro ao enviar o email.

## Limitação de Requisições

A API possui um limite de 5 requisições por minuto por IP para evitar abusos. Se o limite for excedido, uma mensagem de erro será retornada.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a MIT License. Veja o arquivo [LICENSE](./LICENSE.txt) para mais detalhes.

## Contato

- Nome: Artur
- Email: arturmartinssilva078@gmail.com
