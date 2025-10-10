const User = require('../models/user');

// GET /users - retorna todos os usuários
module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err.name); // Para debug
      return res.status(500).json({ message: 'Erro interno do servidor' });
    });
};

// GET /users/me - retorna o usuário atual
module.exports.getCurrentUser = (req, res) => {
  User.findById(req.user._id)
    .orFail(() => {
      const error = new Error('Usuário não encontrado');
      error.statusCode = 404;
      throw error;
    })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err.name); // Para debug

      if (err.name === 'CastError') {
        return res.status(400).json({ message: 'ID do usuário inválido' });
      }

      if (err.statusCode === 404) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      return res.status(500).json({ message: 'Erro interno do servidor' });
    });
};

// GET /users/:userId - retorna um usuário por _id
module.exports.getUserById = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .orFail(() => {
      const error = new Error('Usuário não encontrado');
      error.statusCode = 404;
      throw error;
    })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err.name); // Para debug

      if (err.name === 'CastError') {
        return res.status(400).json({ message: 'ID do usuário inválido' });
      }

      if (err.statusCode === 404) {
        return res
          .status(404)
          .json({ message: 'ID do usuário não encontrado' });
      }

      return res.status(500).json({ message: 'Erro interno do servidor' });
    });
};

// POST /users - cria um novo usuário
module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      console.log(err.name); // Para debug

      if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Dados inválidos' });
      }

      return res.status(500).json({ message: 'Erro interno do servidor' });
    });
};

// PATCH /users/me - atualiza o perfil
module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
    .orFail(() => {
      const error = new Error('Usuário não encontrado');
      error.statusCode = 404;
      throw error;
    })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err.name); // Para debug

      if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Dados inválidos' });
      }

      if (err.statusCode === 404) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      return res.status(500).json({ message: 'Erro interno do servidor' });
    });
};

// PATCH /users/me/avatar - atualiza o avatar
module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true },
  )
    .orFail(() => {
      const error = new Error('Usuário não encontrado');
      error.statusCode = 404;
      throw error;
    })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err.name); // Para debug

      if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Dados inválidos' });
      }

      if (err.statusCode === 404) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      return res.status(500).json({ message: 'Erro interno do servidor' });
    });
};
