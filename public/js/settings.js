function reiniciarConta() {
    const idUsuario = sessionStorage.ID_USUARIO;

    if (idUsuario == undefined) {
        alert('Erro na sessão, logue-se novamente');
        window.location.href = '/'
        return false;
    };

    fetch(`/config/reiniciarConta/${idUsuario}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.ok) {
            window.alert("Conta reiniciada com sucesso!");
            window.location.reload();
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    fecharModal(modal_confirma);
};

function deletarConta() {
    const idUsuario = sessionStorage.ID_USUARIO;

    if (idUsuario == undefined) {
        alert('Erro na sessão, logue-se novamente');
        window.location.href = '/'
        return false;
    };

    fetch(`/config/deletarConta/${idUsuario}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        if (resposta.ok) {
            window.alert("Sua conta foi deletada com sucesso! Te esperamos numa próxima");
            window.location.href = "../index.html"
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    fecharModal(modal_confirma);
};