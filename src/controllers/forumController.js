var forumModel = require("../models/forumModel");

function listarForuns(req, res) {
    forumModel.listarForuns(params).then().catch();
};

function criarForum(req, res) {
    forumModel.criarForum(params).then().catch();
};

function excluirForum(req, res) {
    forumModel.excluirForum(params).then().catch();
};

function listarComentarios(req, res) {
    forumModel.listarComentarios(params).then().catch();
};

function postarComentario(req, res) {
    forumModel.postarComentario(params).then().catch();
};

function excluirComentario(req, res) {
    forumModel.excluirComentario(params).then().catch();
};

function editarComentario(req, res) {
    forumModel.editarComentario(params).then().catch();
};

function atualizarCurtidas(req, res) {
    forumModel.atualizarCurtidas(params).then().catch();
};

module.exports = {
    listarForuns,
    criarForum,
    excluirForum,
    listarComentarios,
    postarComentario,
    excluirComentario,
    editarComentario,
    atualizarCurtidas
}