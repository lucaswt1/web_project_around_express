const mongoose = require('mongoose');

// Esquema do usuário
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        // Expressão regular para validar URLs
        return /^https?:\/\/(www\.)?[a-zA-Z0-9._~:/?%#[\]@!$&'()*+,;=-]+\/?#?$/.test(
          v,
        );
      },
      message: 'URL do avatar inválida',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
