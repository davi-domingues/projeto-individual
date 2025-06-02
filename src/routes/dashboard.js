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

router.get("/tempoPorDia/:idUsuario", function (req, res) {
    dashboardController.buscarTempoPorDia(req, res);
});

router.get("/paginasPorDia/:idUsuario", function (req, res) {
    dashboardController.buscarPaginasPorDia(req, res);
});

router.get("/rankingPorUsuario/:idUsuario", function (req, res) {
    dashboardController.buscarRankingPorUsuario(req, res);
});

router.get("/rankingGeral", function (req, res) {
    dashboardController.buscarRanking(req, res);
});


module.exports = router;