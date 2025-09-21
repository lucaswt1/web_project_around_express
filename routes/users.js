const express = require('express');
const {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

const router = express.Router();

// GET /users - retorna todos os usuários
router.get('/', getUsers);

// GET /users/:userId - retorna um usuário por _id
router.get('/:userId', getUserById);

// POST /users - cria um novo usuário
router.post('/', createUser);

// PATCH /users/me - atualiza o perfil
router.patch('/me', updateProfile);

// PATCH /users/me/avatar - atualiza o avatar
router.patch('/me/avatar', updateAvatar);

module.exports = router;
