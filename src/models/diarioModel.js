var database = require("../database/config");

function cadastrarLivro(idUsuario, nome, autor, paginas) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcao():", idUsuario, nome, autor, paginas);

    var instrucaoSql = `
        CALL cadastrar_livro('${idUsuario}', '${nome}', '${autor}', '${paginas}')
    `;

    console.log("Executando a instrução SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
};

function registrarLeitura(idLivro, idUsuario, paginasLidas, comentario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcao():", idUsuario, idLivro, paginasLidas, comentario);

    var instrucaoSql = `
        CALL registrar_leitura('${idLivro}', '${idUsuario}', '${paginasLidas}', '${comentario}')
    `;

    console.log("Executando a instrução SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
};

function listarLivrosPorId(idUsuario) {
    var instrucaoSql = `SELECT * FROM vw_livro WHERE idUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function listarLeiturasPorId(idLivro, idUsuario) {
    var instrucaoSql = `SELECT * FROM vw_leitura WHERE idLivro = ${idLivro} AND idUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

module.exports = {
    cadastrarLivro,
    registrarLeitura,
    listarLivrosPorId,
    listarLeiturasPorId
};