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
// stampo in pagina la somma
document.getElementById("result").innerHTML = "Questa è la somma dei primi dieci numeri: " + somma;
console.log(somma)