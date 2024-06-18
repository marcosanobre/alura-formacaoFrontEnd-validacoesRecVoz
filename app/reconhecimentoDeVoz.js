
const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// var speechRecognitionList = new SpeechGrammarList();
var recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener( 'result', onSpeak);

function onSpeak( e ) {
    const chute = e.results[0][0].transcript;
    exibeChuteNaTela( chute );
    verrificaSeOChutePossuiUmValorValido( chute );
};

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `;
};

recognition.addEventListener('end', () => recognition.start() );