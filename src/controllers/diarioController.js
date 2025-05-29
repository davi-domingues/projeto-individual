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
    var livro = req.body.livroServer;
    var paginasLidas = req.body.paginasLidasServer;
    var comentario = req.body.comentarioServer;

    idUsuario == undefined ? res.status(400).send("idUsuario está undefined") :
    livro == undefined ? res.status(400).send("livro está undefined") :
    paginasLidas == undefined ? res.status(400).send("paginasLidas está undefined") :
    comentario == undefined ? res.status(400).send("comentario está undefined") :

    diarioModel.registrarLeitura(idUsuario, livro, paginasLidas, comentario)
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

module.exports = {
    cadastrarLivro,
    registrarLeitura
};