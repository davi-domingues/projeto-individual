var express = require("express");
var router = express.Router();

var diarioController = require("../controllers/diarioController");

router.post("/cadastrarLivro", function (req, res) {
    diarioController.cadastrarLivro(req, res);
});

router.post("/registrarLeitura", function (req, res) {
    diarioController.registrarLeitura(req, res);
});

module.exports = router;