var dashboardModel = require("../models/dashboardModel");

function buscarTempoRecorde(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.buscarTempoRecorde(idUsuario)
    .then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    )
    .catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    )
};

function buscarLivrosConcluidos(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.buscarLivrosConcluidos(idUsuario)
    .then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    )
    .catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    )
};

function buscarUltimoLivro(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.buscarUltimoLivro(idUsuario)
    .then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    )
    .catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    )
};

module.exports = {
    buscarTempoRecorde,
    buscarLivrosConcluidos,
    buscarUltimoLivro
};