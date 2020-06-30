// Il computer deve generare 16 numeri casuali tra 1 e 100.
var numeriComputer = []
for (var i = 0; i < 4; i++) {
  var numero = numeroRandom(1, 100)
  numeriComputer.push(numero)

}
console.log(numeriComputer)

function numeroRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

var numeroUtente = parseInt(prompt("dammi un numero da 1 a 100"));
console.log(numeroUtente);
// L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.


for (var i = 0; i < numeriComputer.length; i++) {
  var check = checkNumero (numeroUtente, numeriComputer[i])

}



function checkNumero (numero, array){
  for (var i = 0; i < numeriComputer.length; i++) {
    if (numeroUtente == numeriComputer[i]) {
    return true;
  } else {
    return false;
  }
}
}
console.log(check);


// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
