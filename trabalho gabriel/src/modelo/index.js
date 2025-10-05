// src/models/index.js
const { Sequelize } = require('sequelize');

// Configurações da conexão com o banco de dados PostgreSQL
const sequelize = new Sequelize('estoque_db', 'postgres', 'Gabriell21', {
  host: 'localhost',
  dialect: 'postgres',
  port: 12345,
  logging: false, 
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Produto = require('./produto.js')(sequelize);

module.exports = db;