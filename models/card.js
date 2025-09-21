const mongoose = require('mongoose');

// Esquema do cartão
const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        // Mesma expressão regular do esquema do usuário para validar URLs
        return /^https?:\/\/(www\.)?[a-zA-Z0-9._~:/?%#[\]@!$&'()*+,;=-]+\/?#?$/.test(
          v,
        );
      },
      message: 'URL da imagem inválida',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user',
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
