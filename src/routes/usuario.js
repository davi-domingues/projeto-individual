var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/pesquisarUsername", function (req, res) {
    usuarioController.pesquisarUsername(req, res);
});

router.post("/pesquisarEmail", function (req, res) {
    usuarioController.pesquisarEmail(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req,res);
});

module.exports = router;