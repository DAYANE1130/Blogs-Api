

<!-- Olá, Tryber!

Esse é apenas um arquivo inicial para o README do seu projeto.

É essencial que você preencha esse documento por conta própria, ok?

Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!

⚠️ IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.

-->
# Projeto Blog API

Este projeto consiste no desenvolvimento de uma API e banco de dados para a produção de conteúdo para um blog. A aplicação é desenvolvida em Node.js, utilizando o pacote Sequelize para realizar as operações de CRUD nos posts.
   
 
 O código desenvolvido por mim está no diretório "src" os demais arquivos e diretórios foram desenvolvidos pela Trybe.

## Funcionalidades

- Criação e  leitura de posts.
- Gerenciamento de usuários e autenticação para criação de posts.
- Associação de categorias aos posts, permitindo a classificação e filtragem do conteúdo.

## Requisitos

Certifique-se de ter o Node.js instalado em sua máquina antes de prosseguir.

## Instalação

1. Clone este repositório em seu ambiente local.
2. Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:

    ```npm install```

   
3. Configure as variáveis de ambiente necessárias, como as credenciais do banco de dados e a chave de autenticação.

Instruções Trybe - para configurar variavéis de ambiente

**Você irá precisar configurar as variáveis de ambiente para uso do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

  O arquivo a seguir, contém um modelo das variáveis de ambiente utilizadas no projeto. Para o contexto de teste local, é importante configurar as variáveis: `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`:

  > 👉 `.env.example`
  ```env
  #### SERVER VARS
  NODE_ENV=development
  API_PORT=3000

  #### DATABASE VARS
  MYSQL_HOST=localhost
  MYSQL_PORT=3306
  MYSQL_DB_NAME=blogs-api
  MYSQL_USER=root
  MYSQL_PASSWORD=password

  #### SECRECT VARS
  JWT_SECRET=suaSenhaSecreta
  ```

  #### Variável `JWT_SECRET`:
  
  Esta variável de ambiente deverá ser utilizada tanto para criar o token quanto para verificá-lo. Os teste locais e o avaliador vão utilizar a variável de ambiente `JWT_SECRET` para testar os requisitos
## Uso

4. Criar
Execute o comando para criar o banco de dados e as tabelas:

`npx sequelize db:create`
`npx sequelize db:migrate`

5. Inicie o servidor executando o seguinte comando:

   ```npm start```

   

## Endpoints

A seguir estão os principais endpoints disponíveis nesta API:
- - `POST /user`: Cria um usuário
- - `GET /user/id`: Busca um usuário específico.
- - `GET /users`: Busca todos os usuários.
- - `POST /login`: Realiza login
- - `POST /post`: Cria um novo post. Requer autenticação.
- - `GET /post`: Retorna todos os posts.Requer autenticação.
- - `POST /categories`: Cria um nova categoria. Requer autenticação.
- - `GET /categories`: Retorna todas as categorias . Requer autenticação.









