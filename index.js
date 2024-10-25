const Sequelize = require("sequelize");
const express = require("express");

const app = express(); 
const { create } = require("express-handlebars");



const conexaoComBanco = new Sequelize("gerenciamento", "root", "", {
  host: "localhost",
  dialect: "mysql",
});


app.get("/aps/:Nome/:Descricao/:Data/:Funcionarios", function (req, res) {
    res.send({
        nome: req.params.Nome,
        descricao: req.params.Descricao,
        data: req.params.Data,
        funcionarios: req.params.Funcionarios,
    }); 
});



//SEMPRE MANTENHA NO FINAL DO CÒDIGO 
app.listen(3031, function () {
  console.log("Server is running on port 3031");
});