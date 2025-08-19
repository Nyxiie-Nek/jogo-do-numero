let numeroAleatorio = math.floor(Math.random() *100) + 1;
const palpite = document.querySelector('.palpite');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');
let contagemPalpites = 1;
let botaoReinicar;

function verificarPalpite () {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anterioes: ";
    }

    palpites.textContent += palpiteUsuario + " ";

    if (palpiteUsuario === numeroAleratorio)
        ultimoResultado.textContent = "Acertô mizeravi >:3";
        ultimoResultado.style.backgroundColor = "green";
    baixoOuAlto.textContent = "";
    finalizarJogo();
}    else if (conatgemPalpites === 10) {
    ultimoResultado.textContext = "Não foi dessa vez >~<";
    baixoOuAlto.textcontent = "";
    finalizarJogo();
} else {
    ultimoResultado.textContent = "Errado";
    ultimoResultado.style.backgroundColor = "red";
    if (palpiteUsuario < numeroAleatorio) {
        baixoOuAlto.textContent = "O seu número é menor";
    } else if (palpiteUsuario > numeroAleatorio) {
        baixoOuAlto.textContent = "O seu número é maior";
    }
}
        
contagemPalpites++;
campoPalpite.value = "";
campoPalpite.focus();
}

envioPalpite.addEventListener('click', verificarPalpite);

function finalizarJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReiliciar = document.createElement('button');
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.textContent = 'Jogar de novo';
    botaoReiniciar.classList.add('botaoReiniciar');
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
    contagemPalpites = 1;
    const paragrafosReiniciar = document.querySelectorAll('paragrafosResultado p');
    for (const paragrafoReiniciar of paragrafosReiniciar) {
        paragrafoReiniciar.textContent = "";
}

    botaoReiniciar.parentNode.removeChild(botaoReiniciar);
    campoPalpite.disabled = false;
    campoPalpite.value = "";
    campoPalpite.focus();
    ultimoResultado.style.backgroundColor = 'withe';
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

