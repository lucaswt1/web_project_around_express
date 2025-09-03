# Projeto EUA Afora - Backend

## Sobre o projeto

Este é meu primeiro projeto de backend! Criei uma API simples para o projeto "EUA Afora" usando Node.js e Express.

## O que faz

- Mostra lista de usuários
- Mostra lista de cards
- Busca usuário por ID
- Retorna erro quando não encontra algo

## Tecnologias usadas

- Node.js
- Express.js
- ESLint (para manter o código organizado)
- Nodemon (reinicia automaticamente quando mudo algo)

## Como rodar o projeto

Instalar as dependências:

```
npm install
```

Iniciar o servidor:

```
npm run start
```

Ou para desenvolvimento (reinicia sozinho):

```
npm run dev
```

## Rotas disponíveis

- `GET /users` - lista todos os usuários
- `GET /cards` - lista todos os cards
- `GET /card` - lista todos os cards (funciona igual)
- `GET /users/:id` - busca um usuário específico

## Testando

Pode testar no navegador ou Postman:

- http://localhost:3000/users
- http://localhost:3000/cards
- http://localhost:3000/users/8340d0ec33270a25f2413b69
