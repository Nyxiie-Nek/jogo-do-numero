
const palpite = document.querySelector('.palpite');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');



function verificarPalpite () {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anterioes: ";
    }

    palpites.textContent += palpiteUsuario + " ";

    if (palpiteUsuario === numeroAleratorio)
        ultimoResultado.textContent = "Acertô mizeravi!!!";

}