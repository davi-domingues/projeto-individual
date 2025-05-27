var database = require("../database/config");

function pesquisarUsername(username) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisar():", username);

    var pesquisarUsername = `
        SELECT count(id) AS qtdusername FROM vw_usuario WHERE username = '${username}';
    `;

    console.log("Executando a instrução SQL: \n", pesquisarUsername);
    return database.executar(pesquisarUsername);
};

function pesquisarEmail(email) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisar():", email);

    var pesquisarEmail = `
        SELECT count(id) AS qtdemail FROM vw_usuario WHERE email = '${email}';
    `;

    console.log("Executando a instrução SQL: \n", pesquisarEmail);
    return database.executar(pesquisarEmail);
};

function cadastrar(nome, username, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, username, email, senha);

    var instrucaoSql = `
        CALL cadastrar_usuario('${nome}', '${username}', '${email}', '${senha}');
    `;

    console.log("Executando a instrução SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
};

function autenticar(usuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function logar(): ", usuario, senha);
    var instrucaoSql = `
        SELECT id, nome, username, email FROM vw_usuario WHERE (email = '${usuario}' OR username =  '${usuario}') AND senha = fnc_criptografar('${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    autenticar,
    pesquisarUsername,
    pesquisarEmail
};