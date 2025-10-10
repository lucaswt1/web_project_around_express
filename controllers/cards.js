const Card = require('../models/card');

// GET /cards - retorna todos os cartões
module.exports.getCards = (req, res) => {
  Card.find({})
    .sort({ createdAt: -1 }) // Ordena por data de criação, mais recente primeiro
    .then((cards) => {
      res.json(cards);
    })
    .catch((err) => {
      console.log(err.name); // Para debug
      return res.status(500).json({ message: 'Erro interno do servidor' });
    });
};

// POST /cards - cria um novo cartão
module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  console.log(req.user._id); // _id se tornará acessível

  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      res.status(201).json(card);
    })
    .catch((err) => {
      console.log(err.name); // Para debug

      if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Dados inválidos' });
      }

      return res.status(500).json({ message: 'Erro interno do servidor' });
    });
};

// DELETE /cards/:cardId - deleta um cartão por _id
module.exports.deleteCard = (req, res) => {
  const { cardId } = req.params;

  Card.findByIdAndDelete(cardId)
    .orFail(() => {
      const error = new Error('Cartão não encontrado');
      error.statusCode = 404;
      throw error;
    })
    .then(() => {
      res.json({ message: 'Cartão deletado com sucesso' });
    })
    .catch((err) => {
      console.log(err.name); // Para debug

      if (err.name === 'CastError') {
        return res.status(400).json({ message: 'ID do cartão inválido' });
      }

      if (err.statusCode === 404) {
        return res.status(404).json({ message: 'Cartão não encontrado' });
      }

      return res.status(500).json({ message: 'Erro interno do servidor' });
    });
};

// PUT /cards/:cardId/likes - curte um cartão
module.exports.likeCard = (req, res) => {
  const { cardId } = req.params;

  Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: req.user._id } }, // adicione _id ao array se ele não estiver lá
    { new: true },
  )
    .orFail(() => {
      const error = new Error('Cartão não encontrado');
      error.statusCode = 404;
      throw error;
    })
    .then((card) => {
      res.json(card);
    })
    .catch((err) => {
      console.log(err.name); // Para debug

      if (err.name === 'CastError') {
        return res.status(400).json({ message: 'ID do cartão inválido' });
      }

      if (err.statusCode === 404) {
        return res.status(404).json({ message: 'Cartão não encontrado' });
      }

      return res.status(500).json({ message: 'Erro interno do servidor' });
    });
};

// DELETE /cards/:cardId/likes - descurte um cartão
module.exports.dislikeCard = (req, res) => {
  const { cardId } = req.params;

  Card.findByIdAndUpdate(
    cardId,
    { $pull: { likes: req.user._id } }, // remove _id do array
    { new: true },
  )
    .orFail(() => {
      const error = new Error('Cartão não encontrado');
      error.statusCode = 404;
      throw error;
    })
    .then((card) => {
      res.json(card);
    })
    .catch((err) => {
      console.log(err.name); // Para debug

      if (err.name === 'CastError') {
        return res.status(400).json({ message: 'ID do cartão inválido' });
      }

      if (err.statusCode === 404) {
        return res.status(404).json({ message: 'Cartão não encontrado' });
      }

      return res.status(500).json({ message: 'Erro interno do servidor' });
    });
};
