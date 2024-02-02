// Snack 5:
// Stampa il cubo dei primi N numeri,
// (partendo da 1, il numero N indicato dall'utente è compreso)
// dove N è un numero indicato dall’utente.

// Chiedi all'utente di inserire un numero
const numberChoice = Number(prompt("Inserisci un numero:"));

// Calcola e stampa il cubo dei primi N numeri attribuiendo al valore la variabile i che andra ad aggiurnarsi per il numero di volte
for (let i = 1; i <= numberChoice; i++) {
    // Stampa il cubo dei primi N numeri
    let cubo = i ** 3;
    console.log(`Il cubo di ${i} è: ${cubo}`);
}

