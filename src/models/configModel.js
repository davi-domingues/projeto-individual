var database = require("../database/config");

function reiniciarConta(idUsuario) {
    var instrucaoSql = `CALL reiniciar_dados(${idUsuario})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarConta(idUsuario) {
    var instrucaoSql = `CALL deletar_conta(${idUsuario})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    reiniciarConta,
    deletarConta
}