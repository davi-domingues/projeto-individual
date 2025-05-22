const ipt_nome = document.getElementById("cadastro_nome");
const ipt_username = document.getElementById("cadastro_username");
const ipt_email = document.getElementById("cadastro_email");
const ipt_senha = document.getElementById("cadastro_senha");
const ipt_confirma = document.getElementById("cadastro_confirma");
const buttonCadastrar = document.getElementById("button-cadastrar");
const resposta = document.getElementById("verify-msg")

let verifyNome;
let verifyUsername;
let verifyEmail;
let verifySenha;
let verifyConfirma;

ipt_nome.addEventListener("input",
    function () {
        const nome = ipt_nome.value;
        verifyNome = ((nome != '') && (nome.length <= 45) && (nome.length >= 4) && !(/[^(a-z0-9)\s]/iu.test(nome)))
        colorInputBorder(ipt_nome, nome, verifyNome);
        exibirMensagemErro(0, nome);
    });

ipt_username.addEventListener("input",
    function () {
        const username = ipt_username.value
        verifyUsername = ((username != '') && (username.length <= 15) && (username.length >= 5) && !(/[^(a-z0-9)(_\-.)]/iu.test(username)));
        colorInputBorder(ipt_username, username, verifyUsername);
        exibirMensagemErro(1, username);
    });

ipt_email.addEventListener("input",
    function () {
        const email = ipt_email.value
        verifyEmail = ((email != '') && (email.length <= 45) && !(/[^(a-z0-9)(@_\-.)]/iu.test(email)) && email.includes('.com') && email.includes('@'))
        colorInputBorder(ipt_email, email, verifyEmail);
        exibirMensagemErro(2, email);
    });

ipt_senha.addEventListener("input",
    function () {
        const senha = ipt_senha.value
        verifySenha = ((senha != '') && (senha.length <= 20) && (senha.length >= 8))
        colorInputBorder(ipt_senha, senha, verifySenha);
        exibirMensagemErro(3, senha);
    });

ipt_confirma.addEventListener("input",
    function () {
        const confirma = ipt_confirma.value;
        const senha = ipt_senha.value
        verifyConfirma = (confirma == senha)
        colorInputBorder(ipt_confirma, confirma, verifyConfirma);
        exibirMensagemErro(4, confirma);
    })

function colorInputBorder(ipt, value, verify) {
        if (value == '') {
            ipt.style.borderColor = '#a67c52';
        } else if (verify) {
            ipt.style.borderColor = 'green';
        } else {
            ipt.style.borderColor = 'red';
        };
        mudarButton();
}

function mudarButton() {
    if (verifyNome && verifyUsername && verifyEmail && verifySenha && verifyConfirma) {
        buttonCadastrar.setAttribute("onclick", "cadastrar()")
    } else {
        buttonCadastrar.setAttribute("onclick", "aviso()")
    }
}

function exibirMensagemErro(listIndex, value) {    
    const listErrorMsg = {
        verify: [verifyNome, verifyUsername, verifyEmail, verifySenha, verifyConfirma],
        mensagem: [
            "O nome deve ter entre 4 e 45 caracteres alfanuméricos",
            "Seu apelido deve ter entre 5 e 15 caracteres alfanuméricos minúsculos, nenhum espaço e pode incluir (_-.)",
            "O email deve ter entre 4 e 45 caracteres alfanuméricos, @ e (.com)",
            "A senha deve ter no mínimo 8 e no máximo 20 caracteres",
            "Senhas não correspondem"
        ]
    };

    resposta.innerHTML = '';

    for (let i = 0; i <= listIndex; i++) {
        if (!listErrorMsg.verify[i] && value != '') {
            resposta.innerHTML = listErrorMsg.mensagem[i];
        };
    };
}