var usuarioModel = require("../models/usuarioModel");
var pontuacaoModel = require("../models/pontuacaoModel");
var streakModel = require("../models/streakModel");

function pesquisarUsername(req, res) {
    var username = req.body.usernameServer;

    username == undefined ? res.status(400).send("Username undefinied"):
    usuarioModel.pesquisarUsername(username)
        .then( (resultado) => {
            if (resultado[0].qtdusername > 0) {
                res.status(409).send('Username já cadastrado');
            };
            })
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao pesquisar username! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            )
    ;
};

function pesquisarEmail(req, res) {
    var email = req.body.emailServer;

    email == undefined ? res.status(400).send("Email undefinied"):
    usuarioModel.pesquisarEmail(email)
        .then( (resultado) => {
            if (resultado[0].qtdemail > 0) {
                res.status(409).send('Email já cadastrado');
            };
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao pesquisar email! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
        ;
};

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
                res.status(200).json(resultado);

                usuarioModel.autenticar(username, senha)
                    .then(
                        function (resultadoAutenticar) {
                            pontuacaoModel.iniciarPontuacao(resultadoAutenticar[0].id);
                            streakModel.iniciarStreak(resultadoAutenticar[0].id);
                        }
                    )
                    .catch(
                        function (erro) {
                            console.log(erro);
                        }
                    )
                ;
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
    var usuario = req.body.usuarioServer;
    var senha = req.body.senhaServer;

    usuario == undefined ? res.status(400).send("Seu usuario está undefined!") :
    senha == undefined ? res.status(400).send("Sua senha está indefinida!") :

    usuarioModel.autenticar(usuario, senha)
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
                    });

                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Usuario e/ou senha inválido(s)");
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
    autenticar,
    pesquisarUsername,
    pesquisarEmail
}