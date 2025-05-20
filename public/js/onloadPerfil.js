const nome = document.getElementById('nomeSession');
const email = document.getElementById('emailSession');
const username = document.getElementById('usernameSession');

window.onload = function testSession() {
    if (sessionStorage.length < 2) {
        alert("Logue-se para acessar sua página de perfil");
        window.location = "../index.html"
    } else {
        nome.innerHTML = sessionStorage.NOME_USUARIO;
        email.innerHTML = sessionStorage.EMAIL_USUARIO;
        username.innerHTML = sessionStorage.USERNAME_USUARIO;
    }
}