# API - News

Esta API permite a criação, leitura, atualização e exclusão de notícias, incluindo upload de imagens. Ela foi construída utilizando Node.js, Express, MongoDB e JWT para autenticação.

## Requisitos
- Node.js
- MongoDB
- JWT para autenticação
- Multer para upload de imagens

## Endpoints

### 1. Obter todas as notícias
**GET** `/api/news`  
Este endpoint retorna todas as notícias cadastradas.

### 2. Criar uma nova notícia
**POST** `/api/news`  
Este endpoint cria uma nova notícia. O corpo da requisição deve conter:
- **title**: Título da notícia
- **content**: Conteúdo da notícia
- **image** (opcional): Imagem associada à notícia

Requer autenticação com token JWT.

### 3. Atualizar uma notícia
**PUT** `/api/news/:id`  
Este endpoint atualiza uma notícia existente. O corpo da requisição deve conter:
- **title**: Título da notícia
- **content**: Conteúdo da notícia
- **image** (opcional): Imagem associada à notícia

Requer autenticação com token JWT.

### 4. Deletar uma notícia
**DELETE** `/api/news/:id`  
Este endpoint deleta uma notícia específica, identificada pelo ID.

Requer autenticação com token JWT.

## Autenticação
Para realizar operações de criação, atualização e exclusão, é necessário incluir um token JWT no cabeçalho da requisição, no campo **Authorization**. O token pode ser obtido após o login ou autenticação do usuário.

## Estrutura do Projeto
- **config/db.js**: Configuração de conexão com o MongoDB
- **controllers/newsController.js**: Lógica para criar, atualizar, deletar e buscar notícias
- **middleware/authMiddleware.js**: Middleware para verificar a autenticidade do token JWT
- **middleware/upload.js**: Middleware para manipulação do upload de imagens
- **models/News.js**: Definição do modelo de dados da notícia
- **routes/newsRoutes.js**: Definição das rotas para acessar os endpoints da API
- **app.js**: Arquivo principal que inicializa o servidor

## Como rodar a API
1. Clone o repositório
2. Instale as dependências com `npm install`
3. Crie um arquivo `.env` e defina a variável `MONGO_URI` com a URI do seu banco de dados MongoDB
4. Defina a variável `JWT_SECRET` com a chave secreta para o JWT
5. Inicie o servidor com `npm start`

## Licença
Este projeto é licenciado sob a MIT License.



