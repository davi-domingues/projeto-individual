const infoTitle = document.getElementById('infoTitle');
const infoText = document.getElementById('infoText');
const infoBack = document.getElementById('infoback');
const infoAhead = document.getElementById('infoahead');
var cardAtual = 0;

const infoList = {
    titulo: [
        "Pequenas leituras, grandes transformações.", 
        "Estimula o cérebro 🧠",
        "Expande o vocabulário 💬",
        "Reduz o estresse 🧘",
        "Aumenta o conhecimento 🌍",
        "Melhora a concentração 🎯",
        "Desenvolve empatia 🌱"        
    ],
    texto: [
        "Conheça os benefícios de colocar a leitura no seu dia a dia -> ",
        "A leitura fortalece o foco, a concentração e melhora a memória. É um treino diário para sua mente.",
        "Quanto mais você lê, mais palavras novas conhece. Isso melhora a comunicação e a escrita.",
        "Mergulhar em um bom livro é uma forma eficaz de relaxar e esquecer das pressões do dia a dia.",
        "Cada leitura traz algo novo: fatos, ideias, culturas, histórias. É um aprendizado constante.",
        "Ler exige foco, e essa prática constante ajuda em outras áreas da vida também.",
        "Ao entrar na mente de personagens e histórias, você exercita o olhar sobre o outro."
    ]
};

infoAhead.addEventListener("click", function mudar() {
    if (cardAtual == infoList.titulo.length - 1) {
        cardAtual = 0;
    } else {
        cardAtual ++;
    };

    infoTitle.innerHTML = infoList.titulo[cardAtual];
    infoText.innerHTML = infoList.texto[cardAtual];
});

infoBack.addEventListener("click", function mudar() {
    if (cardAtual == 0) {
        cardAtual = infoList.titulo.length - 1;
    } else {
        cardAtual --;
    };

    infoTitle.innerHTML = infoList.titulo[cardAtual];
    infoText.innerHTML = infoList.texto[cardAtual];
});



