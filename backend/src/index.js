const express = require("express");
const cors = require("cors");
const routes = require("./routes"); // usa-se ./ pois é um arquivo

const app = express(); // criando a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); // a aplicação vai ouvir a porta 3333, ou seja, localhost:3333 será a aplicação
