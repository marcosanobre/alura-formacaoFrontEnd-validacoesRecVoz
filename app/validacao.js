
function chuteForInvalido( numero ) {
    return Number.isNaN(numero);
};

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
};

function verrificaSeOChutePossuiUmValorValido( chute ) {
    const numero = +chute; // Tenta Converter o Chute para Número

    if( chuteForInvalido(numero) ) {
        if ( chute.toUpperCase() === 'GAME OVER' ) {
            document.body.innerHTML = `
            <h2>GAME OVER !!!</h2>
            <h3>Pressione o botão para jogar novamente.</h3>
            <button id="btnJogarNovamente" class="btn-jogar">Jogar Novamente</button>
            `;
            document.body.style.background = 'black';            
        } else {
            elementoChute.innerHTML += '<div>Valor inválido !!!</div>';            
        }
        return;
    };

    if ( numeroForMaiorOuMenorQueOValorPermitido(numero) ) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um Número entre ${menorValor} e ${maiorValor}.</div>`;
        return;
    };

    if ( numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou. Parabéns !!!</h2>
            <h3>O Número Secreto era ${numeroSecreto}.</h3>
            <button id="btnJogarNovamente" class="btn-jogar">Jogar Novamente</button>
        `;
    } else if ( numero > numeroSecreto ) {
        elementoChute.innerHTML += `
        <div>Tente novamente - O Número Secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
        <div>Tente novamente - O Número Secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `;
    };    
};

document.body.addEventListener( 'click', e => {
    if ( e.target.id == 'btnJogarNovamente') {
        window.location.reload();
    };
});


