var database = require("../database/config");

function cadastrarLivro(idUsuario, nome, autor, paginas, editora, genero, ano, isbn, sinopse) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcao():", idUsuario, nome, autor, paginas, editora, genero, ano, isbn, sinopse);

    var instrucaoSql = `
        CALL cadastrar_livro('${idUsuario}', '${nome}', '${autor}', '${paginas}', fnc_substituirVazio('${editora}'), fnc_substituirVazio('${genero}'), fnc_substituirVazio('${ano}'), fnc_substituirVazio('${isbn}'), fnc_substituirVazio('${sinopse}'))
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
    var instrucaoSql = `SELECT * FROM tb_livro_individual WHERE at_fk_idUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarLivro,
    registrarLeitura,
    listarLivrosPorId
};