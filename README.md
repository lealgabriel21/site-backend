# site-backend
1. Descrição Geral do Sistema
O presente projeto consiste no desenvolvimento de um sistema de controle de estoque para um mercado, seguindo a arquitetura MVC (Model-View-Controller). A aplicação permite o gerenciamento completo de produtos através de uma interface web simples e intuitiva.

O sistema foi construído com um backend robusto utilizando Node.js e o framework Express.js para a criação de uma API RESTful. A persistência de dados é gerenciada pelo PostgreSQL, com o ORM (Object-Relational Mapping) Sequelize facilitando a comunicação entre a aplicação e o banco de dados.

O frontend, por sua vez, foi desenvolvido com HTML5, CSS3 e JavaScript puro, consumindo a API do backend para realizar as quatro operações básicas de gerenciamento de dados, conhecidas como CRUD (Create, Read, Update, Delete):

Create: Adicionar novos produtos ao estoque.

Read: Listar todos os produtos existentes e visualizar seus detalhes.

Update: Editar informações de produtos já cadastrados.

Delete: Remover produtos do sistema.

O objetivo principal é oferecer uma solução funcional e organizada para a gestão de inventário, aplicando conceitos modernos de desenvolvimento web.

2. Diagrama Arquitetural
O sistema foi projetado em uma arquitetura de 3 camadas (3-Tier Architecture), uma abordagem clássica e eficiente para aplicações web.

Descrição das Camadas e Tecnologias:

1. Camada de Apresentação (Frontend / Client-Side):

Descrição: É a interface com a qual o usuário interage diretamente no navegador. Responsável por exibir os dados e capturar as entradas do usuário.

Tecnologias:

HTML5: Estruturação do conteúdo da página.

CSS3: Estilização e design visual.

JavaScript (ES6+): Manipulação dinâmica da página e comunicação (via requisições fetch) com a camada de aplicação (backend).

2. Camada de Aplicação (Backend / Server-Side):

Descrição: O "cérebro" do sistema. Processa as regras de negócio, gerencia as requisições vindas do frontend e se comunica com o banco de dados.

Tecnologias:

Node.js: Ambiente de execução do JavaScript no servidor.

Express.js: Framework para criação do servidor e gerenciamento das rotas da API REST.

Sequelize: ORM para modelagem dos dados e comunicação com o banco de dados de forma abstrata e segura.

CORS: Middleware para permitir que o frontend (em uma origem diferente) possa fazer requisições para a API.

3. Camada de Dados (Database):

Descrição: Responsável por armazenar e gerenciar os dados da aplicação de forma persistente e segura.

Tecnologias:

PostgreSQL: Sistema de Gerenciamento de Banco de Dados relacional utilizado para guardar as informações dos produtos.

Fluxo de Comunicação:
O Usuário (no Navegador) -> interage com o Frontend (HTML/JS) -> que envia uma Requisição HTTP (GET, POST, PUT, DELETE) para -> o Backend (API Express) -> que usa o Sequelize para traduzir a requisição em comandos SQL e conversar com -> o Banco de Dados (PostgreSQL). A resposta faz o caminho inverso.
