// Arquivo: src/controllers/produtoController.js
const db = require('../modelo');
const Produto = db.Produto;

// 1. Criar um novo produto
exports.create = async (req, res) => {
  const { nome, codigo_de_barras, preco, quantidade_estoque, categoria } = req.body;
  if (!nome || !preco || !quantidade_estoque) {
    return res.status(400).send({ message: "Nome, preço e quantidade são obrigatórios." });
  }
  try {
    const novoProduto = await Produto.create(req.body);
    res.status(201).send(novoProduto);
  } catch (error) {
    res.status(500).send({ message: "Erro ao criar produto: " + error.message });
  }
};

// 2. Listar todos os produtos
exports.findAll = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.status(200).send(produtos);
  } catch (error) {
    res.status(500).send({ message: "Erro ao buscar produtos: " + error.message });
  }
};

// 3. Buscar um produto pelo ID
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const produto = await Produto.findByPk(id);
    if (produto) {
      res.status(200).send(produto);
    } else {
      res.status(404).send({ message: `Produto com id=${id} não encontrado.` });
    }
  } catch (error) {
    res.status(500).send({ message: "Erro ao buscar o produto: " + error.message });
  }
};

// 4. Atualizar um produto pelo ID
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const [num] = await Produto.update(req.body, { where: { id: id } });
    if (num == 1) {
      res.send({ message: "Produto atualizado com sucesso." });
    } else {
      res.send({ message: `Não foi possível atualizar o produto com id=${id}.` });
    }
  } catch (error) {
    res.status(500).send({ message: "Erro ao atualizar o produto: " + error.message });
  }
};

// 5. Deletar um produto pelo ID
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await Produto.destroy({ where: { id: id } });
    if (num == 1) {
      res.send({ message: "Produto deletado com sucesso" });
    } else {
      res.send({ message: `Não foi possível deletar o produto com id=${id}.` });
    }
  } catch (error) {
    res.status(500).send({ message: "Erro ao deletar o produto: " + error.message });
  }
};