let segundo = 0;
let minuto = 0;
let hora = 0;
let cronometro;
let sessao = false;

function iniciarSessao() {
    if (sessao == false) {
        cronometro = setInterval(() => { timer(); }, 1000)
        button_controle.setAttribute('onclick', 'pausarSessao()');
        button_controle.innerHTML = '&#9208;';
        sessao = true;
    };
};

function pausarSessao() {
    clearInterval(cronometro);
    button_controle.setAttribute('onclick', 'iniciarSessao()');
    button_controle.innerHTML = '&#11208;';
    sessao = false
};

function timer() {
    segundo++;

    if (segundo == 60) {
        minuto++;
        segundo = 0;
    };

    if (minuto == 60) {
        hora++;
        minuto = 0;
    };

    printarCronometro();
};

function reiniciarSessao() {
    segundo = 0;
    minuto = 0;
    hora = 0;

    printarCronometro();
}

function printarCronometro() {
    cronometro_segundos.innerHTML = numFormatar(segundo);
    cronometro_minutos.innerHTML = numFormatar(minuto);
    cronometro_horas.innerHTML = numFormatar(hora);
}

function numFormatar(num) {
    return num >= 10 ? num : `0${num}`;
};