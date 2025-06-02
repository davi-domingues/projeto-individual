var sessaoModel = require("../models/sessaoModel");
var pontuacaoModel = require("../models/pontuacaoModel");

function registrarSessao(req, res) {
    var tempo = req.body.tempoServer;
    // var totalMinutos = req.body.totalMinutosServer;
    var idUsuario = req.body.idUsuarioServer;
    tempo == undefined ? res.status(400).send("tempo está undefined") :
    idUsuario == undefined ? res.status(400).send("idUsuario está undefined") :
   
    sessaoModel.registrarTempo(tempo, idUsuario)
        .then(
            function (resultado) {
                res.status(200).json(resultado);
                // pontuacaoModel.adicionarPontuacao(idUsuario, totalMinutos);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o registro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    ;
};

module.exports = {
    registrarSessao
};