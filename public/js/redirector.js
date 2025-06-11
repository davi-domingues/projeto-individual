const homeLink = document.getElementById('homeLink');
const diarioLink = document.getElementById('diarioLink');
const dashboardLink = document.getElementById('dashboardLink');
const forumLink = document.getElementById('forumLink');
const relogioLink = document.getElementById('relogioLink');
const sugestoesLink = document.getElementById('sugestoesLink');
const sairLink = document.getElementById('sairLink');

homeLink.addEventListener("click", () => { window.location = "./index.html" });
diarioLink.addEventListener("click", () => { window.location = "./diario.html" });
dashboardLink.addEventListener("click", () => { window.location = "./dashboard.html" });
forumLink.addEventListener("click", () => { window.location = "./forum.html" });
relogioLink.addEventListener("click", () => { window.location = "./sessao.html" });
sugestoesLink.addEventListener("click", () => { window.location = "./sugestoes.html" });
sairLink.addEventListener("click", () => { sessionStorage.clear(); window.location = "../index.html" });