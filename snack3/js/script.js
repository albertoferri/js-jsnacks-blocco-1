// Snack 3:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Solo se è dispari inseriscilo nell’array.
// Stampa a schermo il contenuto dell'array

// Crea un array vuoto.
const userArray = [];

// Chiedi per 6 volte all’utente di inserire un numero,


for (let i = 1; i <= 6; i++){
    // inserisco un prompt da ripetere 
    let userChoice = prompt("Inserisci un numero");

    // Solo se è dispari inseriscilo nell’array.
    if (userChoice % 2 !== 0){

        userArray.push(userChoice)

        console.log(userChoice)
    }

     
    // userArray.push( Number(prompt("Inserisci un numero")) );

}
console.log(userArray);