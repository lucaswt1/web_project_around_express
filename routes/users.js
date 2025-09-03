const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Carregar dados dos usuários
const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'data', 'users.json'), 'utf8'),
);

// Rota GET /users - retorna lista de todos os usuários
router.get('/', (req, res) => {
  res.json(users);
});

// Rota GET /users/:id - retorna usuário específico por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u._id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'ID do usuário não encontrado' });
  }
});

module.exports = router;
