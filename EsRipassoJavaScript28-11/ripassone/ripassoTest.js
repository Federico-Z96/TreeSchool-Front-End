console.log("ripasso Test")


// FUNZIONI E CONDIZIONI

/*
  Scriviamo una funzione 
  che tramite un'argomento stringa
  che sarà un simbolo di operazione ( "+", "-", "/", "*")
  ritorni il risultato dell'operazione indicata sui due numeri input
*/

function calculate(operator,numA, numB){
    // se operator è uguale a '+'
    // ritorno il risultato di numA + numB
    if(operator === "+"){
        return numA + numB
    }

    // se operator è uguale a '-'
    // ritorno il risultato di numA - numB
    if(operator === "-"){
        return numA - numB
    }

    // se operator è uguale a '*'
    // ritorno il risultato di numA * numB
    if(operator === "*"){
        return numA * numB
    }

    // se operator è uguale a '/'
    // ritorno il risultato di numA /numB
    if(operator === "/"){
        return numA / numB
    }
}

console.log("calculate -> ",calculate('+',1,2)) // -> 3


// ************************ **************************** //

// CICLI

function getVowels(){
    const alfabeto = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
      ]

    const vowels = ['a','e','i', 'o', 'u'];
    const outputVowels = []  
    for(let i = 0; i < alfabeto.length; i++){
        if(vowels.includes(alfabeto[i])){
            outputVowels.push(alfabeto[i])
        }
    }
      
    //console.log(alfabeto);
    // ritorna un'array con le vocali
    // map non è una soluzione
    // non utilizzate i metodi array
    return outputVowels
}

const vowels = getVowels()
console.log("vowels", vowels)
// RICREIAMO IL METODO FILTER

// https://www.w3schools.com/jsref/jsref_filter.asp

function arrayFilter(inputArray, callback){
    // Studia e riproduci il metodo filter
    const newArray = [];

    for( let i = 0; i < inputArray.length; i++){

        const isTrue = callback(
            inputArray[i],
            i,
            inputArray
        )
        if(isTrue === true){
            newArray.push(inputArray[i]);
        }
    }
    return newArray;
}

const names = ["Marco", "Davide", "Alessia", "Domenico", "Olio"]

const filteredNames = arrayFilter(names, function(name){
    // utilizzate vowels per ritornare solo i nomi che 
    // iniziano con una vocale
    // sosituite return true con la vostra implementazione
    const vowels = ['a','e','i', 'o', 'u'];
    /*
    if(vowels.includes(name[0].toLowerCase())){
        return true
    }
    return false
    */
   for (let k = 0; k < vowels.length;  k++){
        const vowel = vowels[k] // a,e, i, o, u
        const letter = name[0].toLowerCase()
        if(vowel === letter){
            return true
        }
   }
   return false
})

console.log("filteredNames -> ", filteredNames)

// ****** ANCORA ESERCIZI ***** //

// ****** QUANTE VOCALI E QUANTE CONSONANTI ********* // 

/*
 Partendo da una parola di input ritorniamo un'oggetto che ci dica quante
 consonanti e quante vocali ci sono all'interno della parola
 esempio: getVowelsAndConsonantsCounts("Consonante") -> { vowels: 4, consonants: 5 }
*/

function getVowelsAndConsonantsCounts(myWord){
    const vowels = ['a','e','i', 'o', 'u'];
    let counts = {
        vowels: 0,
        consonants: 0
    }
    for(let i = 0; i < myWord.length; i++){
        const char = myWord[i].toLowerCase();
        
        if(vowels.includes(char)){
            counts.vowels++;
        } else {
            counts.consonants++;
        }
    }
    
    return counts;
    // completate la funzione qui

    return counts
}

document.getElementById("countButton").addEventListener("click", function() {
    const word = document.getElementById("wordInput").value;
    const counts = getVowelsAndConsonantsCounts(word);
    console.log("Vocali: " + counts.vowels);
    console.log("Consonanti: " + counts.consonants);
});

// console.log(getVowelsAndConsonantsCounts("Consonante"))

// ****** NUMERI MINORE E MAGGIORE ******* // 

/*
    dato un array di numeri input ritorniamo un'oggetto 
    che riporti il numero più grande e il numero più piccolo
    esempio: getLowestAndHighestNumber([10,7,3,5,9,28]) -> { lowest: 3, highest: 28 }
*/ 

function getLowestAndHighestNumber(numbersArray){
    let result = {
        lowest: 0,
        highest: 0
    }
    
    if (numbersArray.length === 0) {
        return null;
      }
      
      const lowest = Math.min(...numbersArray);
      const highest = Math.max(...numbersArray);
    
      return { lowest, highest };
        
    // compilate la funzione :) 
    //return result;
}

console.log(getLowestAndHighestNumber([10,7,3,5,9,28]))

// ******* LA PAROLA PALINDROMA ****** //

// altro grande classico immancabile dei colloqui!
// completiamo la funzione che a partire da una stringa
// ci dice se il suo inverso è identico
// esempio: "otto" è una parola che seppur invertita risulta identica

function isPalindrome(myString){

    if(myString === myString.split("").reverse().join("")){
        return true + " la parola '" + myString + "' è polindroma"
    }else{
        return false + " la parola '" + myString + "' NON è polindroma"
    }
    // la funzione dovrà tornare vero se l'inversione della stringa
    // risulta in una parola identica, altrimenti false
}

 console.log(isPalindrome("otto"))
 console.log(isPalindrome("sette"))

// ***** MAP ****** //


/**
 * utilizziamo map di javascript per trasformare un'array iniziale di numeri
 * in un'array in cui ogni numero è moltiplicato per 3
 * ripassiamo il concetto e raggiungiamo la soluzione
 * esempio: doubleNumbers([10, 20, 25]) -> [20, 40, 50]
 */

function doubleNumbers(inputArray){


    // completate ed attivate la riga sottostante
    return inputArray.map(function(element){
        if(element === 0){
            return element
        }else if(element > 0 && element < 100){
            return element * 3
        }else {
            return element
        }
        
    })
}

 console.log(doubleNumbers([0,10, 20,100, 25]))

// ****** FILTER ******* // 

/**
 * un pò di pepe per l'ultimo esercizio!
 * Utilizziamo filter per ottenere un nuovo array con le stringhe 
 * che rispettino i limiti di carattere ( limite inclusivo quindi essere anche pari al limite è valido ). 
 * Esempio: filterWordsByMinAndMaxLength(["Ciao", "questo", "non", "mi", "piace"],2, 5) -> ["Ciao", "non", "mi", "piace"]
 */

function filterWordsByMinAndMaxLength(myStringsArray, minLength, maxLength) {

    return myStringsArray.filter(function(str) {
        return str.length >= minLength && str.length <= maxLength
    });
  }

 console.log(filterWordsByMinAndMaxLength(["Ciao", "questo", "non", "mi", "piace"],2, 5))