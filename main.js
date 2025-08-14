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
        
