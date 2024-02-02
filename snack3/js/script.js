// Snack 3:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Solo se è dispari inseriscilo nell’array.
// Stampa a schermo il contenuto dell'array

// Crea un array vuoto.
const userArray = [];


for (let i = 1; i <= 6; i++){
    // inserisco un prompt da ripetere 
    userArray.push(prompt("Inserisci un numero"));

}
console.log(userArray);