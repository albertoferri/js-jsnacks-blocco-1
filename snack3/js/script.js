// Snack 3:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Solo se è dispari inseriscilo nell’array.
// Stampa a schermo il contenuto dell'array

// Crea un array vuoto.
let userArray = [];
console.log(userArray);

// Chiedi per 6 volte all’utente di inserire un numero,
for (let i = 0; i < 6; i++){
    // inserisco un prompt da ripetere e lo strasformo subito in numero
    let userChoice = Number( prompt("Inserisci un numero"));

    // verifico se il numero è dispari
    // Solo se è dispari inseriscilo nell’array.
    if (userChoice % 2 !== 0) {
        userArray.push(userChoice);
    }
}

// Stampa a schermo il contenuto dell'array
document.getElementById("oddArray").innerHTML = `Numeri dispari inseriti: ${userArray}`;