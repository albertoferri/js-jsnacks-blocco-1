// Snack 6:
// Calcola la somma e la media dei primi 10 numeri.

// creo un array con i primi 10 numeri
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers)

// Calcolo la somma
let somma = 0;
for (let i = 0; i < numbers.length; i++) {
    somma += numbers[i];
}

// stampo in pagina l'array
document.getElementById("array").innerHTML = "Questo è l'array dei numeri scelti: " + numbers;


// stampo in pagina la somma
document.getElementById("somma").innerHTML = "Questa è la somma dei primi dieci numeri: " + somma;

// Calcola la media
let media = somma / numbers.length;

// stampo in pagina la media
document.getElementById("media").innerHTML = "Questa è la media dei primi dieci numeri: " + media;