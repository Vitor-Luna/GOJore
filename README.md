GO JORE — Jovens Revolucionários
Descrição:
O GO JORE é um projeto desenvolvido com o objetivo de conectar jovens revolucionários, proporcionando um espaço digital de oração, reflexão e transformação social. Este projeto consiste em um site e uma API que gerencia autenticação, orações e interações, desenvolvido em Node.js com banco de dados PostgreSQL.

🔥 Funcionalidades
✅ Cadastro e login de usuários (JWT Authentication)

✅ CRUD de orações

✅ Middleware de autenticação

✅ API RESTful

✅ Integração com banco PostgreSQL

✅ Testes de API via Postman (coleção disponível)

🛠️ Tecnologias Utilizadas
🧠 Node.js

🔗 Express.js

🗄️ PostgreSQL

🔒 JWT (JSON Web Token)

🛡️ Bcrypt (Hash de Senhas)

🧪 Postman (para testes)

🐘 pg (conector PostgreSQL no Node)

📂 Estrutura de Pastas
go
Copiar
Editar
JORE-SITE/
│
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── routes/
│   ├── .env (não incluso)
│   └── ...
│
├── frontend/ (em desenvolvimento)
│
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── Jore-API-Collection.postman_collection.json (Postman)
⚙️ Como rodar o projeto localmente
🔸 Pré-requisitos:
Node.js instalado

PostgreSQL instalado

Postman (opcional, para testes)

🔸 Passos:
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/Vitor-Luna/GOJore.git
Instale as dependências:

bash
Copiar
Editar
cd backend
npm install
Configure o banco de dados PostgreSQL:

Crie um banco de dados chamado, por exemplo, joredb.

Execute o script SQL (database.sql) que está na raiz do projeto para criar as tabelas necessárias.

Configure as variáveis de ambiente:

Crie um arquivo .env na pasta backend com o seguinte modelo:

ini
Copiar
Editar
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=joredb
DB_PORT=5432

JWT_SECRET=sua_chave_secreta
Execute o servidor:

bash
Copiar
Editar
npm start
Acesse a API:

API rodando em: http://localhost:3000

🧪 Testando com Postman
Importe o arquivo Jore-API-Collection.postman_collection.json no Postman.

Teste os endpoints de autenticação e orações.

🗄️ Banco de Dados
Script para criação do banco no PostgreSQL está no arquivo database.sql na raiz do projeto.

🤝 Contribuição
Sinta-se livre para contribuir com melhorias, abrir issues ou sugerir novas funcionalidades.

📜 Licença
Este projeto está licenciado sob a licença MIT — veja o arquivo LICENSE para detalhes.

Feito com a esperança na juventude, por:
Vitor Luna

🚩 Frase que nos guia:
"Peço que vocês sejam revolucionários, que vão contra a corrente." — Papa Francisco na JMJ
