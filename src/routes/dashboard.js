var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/tempoRecorde/:idUsuario", function (req, res) {
    dashboardController.buscarTempoRecorde(req, res);
});

router.get("/livrosConcluidos/:idUsuario", function (req, res) {
    dashboardController.buscarLivrosConcluidos(req, res);
});

router.get("/ultimoLivro/:idUsuario", function (req, res) {
    dashboardController.buscarUltimoLivro(req, res);
});

module.exports = router;