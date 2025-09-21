# Projeto EUA Afora - Backend

## Sobre o projeto

Este é meu primeiro projeto de backend! Criei uma API para o projeto "EUA Afora" usando Node.js e Express, agora conectada com MongoDB.

## O que faz

- Cadastra e lista usuários
- Cadastra e lista cartões de viagem
- Permite curtir e descurtir cartões
- Atualiza perfil e avatar do usuário
- Valida dados e trata erros

## Tecnologias usadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- ESLint (para manter o código organizado)
- Nodemon (reinicia automaticamente quando mudo algo)

## Como rodar o projeto

Primeiro, certifique-se de que o MongoDB está rodando na sua máquina.

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

O servidor vai rodar em http://localhost:3000

## Rotas disponíveis

### Usuários

- `GET /users` - lista todos os usuários
- `GET /users/:userId` - busca um usuário específico
- `POST /users` - cria um novo usuário
- `PATCH /users/me` - atualiza meu perfil
- `PATCH /users/me/avatar` - atualiza meu avatar

### Cartões

- `GET /cards` - lista todos os cartões
- `POST /cards` - cria um novo cartão
- `DELETE /cards/:cardId` - deleta um cartão
- `PUT /cards/:cardId/likes` - curte um cartão
- `DELETE /cards/:cardId/likes` - descurte um cartão

## Testando no Postman

Para criar um usuário:

```json
POST /users
{
  "name": "João Silva",
  "about": "Gosto de viajar",
  "avatar": "https://example.com/foto.jpg"
}
```

Para criar um cartão:

```json
POST /cards
{
  "name": "Viagem incrível",
  "link": "https://example.com/foto-viagem.jpg"
}
```

## O que aprendi

- Como conectar com banco de dados MongoDB
- Criar modelos e esquemas com Mongoose
- Fazer validações de dados
- Tratar diferentes tipos de erro
- Organizar código em controllers e routes
- Usar operadores do MongoDB ($addToSet, $pull)
