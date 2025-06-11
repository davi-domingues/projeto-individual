var express = require("express");
var router = express.Router();

var configController = require("../controllers/configController")

router.delete("/reiniciarConta/:idUsuario", function (req, res) {
    configController.reiniciarConta(req,res)
});

router.delete("/deletarConta/:idUsuario", function (req, res) {
    configController.deletarConta(req,res)
});

module.exports = router;