// Snack 5:
// Stampa il cubo dei primi N numeri,
// (partendo da 1, il numero N indicato dall'utente è compreso)
// dove N è un numero indicato dall’utente.

// Chiedi all'utente di inserire un numero
const numberChoice = Number(prompt("Inserisci un numero:"));


// Verifico che il valore inserito sia un numero e che sia maggiore di zero
if (!isNaN(numberChoice) && numberChoice > 0) {
    // Calcola e stampa il cubo dei primi N numeri attribuiendo al valore la variabile i che andra ad aggiurnarsi per il numero di volte
    for (let i = 1; i <= numberChoice; i++) {

        // creo variabile per il cubo
        let cubo = i ** 3;
        // Stampa il cubo dei primi N numeri
        let string_attuale=document.getElementById("cube-result").innerHTML;
        
        document.getElementById("cube-result").innerHTML = string_attuale +  `<br>Il cubo di ${i} è: ${cubo}`;
        console.log(`Il cubo di ${i} è: ${cubo}`);
    }
} else {
    // messaggio di errore
    alert("Inserisci un numero valido e maggiore di zero.");
}
