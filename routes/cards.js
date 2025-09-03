const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Carregar dados dos cards
const cards = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'data', 'cards.json'), 'utf8'),
);

// Rota GET /cards - retorna lista de todos os cards
router.get('/', (req, res) => {
  res.json(cards);
});

module.exports = router;
