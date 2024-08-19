const express = require("express");
const naipe_controller = require("./controllers/naipe.js");
const carta_controller = require("./controllers/carta.js");
const app = express();
const port = 3000;

app.use(express.json());

// Rotas para Naipe
app.post("/naipe", (req, res) => {
  const naipe = req.body;
  const code = naipe_controller.store(naipe);
  res.status(code).json({ message: code === 201 ? "Naipe criado com sucesso" : "Erro ao criar naipe" });
});

app.get("/naipe", (req, res) => {
  const naipes = naipe_controller.index();
  res.json(naipes);
});

app.get("/naipe/:id", (req, res) => {
  const naipe = naipe_controller.show(req.params.id);
  if (naipe) {
    res.json(naipe);
  } else {
    res.status(404).json({ message: "Naipe não encontrado" });
  }
});

app.put("/naipe/:id", (req, res) => {
  const naipe = req.body;
  const code = naipe_controller.update(req.params.id, naipe);
  res.status(code).json({ message: code === 200 ? "Naipe atualizado com sucesso" : "Erro ao atualizar naipe" });
});

app.delete("/naipe/:id", (req, res) => {
  const code = naipe_controller.destroy(req.params.id);
  res.status(code).json({ message: code === 200 ? "Naipe deletado com sucesso" : "Erro ao deletar naipe" });
});

// Rotas para Carta
app.post("/carta", (req, res) => {
  const carta = req.body;
  const code = carta_controller.store(carta);
  res.status(code).json({ message: code === 201 ? "Carta criada com sucesso" : "Erro ao criar carta" });
});

app.get("/carta", (req, res) => {
  const cartas = carta_controller.index();
  res.json(cartas);
});

app.get("/carta/:id", (req, res) => {
  const carta = carta_controller.show(req.params.id);
  if (carta) {
    res.json(carta);
  } else {
    res.status(404).json({ message: "Carta não encontrada" });
  }
});

app.put("/carta/:id", (req, res) => {
  const carta = req.body;
  const code = carta_controller.update(req.params.id, carta);
  res.status(code).json({ message: code === 200 ? "Carta atualizada com sucesso" : "Erro ao atualizar carta" });
});

app.delete("/carta/:id", (req, res) => {
  const code = carta_controller.destroy(req.params.id);
  res.status(code).json({ message: code === 200 ? "Carta deletada com sucesso" : "Erro ao deletar carta" });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


const express = require("express");
const naipe_controller = require("./controllers/naipe.js");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/naipe", (req, res) => {
  const naipe = req.body;
  const code = naipe_controller.store(naipe);
  res.status(code).json();
});

app.get("/naipe", (req, res) => {
  const naipe = naipe_controller.index();
  res.json(naipe);
});

app.get("/naipe/:id", (req, res) => {
  const naipe = naipe_controller.show(req.params.id);
  res.json(naipe);
});

app.put("/naipe/:id", (req, res) => {
  const naipe = req.body;
  const code = naipe_controller.update(req.params.id, naipe);
  res.status(code).json();
});

app.delete("/naipe/:id", (req, res) => {
  naipe_controller.destroy(req.params.id);
  res.json();
});

app.listen(port, () => {
  console.log(`Sucesso na conexão ${port}`);
});
