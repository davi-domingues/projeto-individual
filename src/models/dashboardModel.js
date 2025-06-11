var database = require("../database/config");

function buscarTempoRecorde(idUsuario) {
    var instrucaoSql = `SELECT tempo AS tempoRecorde FROM vw_sessao WHERE idUsuario = ${idUsuario} ORDER BY 1 DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function buscarLivrosConcluidos(idUsuario) {
    var instrucaoSql = `CALL buscar_livros_concluidos(${idUsuario})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function buscarUltimoLivro(idUsuario) {
    var instrucaoSql = `SELECT * FROM vw_status_livro_leitura WHERE idLivro = (SELECT idLivro FROM vw_leitura ORDER BY dtRegistro DESC LIMIT 1) AND idUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function buscarTempoPorDia(idUsuario) {
    var instrucaoSql = `SELECT SUM(TIME(tempo)) AS tempoAcumulado, DATE(dtRegistro) AS data FROM vw_sessao WHERE idUsuario = ${idUsuario} GROUP BY idUsuario, 2`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function buscarPaginasPorDia(idUsuario) {
    var instrucaoSql = `SELECT SUM(paginasLidas) AS somaPaginasLidas, DATE(dtRegistro) AS data FROM vw_leitura WHERE idUsuario = ${idUsuario} GROUP BY idUsuario, 2 ORDER BY 2`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function buscarRankingPorUsuario(idUsuario) {
    var instrucaoSql = `SELECT ranking, pontos FROM vw_ranking WHERE idUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function buscarRanking() {
    var instrucaoSql = `SELECT username, ranking, pontos FROM vw_ranking AS r JOIN vw_usuario AS u ON r.idUsuario = u.id`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

module.exports = {
    buscarTempoRecorde,
    buscarLivrosConcluidos,
    buscarUltimoLivro,
    buscarTempoPorDia,
    buscarPaginasPorDia,
    buscarRankingPorUsuario,
    buscarRanking
};