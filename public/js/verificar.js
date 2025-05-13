const ipt_nome = document.getElementById("cadastro_nome");
const ipt_username = document.getElementById("cadastro_username");
const ipt_email = document.getElementById("cadastro_email");
const ipt_senha = document.getElementById("cadastro_senha");
const ipt_confirma = document.getElementById("cadastro_confirma");

let verifyNome;
let verifyUsername;
let verifyEmail;
let verifySenha;
let verifyConfirma;

const buttonCadastrar = document.getElementById("button-cadastrar");

ipt_nome.addEventListener("input",
    function verificarNome() {
        const nome = ipt_nome.value;
        verifyNome = ((nome != '') && (nome.length < 46) && (nome.length > 4) && !(/[^(a-z0-9)\s]/iu.test(nome)))
        colorInputBorder(ipt_nome, nome, verifyNome);
    });

ipt_username.addEventListener("input",
    function () {
        const username = ipt_username.value
        verifyUsername = ((username != '') && (username.length < 16) && (username.length > 5) && !(/[^(a-z0-9)(_\-.)]/u.test(username)));
        colorInputBorder(ipt_username, username, verifyUsername);
    });

ipt_email.addEventListener("input",
    function () {
        const email = ipt_email.value
        verifyEmail = ((email != '') && (email.length < 46) && !(/[^(a-z0-9)(@_\-.)]/u.test(email)) && email.includes('.com') && email.includes('@'))
        colorInputBorder(ipt_email, email, verifyEmail);
    });

ipt_senha.addEventListener("input",
    function () {
        const senha = ipt_senha.value
        verifySenha = ((senha != '') && (senha.length < 21) && (senha.length > 8) && !(/[^(a-z0-9)(_\-.)]/u.test(senha)))
        colorInputBorder(ipt_senha, senha, verifySenha);
    });

ipt_confirma.addEventListener("input",
    function () {
        const confirma = ipt_confirma.value;
        const senha = ipt_senha.value
        verifyConfirma = (confirma == senha)
        colorInputBorder(ipt_confirma, confirma, verifyConfirma);
    })

function colorInputBorder(ipt, param, verify) {
        if (param == '') {
            ipt.style.borderColor = '#a67c52';
            mudarButton()
        } else if (verify) {
            ipt.style.borderColor = 'green';
            mudarButton()
        } else {
            ipt.style.borderColor = 'red';
            mudarButton()
        }
}

function mudarButton() {
    if (verifyNome && verifyUsername && verifyEmail && verifySenha && verifyConfirma) {
        buttonCadastrar.setAttribute("onclick", "cadastrar()")
    } else {
        buttonCadastrar.setAttribute("onclick", "aviso()")
    }
}
