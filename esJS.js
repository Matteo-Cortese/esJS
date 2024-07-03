// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
/*
let n = parseInt(prompt("inserisci la base"));
let n1 = parseInt(prompt("inserisci l'altezza"));
console.log("Il perimetro è: " + (n*2 + n1*2));
*/
/*
const r= 3.14;
let n = parseInt(prompt("inserisci raggio del cerchio: "));
console.log("L'area del cerchio è: " + (n * n * r));
*/
/*
let a = parseInt(prompt("inserisci il primo numero: "));
let b = parseInt(prompt("inserisci il secondo numero: "));
console.log("Il risultato della divisione è: " + (a/b) + " Mentre il modulo della divisione è: " + (a%b));
*/
/*Scrivere un programma OreInMinuti che chiede all’utente di inserire un numero frazionario
che rappresenta un tempo espresso in ore (ad esempio 3.5 per 3 ore e mezzo) e stampa il corrispondente
tempo espresso in minuti (ad esempio 210).*/
//orario
/*
let a = parseFloat(prompt("inserisci un numero frazionario per sapere a quanti minuti corrisponde: "));
minuti = parseInt(a*60);
console.log("Il risutato è: " + minuti);*/
//boolean accorciato
/*
let num1 = parseInt(prompt("Scrivi un numero: "));
let isPari = num1 % 2 == 0;
let isPiccolo = num1 > 0 && num1 < 100;

if (isPari && isPiccolo){
    console.log("è pari e piccolo");
}
else console.log("no");*/
/*Scrivere un programma Giudizio che chiede all’utente di inserire un numero intero che
rappresenta il voto ricevuto ad un esame universitario (in trentesimi, senza la lode) e si comporta come
segue:
• Se il numero `e minore di 0 o maggiore di 30 visualizza il messaggio "Numero errato"
• Se il numero `e minore `e compreso tra 0 e 17 visualizza il messaggio "Esame non superato"
• Se il numero `e minore `e compreso tra 18 e 24 visualizza il messaggio "Giudizio: sufficiente"
• Se il numero `e minore `e compreso tra 25 e 30 visualizza il messaggio "Giudizio: buono"
Successivamente, se il giudizio `e sufficiente oppure buono il programma chiede all’utente se voglia registrare il voto. L’utente pu`o rispondere inserendo 0 per non registrare, oppure con 1 per registrare. Nel
primo caso il programma visualizza il messagio Voto rifiutato, nel secondo caso invece visualizza il
messaggio Voto accettato.*/
/*
let voto = parseInt(prompt("Inserisci il voto che hai preso: "));
 
let votoErrato = voto < 0 || voto > 30;
let votoInsuff = voto >= 0 && voto <= 17;
let votoSuff = voto >= 18 && voto <= 24;
let votoBuono =voto >= 25 && voto <= 30;
 
if (votoErrato){
    console.log("Voto errato");
} else if (votoInsuff) {
    console.log("Esame non superato");
} else if (votoSuff){
    console.log("Giudizio sufficiente");
} else if (votoBuono){
    console.log("Giudizio buono");
}
 
if (votoSuff || votoBuono){
    let reg = parseInt(prompt("Vuoi registrare il voto? (0 = NO; 1 = SI) "));
    if (reg == 0){
        console.log("Voto rifiutato");
    } else if (reg == 1){
        console.log("Voto accettato");
    } else console.log("Risposta non corretta");
}*/
//mesi dell'anno con lo switch
/*
let month = prompt("Scrivi in numero un mese dell'anno: ");
 
switch(month){
case '1':
console.log("Gennaio");
break;
case '2':
console.log("Febbraio");
break;
case '3':
console.log("Marzo");
break;
case '4':
console.log("Aprile");
break;
case '5':
console.log("Maggio");
break;
case '6':
console.log("Giugno");
break;
case '7':
console.log("Luglio");
break;
case '8':
console.log("Agosto");
break;
case '9':
console.log("Settembre");
break;
case '10':
console.log("Ottobre");
break;
case '11':
console.log("Novembre");
break;
case '12':
console.log("Dicembre");
break;
default:
console.log("Numero non valido");
 
}*/