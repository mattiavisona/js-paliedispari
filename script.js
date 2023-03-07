

// PRIMA PARTE ESERCIZIO

/* Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
*/

// Chiedo all'utente di inserire una parola


let textWordElement = document.getElementById("Text-word");

let checkButtonElement = document.getElementById("check-button");

checkButtonElement.addEventListener("click", function(){

    // stabilisco una variabile sentinella per capire se la parola è palindroma o no

    let palindrome = true;


    let start = 0;

    let end = textWordElement.value.length - 1;

    // creo il ciclo che analizza ogni lettera della parola

    for (let  index= 0; index < textWordElement.value.length; index++) {;


// Controllo che il primo elemento sia uguale all'ultimo
        if (textWordElement.value[start] == textWordElement.value[end]) {

            

        } else {

            

            palindrome = false;
            
        }

        start++;
        end--;

        if (palindrome) {
            console.log("La parola è palindroma");

        } else {
            console.log("La parola non è palindroma");
        }
        
    }
})