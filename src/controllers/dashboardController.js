var dashboardModel = require("../models/dashboardModel");
var pontuacaoModel = require("../models/pontuacaoModel");

function buscarTempoRecorde(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.buscarTempoRecorde(idUsuario)
    .then(
        function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
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
            if (resultado[0].length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
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
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
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

function buscarTempoPorDia(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.buscarTempoPorDia(idUsuario)
    .then(
        function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
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

function buscarPaginasPorDia(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.buscarPaginasPorDia(idUsuario)
    .then(
        function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
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

function buscarRankingPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.buscarRankingPorUsuario(idUsuario)
    .then(
        function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
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

function buscarRanking(req, res) {
    dashboardModel.buscarRanking()
    .then(
        function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
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
    buscarUltimoLivro,
    buscarTempoPorDia,
    buscarPaginasPorDia,
    buscarRankingPorUsuario,
    buscarRanking
};