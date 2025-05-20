const homeLink = document.getElementById('homeLink');
const diarioLink = document.getElementById('diarioLink');
const dashboardLink = document.getElementById('dashboardLink');
const calculadoraLink = document.getElementById('calculadoraLink');
const relogioLink = document.getElementById('relogioLink');
const configLink = document.getElementById('configLink');
const sairLink = document.getElementById('sairLink');
const diarioCard = document.getElementById('diarioCard');
const dashboardCard = document.getElementById('dashboardCard');
const calculadoraCard = document.getElementById('calculadoraCard');
const relogioCard = document.getElementById('relogioCard');

homeLink.addEventListener("click", () => { window.location = "./home.html" });
diarioLink.addEventListener("click", () => { window.location = "./diario.html" });
dashboardLink.addEventListener("click", () => { window.location = "./dashboard.html" });
calculadoraLink.addEventListener("click", () => { window.location = "./calculadora.html" });
relogioLink.addEventListener("click", () => { window.location = "./sessao.html" });
configLink.addEventListener("click", () => { window.location = "./config.html" });
sairLink.addEventListener("click", () => { sessionStorage.clear(); window.location = "../index.html" });
diarioCard.addEventListener("click", () => { window.location = "./diario.html" });
dashboardCard.addEventListener("click", () => { window.location = "./dashboard.html" });
calculadoraCard.addEventListener("click", () => { window.location = "./calculadora.html" });
relogioCard.addEventListener("click", () => { window.location = "./sessao.html" });

// window.onload = function testSession() {
//     if (sessionStorage.length < 2) {
//         alert("Logue-se para acessar sua página de perfil");
//         window.location = "../index.html"
//     }
// }