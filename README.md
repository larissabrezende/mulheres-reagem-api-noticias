

    <h1>API - News</h1>
    <p>Esta API permite a criação, leitura, atualização e exclusão de notícias, incluindo upload de imagens. Ela foi construída utilizando Node.js, Express, MongoDB e JWT para autenticação.</p>

    <h2>Requisitos</h2>
    <ul>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>JWT para autenticação</li>
        <li>Multer para upload de imagens</li>
    </ul>

    <h2>Endpoints</h2>
    
    <h3>1. Obter todas as notícias</h3>
    <p><strong>GET</strong> /api/news</p>
    <p>Este endpoint retorna todas as notícias cadastradas.</p>

    <h3>2. Criar uma nova notícia</h3>
    <p><strong>POST</strong> /api/news</p>
    <p>Este endpoint cria uma nova notícia. O corpo da requisição deve conter:</p>
    <ul>
        <li><strong>title</strong>: Título da notícia</li>
        <li><strong>content</strong>: Conteúdo da notícia</li>
        <li><strong>image</strong> (opcional): Imagem associada à notícia</li>
    </ul>
    <p>Requer autenticação com token JWT.</p>

    <h3>3. Atualizar uma notícia</h3>
    <p><strong>PUT</strong> /api/news/:id</p>
    <p>Este endpoint atualiza uma notícia existente. O corpo da requisição deve conter:</p>
    <ul>
        <li><strong>title</strong>: Título da notícia</li>
        <li><strong>content</strong>: Conteúdo da notícia</li>
        <li><strong>image</strong> (opcional): Imagem associada à notícia</li>
    </ul>
    <p>Requer autenticação com token JWT.</p>

    <h3>4. Deletar uma notícia</h3>
    <p><strong>DELETE</strong> /api/news/:id</p>
    <p>Este endpoint deleta uma notícia específica, identificada pelo ID.</p>
    <p>Requer autenticação com token JWT.</p>

    <h2>Autenticação</h2>
    <p>Para realizar operações de criação, atualização e exclusão, é necessário incluir um token JWT no cabeçalho da requisição, no campo <strong>Authorization</strong>. O token pode ser obtido após o login ou autenticação do usuário.</p>

    <h2>Estrutura do Projeto</h2>
    <ul>
        <li><strong>config/db.js</strong>: Configuração de conexão com o MongoDB</li>
        <li><strong>controllers/newsController.js</strong>: Lógica para criar, atualizar, deletar e buscar notícias</li>
        <li><strong>middleware/authMiddleware.js</strong>: Middleware para verificar a autenticidade do token JWT</li>
        <li><strong>middleware/upload.js</strong>: Middleware para manipulação do upload de imagens</li>
        <li><strong>models/News.js</strong>: Definição do modelo de dados da notícia</li>
        <li><strong>routes/newsRoutes.js</strong>: Definição das rotas para acessar os endpoints da API</li>
        <li><strong>server.js</strong>: Arquivo principal que inicializa o servidor</li>
    </ul>

    <h2>Como rodar a API</h2>
    <ol>
        <li>Clone o repositório</li>
        <li>Instale as dependências com <code>npm install</code></li>
        <li>Crie um arquivo <code>.env</code> e defina a variável <code>MONGO_URI</code> com a URI do seu banco de dados MongoDB</li>
        <li>Defina a variável <code>JWT_SECRET</code> com a chave secreta para o JWT</li>
        <li>Inicie o servidor com <code>npm start</code></li>
    </ol>

    <h2>Licença</h2>
    <p>Este projeto é licenciado sob a MIT License.</p>

</html>

