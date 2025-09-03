const express = require("express");

const app = express();
const PORT = 3000;

// Importar rotas
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

// Usar as rotas
app.use("/users", usersRouter);
app.use("/cards", cardsRouter);
app.use("/card", cardsRouter);

// Middleware para capturar rotas não encontradas (404)
app.use((req, res) => {
  res.status(404).json({ message: "A solicitação não foi encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
