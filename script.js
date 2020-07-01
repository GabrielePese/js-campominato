// Il computer deve generare 16 numeri casuali tra 1 e 100.
var numeriComputer = []
for (var i = 0; i < 4; i++) {
  var numero = numeroRandom(1, 100)
  numeriComputer.push(numero)

}
console.log(numeriComputer)


// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

var numeroUtente = parseInt(prompt("dammi numero 1-100"))

// L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

var i=0
while (i < numeriComputer.length && trovato = false) {
  var check = checkNumero (numeriComputer , numeroUtente)
   i++
}




function checkNumero (array, numeroInserito){
  var i= 0
  var trovato = false
  while (i < array.length && trovato = false) {
    if (array[i] == numeroInserito) {
    trovato = true
  }
   i++

  }
  return trovato
}

function numeroRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
