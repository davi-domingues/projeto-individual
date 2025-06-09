var database = require("../database/config");

function listarForuns(params) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcao():", params);

    var instrucaoSql = `
    `;
    
    console.log("Executando a instrução SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
};

function criarForum(idUsuario, topico) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcao():", idUsuario, topico);
    
    var instrucaoSql = `
        CALL criar_forum (${idUsuario}, '${topico}')
    `;

    console.log("Executando a instrução SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
};

function excluirForum(idForum) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcao():", idForum);

    var instrucaoSql = `
        CALL deletar_forum (${idForum})
    `;

    console.log("Executando a instrução SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
};

function listarComentarios(params) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcao():", params);

    var instrucaoSql = `
        
    `;

    console.log("Executando a instrução SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
};

function postarComentario(idForum, idUsuario, comentario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcao():", idForum, idUsuario, comentario);

    var instrucaoSql = `
        CALL postar_comentario (${idForum}, ${idUsuario}, '${comentario}')
    `;

    console.log("Executando a instrução SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
};

function excluirComentario(idComentario, idUsuario, idForum) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcao():", idComentario, idUsuario, idForum);

    var instrucaoSql = `
        CALL excluir_comentario (${idComentario}, ${idUsuario}, ${idForum})
        `;
        
    console.log("Executando a instrução SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
};

function editarComentario(idComentario, idUsuario, idForum, comentario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcao():", idComentario, idUsuario, idForum, comentario);
    
    var instrucaoSql = `
        CALL atualizar_comentario (${idComentario}, ${idUsuario}, ${idForum}, '${comentario}')
    `;

    console.log("Executando a instrução SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
};

function atualizarCurtidas(idComentario, idUsuario, idForum, acao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcao():", idComentario, idUsuario, idForum, acao);

    var instrucaoSql = `
        CALL atualizar_curtidas (${idComentario}, ${idUsuario}, ${idForum}, '${acao}')
    `;

    console.log("Executando a instrução SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
};

module.exports = {
    listarForuns,
    criarForum,
    excluirForum,
    listarComentarios,
    postarComentario,
    excluirComentario,
    editarComentario,
    atualizarCurtidas
}