// server.js
const express = require("express");
const cors = require("cors");
const db = require("./src/modelo/index.js");

const app = express();

// Configurações do servidor
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Sincroniza o banco de dados
db.sequelize.sync({ force: false }).then(() => {
  console.log("Banco de dados sincronizado!");
});

// Rota de teste
app.get("/", (req, res) => {
  res.json({ message: "Bem-vindo à API !" });
});

// Define a porta e inicia o servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor tá no ar na porta ${PORT}`);
});

require("./src/routes/produtoRoutes.js")(app);