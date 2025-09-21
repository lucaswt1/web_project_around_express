# Projeto EUA Afora - API Backend

## Descrição do Projeto

Este é uma API RESTful para o projeto "EUA Afora", desenvolvida como parte do bootcamp de desenvolvimento web. A API permite gerenciar usuários e cartões de viagem, incluindo funcionalidades de criação, leitura, atualização e exclusão de dados, além de sistema de curtidas.

## Funcionalidades

- **Gerenciamento de Usuários**: Criação, listagem, busca por ID e atualização de perfil/avatar
- **Gerenciamento de Cartões**: Criação, listagem, exclusão de cartões de viagem
- **Sistema de Curtidas**: Curtir e descurtir cartões
- **Validação de Dados**: Validação de campos obrigatórios e URLs
- **Tratamento de Erros**: Respostas apropriadas para diferentes tipos de erro

## Tecnologias e Técnicas Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web para Node.js
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **ESLint** - Ferramenta de linting com configuração Airbnb
- **Nodemon** - Reinicialização automática durante desenvolvimento
- **Expressões Regulares** - Validação de URLs
- **Middleware** - Autorização temporária e parsing JSON

## Estrutura do Projeto

```
├── controllers/          # Lógica dos controladores
│   ├── cards.js
│   └── users.js
├── models/              # Modelos do banco de dados
│   ├── card.js
│   └── user.js
├── routes/              # Definição das rotas
│   ├── cards.js
│   └── users.js
├── app.js               # Arquivo principal da aplicação
├── package.json         # Dependências e scripts
└── README.md           # Documentação do projeto
```

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- MongoDB rodando localmente na porta 27017

### Instalação

```bash
npm install
```

### Execução

Para produção:

```bash
npm run start
```

Para desenvolvimento (com reinicialização automática):

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3000`

## Rotas da API

### Usuários

- `GET /users` - Retorna todos os usuários
- `GET /users/:userId` - Retorna usuário específico por ID
- `POST /users` - Cria novo usuário
- `PATCH /users/me` - Atualiza perfil do usuário atual
- `PATCH /users/me/avatar` - Atualiza avatar do usuário atual

### Cartões

- `GET /cards` - Retorna todos os cartões
- `POST /cards` - Cria novo cartão
- `DELETE /cards/:cardId` - Deleta cartão por ID
- `PUT /cards/:cardId/likes` - Curte um cartão
- `DELETE /cards/:cardId/likes` - Descurte um cartão

## Códigos de Status HTTP

- `200` - Sucesso
- `201` - Criado com sucesso
- `400` - Dados inválidos
- `404` - Recurso não encontrado
- `500` - Erro interno do servidor

## Exemplo de Uso

### Criar um usuário

```bash
POST /users
Content-Type: application/json

{
  "name": "João Silva",
  "about": "Viajante apaixonado",
  "avatar": "https://example.com/avatar.jpg"
}
```

### Criar um cartão

```bash
POST /cards
Content-Type: application/json

{
  "name": "Viagem incrível",
  "link": "https://example.com/photo.jpg"
}
```
