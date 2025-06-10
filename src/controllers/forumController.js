var forumModel = require("../models/forumModel");
var pontuacaoModel = require("../models/pontuacaoModel");

function listarForuns(req, res) {
    forumModel.listarForuns()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os livros cadastrados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
};

function criarForum(req, res) {
    const idUsuario = req.body.idUsuarioServer;
    const topico = req.body.topicoServer;

    idUsuario == undefined ? res.status(400).send("idUsuario está undefined") :
    topico == undefined ? res.status(400).send("topico está undefined") :

    forumModel.criarForum(idUsuario, topico)
        .then(
            function (resultado) {
                res.status(200).json(resultado);
                pontuacaoModel.adicionarPontuacao(idUsuario, 20);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
    ;
};

function excluirForum(req, res) {
    const idForum = req.params.idForum;
    forumModel.excluirForum(idForum)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
};

function listarComentarios(req, res) {
    var idForum = req.params.idForum;

    forumModel.listarComentarios(idForum)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os livros cadastrados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
};

function postarComentario(req, res) {
    const idForum = req.body.idForumServer;
    const idUsuario = req.body.idUsuarioServer;
    const comentario = req.body.comentarioServer;

    idForum == undefined ? res.status(400).send("idForum está undefined") :
    idUsuario == undefined ? res.status(400).send("idUsuario está undefined") :
    comentario == undefined ? res.status(400).send("comentario está undefined") :

    forumModel.postarComentario(idForum, idUsuario, comentario)
        .then(
            function (resultado) {
                res.status(200).json(resultado);
                pontuacaoModel.adicionarPontuacao(idUsuario, 10);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
    ;
};

function excluirComentario(req, res) {
    const idComentario = req.params.idComentario;
    const idUsuario = req.params.idUsuario;
    const idForum = req.params.idForum;

    idForum == undefined ? res.status(400).send("idForum está undefined") :
    idUsuario == undefined ? res.status(400).send("idUsuario está undefined") :
    idComentario == undefined ? res.status(400).send("idComentario está undefined") :

    forumModel.excluirComentario(idComentario, idUsuario, idForum)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
};

function editarComentario(req, res) {
    const idComentario = req.params.idComentario;
    const idUsuario = req.params.idUsuario;
    const idForum = req.params.idForum;
    const comentario = req.body.comentarioServer;

    idForum == undefined ? res.status(400).send("idForum está undefined") :
    idUsuario == undefined ? res.status(400).send("idUsuario está undefined") :
    idComentario == undefined ? res.status(400).send("idComentario está undefined") :
    comentario == undefined ? res.status(400).send("comentario está undefined") :

    forumModel.editarComentario(idComentario, idUsuario, idForum, comentario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
};

function atualizarCurtidas(req, res) {
    const idUsuario = req.params.idUsuario;
    const idForum = req.params.idForum;
    const idComentario = req.params.idComentario;
    const acao = req.params.acao;

    idForum == undefined ? res.status(400).send("idForum está undefined") :
    idUsuario == undefined ? res.status(400).send("idUsuario está undefined") :
    idComentario == undefined ? res.status(400).send("idComentario está undefined") :
    acao == undefined ? res.status(400).send("acao está undefined") :

    forumModel.atualizarCurtidas(idComentario, idUsuario, idForum, acao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
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