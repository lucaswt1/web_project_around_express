const express = require('express');
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

const router = express.Router();

// GET /cards - retorna todos os cartões
router.get('/', getCards);

// POST /cards - cria um novo cartão
router.post('/', createCard);

// DELETE /cards/:cardId - deleta um cartão por _id
router.delete('/:cardId', deleteCard);

// PUT /cards/:cardId/likes - curte um cartão
router.put('/:cardId/likes', likeCard);

// DELETE /cards/:cardId/likes - descurte um cartão
router.delete('/:cardId/likes', dislikeCard);

module.exports = router;
