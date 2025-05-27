var express = require("express");
var router = express.Router();

var sessaoController = require("../controllers/sessaoController");

router.post("/registrarSessao", function (req, res) {
    sessaoController.registrarSessao(req, res);
});

module.exports = router;