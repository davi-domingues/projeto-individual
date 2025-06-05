var diarioModel = require("../models/diarioModel");
var pontuacaoModel = require("../models/pontuacaoModel");
var streakModel = require("../models/streakModel");

function cadastrarLivro(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var nome = req.body.nomeServer;
    var autor = req.body.autorServer;
    var paginas = req.body.paginasServer;
    
    idUsuario == undefined ? res.status(400).send("idUsuario está undefined") :
    nome == undefined ? res.status(400).send("nome está undefined") :
    autor == undefined ? res.status(400).send("autor está undefined") :
    paginas == undefined ? res.status(400).send("paginas está undefined") :

    diarioModel.cadastrarLivro(idUsuario, nome, autor, paginas)
        .then(
            function (resultado) {
                res.status(200).json(resultado);
                pontuacaoModel.adicionarPontuacao(idUsuario, 20);
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

function registrarLeitura(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idLivro = req.body.idLivroServer;
    var paginasLidas = req.body.paginasLidasServer;
    var comentario = req.body.comentarioServer;

    idUsuario == undefined ? res.status(400).send("idUsuario está undefined") :
    idLivro == undefined ? res.status(400).send("idLivro está undefined") :
    paginasLidas == undefined ? res.status(400).send("paginasLidas está undefined") :
    comentario == undefined ? res.status(400).send("comentario está undefined") :

    diarioModel.registrarLeitura(idLivro, idUsuario, paginasLidas, comentario)
        .then(
            function (resultado) {
                res.status(200).json(resultado);
                pontuacaoModel.adicionarPontuacao(idUsuario, paginasLidas/10);
                streakModel.atualizarStreak(idUsuario);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o registro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    ;
};

function listarLivrosPorId(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`Buscando livros cadastrados por usuário de ID ${idUsuario}`);

    diarioModel.listarLivrosPorId(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os livros cadastrados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrarLivro,
    registrarLeitura,
    listarLivrosPorId
};