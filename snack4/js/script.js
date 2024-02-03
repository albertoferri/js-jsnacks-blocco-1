// Snack 4:
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.


// Chiedi un numero di 4 cifre all’utente
let userNumber = Number( prompt("Inserisci un numero:"));

// Verifico che il numero sia valido
// e calcola la somma di tutte le cifre che compongono il numero.
if (!isNaN(userNumber)) {
    // Creo variabile settata a 0
    let sommaInt = 0;

    // si usa mettere il ";" quando non c'è bisogno di inizializzare il ciclo for 
    // dato che in questo caso avevamo inserito la variabile sopra (e quinddi fuori)
    for (; userNumber !== 0; userNumber = Math.floor(userNumber / 10)) {
        // aggiungo l'ultima cifra dell'userNumber alla variabile sommaInt
        sommaInt += userNumber % 10;
    }

    // stampo in pagina il risultato
    document.getElementById("numbers").innerHTML = "La somma delle cifre è: " + sommaInt;
} else {
    // messaggio di errore
    alert("Inserisci un numero valido.");
}

// ricarica la pagina al clic
function refreshPage() {
    location.reload();
}