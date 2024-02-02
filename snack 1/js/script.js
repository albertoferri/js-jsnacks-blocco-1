// Snack 1:
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// L’utente inserisce due parole in successione, con due prompt.
const firstWord = prompt("Inserisci la prima parola");
console.log(firstWord.length)

const secondWord = prompt("Inserisci la seconda parola");
console.log(secondWord.length)

// stampo in pagina le due parole inserite
document.getElementById("1st-span").innerHTML = firstWord;
document.getElementById("2nd-span").innerHTML = secondWord;




console.log(firstWord, secondWord);