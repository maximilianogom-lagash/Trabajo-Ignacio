const express = require("express");
const functions = require("../helpers/translate");
const app = express();

app.get("/traducirNumero", (request, response) => {
  response.status(200).send("Ruta encontrada");
});

module.exports = app;
