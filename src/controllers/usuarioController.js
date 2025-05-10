var usuarioModel = require("../models/usuarioModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var username = req.body.usernameServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    nome == undefined ? res.status(400).send("Nome undefinied") :
    username == undefined ? res.status(400).send("Username undefinied") :
    email == undefined ? res.status(400).send("Email undefinied") :
    senha == undefined ? res.status(400).send("Senha undefinied") :
    
    usuarioModel.cadastrar(nome, username, email, senha)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    ;
};

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    email == undefined ? res.status(400).send("Seu email está undefined!") :
    senha == undefined ? res.status(400).send("Sua senha está indefinida!") :

    usuarioModel.autenticar(email, senha)
        .then(
            function (resultadoAutenticar) {  
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length == 1) {
                    console.log(resultadoAutenticar);

                    res.json({
                        id: resultadoAutenticar[0].id,
                        nome: resultadoAutenticar[0].nome,
                        username: resultadoAutenticar[0].username,
                        email: resultadoAutenticar[0].email,
                        senha: resultadoAutenticar[0].senha,
                    });

                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
    ;
};

module.exports = {
    cadastrar,
    autenticar
}