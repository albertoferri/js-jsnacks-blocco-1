// Snack 2:
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
let somma = 0;

for (let i = 1; i <= 10; i++){
    let userInput = Number(prompt("inserisci un numero."));

    somma += parseFloat(userInput);
    
}
console.log("La somma dei dieci numeri inseriti è: " + somma);