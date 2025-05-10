const quoteText = document.getElementById('quote-text');
const quoteAutor = document.getElementById('quote-autor');

const quoteList = {
    frase: [
        "“A leitura é o caminho mais curto para o conhecimento”", 
        "“É preciso que a leitura seja um ato de amor”",
        "“Ler mudou, muda e continuará mudando o mundo”",
        "“A leitura é, provavelmente, uma outra maneira de estar em um lugar”",
        "“Não há problema que a leitura não possa solucionar”",

        
    ],
    autor: [
        "~ Aristóteles",
        "~ Paulo Freire",
        "~ Virginia Woolf ",
        "~ José Saramago",
        "~ Charles Bukowski "
    ]
};

setInterval(() => {
    const numSorteio = (Math.random()*4).toFixed();
    quoteText.innerHTML = quoteList.frase[numSorteio];
    quoteAutor.innerHTML = quoteList.autor[numSorteio]
},
5000)


