var express = require("express");
var router = express.Router();

var forumController = require("../controllers/forumController");

router.get("/listarForuns", function (req, res) {
    forumController.listarForuns(req, res);
});

router.post("/criarForum", function (req, res) {
    forumController.criarForum(req, res);
});

router.delete("/excluirForum/:idForum", function (req, res) {
    forumController.excluirForum(req, res);
});

router.get("/listarComentarios/:idForum", function (req, res) {
    forumController.listarComentarios(req, res);
});

router.post("/postarComentario", function (req, res) {
    forumController.postarComentario(req, res);
});

router.delete("/excluirComentario/:idUsuario/:idForum/:idComentario", function (req, res) {
    forumController.excluirComentario(req, res);
});

router.put("/editarComentario/:idUsuario/:idForum/:idComentario", function (req, res) {
    forumController.editarComentario(req, res);
});

router.put("/atualizarCurtidas/:idUsuario/:idForum/:idComentario/:acao", function (req, res) {
    forumController.atualizarCurtidas(req, res);
});

module.exports = router;