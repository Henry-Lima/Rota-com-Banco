const Sequelize = require("sequelize");

const conexaoComBanco = new Sequelize("gerenciamento", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Postagem = conexaoComBanco.define("postagens", {

    descricao: {
        type: Sequelize.STRING,
    },

    data: {
        type: Sequelize.DATE,
    },

    funcionarios: {
        type: Sequelize.STRING,
    },
});

// Postagem.sync({ force: true });

//INSERT
Postagem.create({
  descricao: "Projeto de arquitetura urbana rudimentar",
  data:"24-Oct-2024",
  funcionarios:"Darlan, Bruno, Julia, Kauê e Mago"
});