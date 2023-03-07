

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

    // creo il ciclo che analizza ogni lettera della parola

    for (let  index= 0; index < textWordElement.value.length; index++) {;
        

        console.log(textWordElement.value[index]);


// Controllo che il primo elemento sia uguale all'ultimo
        if (textWordElement.value[0] == textWordElement.value[textWordElement.value-length - 1]) {

            
        } else {

            palindrome = false;

        
        }
    }
})