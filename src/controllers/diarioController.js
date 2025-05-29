var diarioModel = require("../models/diarioModel");

function cadastrarLivro(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var nome = req.body.nomeServer;
    var autor = req.body.autorServer;
    var paginas = req.body.paginasServer;
    var editora = req.body.editoraServer;
    var genero = req.body.generoServer;
    var ano = req.body.anoServer;
    var isbn = req.body.isbnServer;
    var sinopse = req.body.sinopseServer;
    
    idUsuario == undefined ? res.status(400).send("idUsuario está undefined") :
    nome == undefined ? res.status(400).send("nome está undefined") :
    autor == undefined ? res.status(400).send("autor está undefined") :
    paginas == undefined ? res.status(400).send("paginas está undefined") :
    editora == undefined ? res.status(400).send("editora está undefined") :
    genero == undefined ? res.status(400).send("genero está undefined") :
    ano == undefined ? res.status(400).send("ano está undefined") :
    isbn == undefined ? res.status(400).send("isbn está undefined") :
    sinopse == undefined ? res.status(400).send("sinopse está undefined") :

    diarioModel.cadastrarLivro(idUsuario, nome, autor, paginas, editora, genero, ano, isbn, sinopse)
        .then(
            function (resultado) {
                res.status(200).json(resultado);
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