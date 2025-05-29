var dashboardModel = require("../models/dashboardModel");

function func(req, res) {
    

    dashboardModel.func(param)
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
    func
};