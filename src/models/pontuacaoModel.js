var database = require("../database/config");

function adicionarPontuacao(idUsuario, pontuacao) {
    var instrucaoSql = `
        CALL adicionar_pontuacao('${idUsuario}', round(${pontuacao}, 0))
    `;

    console.log("Executando a instrução SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
};

function iniciarPontuacao(idUsuario) {
    var instrucaoSql = `
        CALL iniciar_pontuacao('${idUsuario}')
    `;

    console.log("Executando a instrução SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
};

module.exports = {
    adicionarPontuacao,
    iniciarPontuacao
};