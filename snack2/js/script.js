// Snack 2:
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// imposto variabile somma a 0
let somma = 0;

// utilizzo un ciclo for per chiedere 10 volte all'utente di mettere un numero
for (let i = 1; i <= 10; i++){
    // prompt utente
    let userInput = Number(prompt("Inserisci un numero"));
    
    // Converto l'input dell'utente in un numero e lo aggiunge alla somma
    somma += parseFloat(userInput);
    console.log(userInput)
}

// stampo in pagina il risultato
document.getElementById("somma").innerHTML = "La somma dei dieci numeri inseriti è: " + somma;