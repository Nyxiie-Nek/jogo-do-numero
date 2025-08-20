// A primeira letra de "Math" deve ser maiúscula
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Renomeei a variável para "palpites" para corresponder ao uso no código
const palpites = document.querySelector('.palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');

const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');

let contagemPalpites = 1;
let botaoReiniciar;

function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        // Corrigido para "palpites" (no plural)
        palpites.textContent = "Palpites anteriores: ";
    }

    palpites.textContent += palpiteUsuario + " ";

    // -- INÍCIO DA CORREÇÃO LÓGICA PRINCIPAL --
    // Adicionei as chaves {} para que todo o bloco seja executado
    if (palpiteUsuario === numeroAleatorio) { // Corrigido o nome da variável
        ultimoResultado.textContent = "Acertô mizeravi >:3";
        ultimoResultado.style.backgroundColor = "green";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    } else if (contagemPalpites === 10) { // Corrigido "conatgemPalpites"
        // Corrigido "textContext" para "textContent"
        ultimoResultado.textContent = "Não foi dessa vez >~<";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    } else {
        ultimoResultado.textContent = "Errado";
        ultimoResultado.style.backgroundColor = "red";
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = "O seu palpite foi muito baixo";
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = "O seu palpite foi muito alto";
        }
    }
    // -- FIM DA CORREÇÃO LÓGICA --

    contagemPalpites++;
    campoPalpite.value = "";
    campoPalpite.focus();
}

envioPalpite.addEventListener('click', verificarPalpite);

function finalizarJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReiniciar = document.createElement('button'); // Corrigido nome da variável
    botaoReiniciar.textContent = 'Jogar de novo'; // Corrigido nome da variável
    botaoReiniciar.classList.add('botaoReiniciar'); // Corrigido nome da variável
    document.body.appendChild(botaoReiniciar); // Corrigido nome da variável
    botaoReiniciar.addEventListener('click', reiniciarJogo); // Corrigido nome da variável
}

function reiniciarJogo() {
    contagemPalpites = 1;
    // Corrigido o seletor para usar "." para classe
    const paragrafosReiniciar = document.querySelectorAll('.paragrafosResultados p');
    for (const paragrafoReiniciar of paragrafosReiniciar) {
        paragrafoReiniciar.textContent = "";
    }

    botaoReiniciar.parentNode.removeChild(botaoReiniciar);
    campoPalpite.disabled = false;
    envioPalpite.disabled = false; // Adicionado para reativar o botão de envio
    campoPalpite.value = "";
    campoPalpite.focus();
    // Corrigido "withe" para "white"
    ultimoResultado.style.backgroundColor = 'white';
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}