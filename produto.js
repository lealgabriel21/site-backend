// Arquivo: src/modelo/produto.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Produto = sequelize.define('Produto', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo_de_barras: {
      type: DataTypes.STRING,
      unique: true, // Não pode haver dois produtos com o mesmo código
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantidade_estoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // Se não for informado, começa com 0
    },
    categoria: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: true,
  });

  return Produto;
};