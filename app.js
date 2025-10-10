const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/aroundb');

// Middleware para parsing JSON
app.use(express.json());

// Middleware CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Middleware de autorização temporária
app.use((req, res, next) => {
  req.user = {
    _id: '68cf94a8fe7e25688a338806', // ID do usuário teste criado anteriormente
  };

  next();
});

// Importar rotas
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

// Usar as rotas
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use('/card', cardsRouter);

// Middleware para capturar rotas não encontradas (404)
app.use((req, res) => {
  res.status(404).json({ message: 'A solicitação não foi encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
