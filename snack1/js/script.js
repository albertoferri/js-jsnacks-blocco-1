// Snack 1:
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// L’utente inserisce due parole in successione, con due prompt.
const firstWord = prompt("Inserisci la prima parola");
const secondWord = prompt("Inserisci la seconda parola");

// Il software stampa prima la parola più corta, poi la parola più lunga.
// aggiungo controllo della lugnghezza dei caratteri
if (firstWord.length < secondWord.length){
    document.getElementById("1st-span").innerHTML = firstWord;
} else {
    document.getElementById("1st-span").innerHTML = secondWord;
}
if (firstWord.length > secondWord.length){
    document.getElementById("2nd-span").innerHTML = firstWord;
} else {
    document.getElementById("2nd-span").innerHTML = secondWord;
}
if (firstWord.length == secondWord.length){
    document.getElementById("1st-span").innerHTML = firstWord;
} else {
    document.getElementById("2nd-span").innerHTML = secondWord;
}