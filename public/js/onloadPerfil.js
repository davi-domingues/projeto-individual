document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.ID_USUARIO == undefined) {
        alert("Logue-se para acessar sua página de perfil");
        window.location = "../index.html"
    } else {
        const nome = document.getElementById('nomeSession');
        const email = document.getElementById('emailSession');
        const username = document.getElementById('usernameSession');
        const nomeBoasVindas = document.getElementById('nome_boasVindas');

        nome.innerHTML = sessionStorage.NOME_USUARIO;
        email.innerHTML = sessionStorage.EMAIL_USUARIO;
        username.innerHTML = sessionStorage.USERNAME_USUARIO;
        nomeBoasVindas.innerHTML = `Boas vindas ${sessionStorage.NOME_USUARIO}!`;
    }
})