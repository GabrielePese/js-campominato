// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



 console.log("INIZIO");
// Il computer deve generare 16 numeri casuali tra 1 e 100
// I numeri non possono essere duplicati

// var arrayBombe = [1,3,10,20,50];
var arrayUtente =   []
var arrayBombe = []
var maxBombe = 16;

// Devo generare 16 numeri ma non devono essere doppioni

 while (arrayBombe.length < maxBombe){
   var bomba = numeroRandom (1,30)
   if (inArray (arrayBombe, bomba) !=true) {
     arrayBombe.push(bomba)
   }


 }

console.log(arrayBombe);
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.

//l'utente inserisci numeri fino al max consentito o fino a quando non inserisce una bomba.
var maxTentativi = 5;
var punti = 0
var i = 0;
var trovato = false
while (i < maxTentativi && trovato == false) {
 var numero = parseInt(prompt("dammi numero 1-100"));
 arrayUtente.push(numero)

 if (inArray(arrayUtente, numero) ==false) {
    arrayUtente.push(numero);
 }

 if (inArray(arrayBombe, numero) ) {
   // Se il numero è presente nella lista dei numeri generati, la partita termina,

   trovato = true
 }else {
   punti++
 }
  // altrimenti si continua chiedendo all’utente un altro numero.
  // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
  // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

i++
}
console.log("Hai totalizzzato " + punti + " punti");
console.log("Hai trovato la bomba. Sei esploso! MAHUAHAMUAHU Bastardo!!");

function inArray (array, elemento){
  var i = 0;
  var trovato = false

  //questo ciclo si deve interrompere se arrivvo lunghezza array o se trovo bomba!!
  while (i < array.length && trovato == false) {
    if (array[i] == elemento) {

      trovato = true
    }
    i++
  }
  return trovato;

}

function numeroRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
