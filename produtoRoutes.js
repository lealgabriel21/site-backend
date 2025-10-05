// Arquivo: src/routes/produtoRoutes.js
module.exports = app => {
  const produtos = require("../controllers/produtoController.js");
  const router = require("express").Router();

  router.post("/", produtos.create);
  router.get("/", produtos.findAll);
  router.get("/:id", produtos.findOne);
  router.put("/:id", produtos.update);
  router.delete("/:id", produtos.delete);

  app.use('/api/produtos', router);
};