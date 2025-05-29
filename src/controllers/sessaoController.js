var sessaoModel = require("../models/sessaoModel");

function registrarSessao(req, res) {
    var tempo = req.body.tempoServer;
    var idUsuario = req.body.idUsuarioServer;

    tempo == undefined ? res.status(400).send("tempo está undefined") :
    idUsuario == undefined ? res.status(400).send("idUsuario está undefined") :
   
    sessaoModel.registrarTempo(tempo, idUsuario)
        .then(
            function (resultado) {
                res.status(200).json(resultado);
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