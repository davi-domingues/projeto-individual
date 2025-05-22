var database = require("../database/config");

function pesquisarUsername(username) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisar():", username);

    var pesquisarUsername = `
        SELECT count(idUsuario) AS qtdusername FROM usuario WHERE username = '${username}';
    `;

    console.log("Executando a instrução SQL: \n", pesquisarUsername);
    return database.executar(pesquisarUsername);
};

function pesquisarEmail(email) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisar():", email);

    var pesquisarEmail = `
        SELECT count(idUsuario) AS qtdemail FROM usuario WHERE email = '${email}';
    `;

    console.log("Executando a instrução SQL: \n", pesquisarEmail);
    return database.executar(pesquisarEmail);
};

function cadastrar(nome, username, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, username, email, senha);

    var instrucaoSql = `
        INSERT INTO usuario VALUES (default, "${nome}", "${username}", "${email}", "${senha}");
    `;

    console.log("Executando a instrução SQL: \n", instrucaoSql);
    return database.executar(instrucaoSql);
};

function autenticar(usuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function logar(): ", usuario, senha);
    var instrucaoSql = `
        SELECT idUsuario AS id, nome, username, email, senha FROM usuario WHERE (email = '${usuario}' OR username =  '${usuario}') AND senha = '${senha}';
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