window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// var speechRecognitionList = new SpeechGrammarList();
var recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener( 'result', onSpeak)

function onSpeak( e ) {
    console.log( e.results[0][0].transcript );
}
