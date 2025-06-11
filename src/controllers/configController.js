var configModel = require("../models/configModel");
var streakModel = require("../models/streakModel");
var pontuacaoModel = require("../models/pontuacaoModel");

function reiniciarConta(req, res) {
    const idUsuario = req.params.idUsuario;

    configModel.reiniciarConta(idUsuario).then().catch();
    streakModel.iniciarStreak(idUsuario).then().catch();
    pontuacaoModel.iniciarPontuacao(idUsuario).then().catch();
};

function deletarConta(req, res) {
    const idUsuario = req.params.idUsuario;
    
    
    configModel.reiniciarConta(idUsuario).then(() => {
    configModel.deletarConta(idUsuario).then().catch();
    }
    ).catch();
};

module.exports = {
    reiniciarConta,
    deletarConta
}