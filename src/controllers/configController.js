var configModel = require("../models/configModel");
var streakModel = require("../models/streakModel");
var pontuacaoModel = require("../models/pontuacaoModel");

function reiniciarConta(req, res) {
    const idUsuario = req.params.idUsuario;

    idUsuario == undefined ? res.status(400).send("idUsuario está undefined") :

    configModel.reiniciarConta(idUsuario)
        .then(
            function (resultado) {
                res.status(200).json(resultado);
                streakModel.iniciarStreak(idUsuario)
                    .then(
                        function (resultado) {
                            res.status(200).json(resultado);
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
                pontuacaoModel.iniciarPontuacao(idUsuario)
                    .then(
                        function (resultado) {
                            res.status(200).json(resultado);
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

function deletarConta(req, res) {
    const idUsuario = req.params.idUsuario;
    
    idUsuario == undefined ? res.status(400).send("idUsuario está undefined") :
    
    configModel.reiniciarConta(idUsuario)
        .then(
            function (resultado) {
                res.status(200).json(resultado);
                configModel.deletarConta(idUsuario)
                    .then(
                        function (resultado) {
                            res.status(200).json(resultado);
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

module.exports = {
    reiniciarConta,
    deletarConta
}