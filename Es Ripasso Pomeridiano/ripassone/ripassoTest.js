console.log("ripasso Test")


// FUNZIONI E CONDIZIONI

/*
  Scriviamo una funzione 
  che tramite un'argomento stringa
  che sarà un simbolo di operazione ( "+", "-", "/", "*")
  ritorni il risultato dell'operazione indicata sui due numeri input
*/

function calculate(operator,numA, numB){

    if (operator === '+'){
        return numA + numB
    } else if (operator === '-'){
        return numA - numB
    } else if (operator === '*'){
        return numA * numB
    } else if (operator === '/'){
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
      
    console.log(alfabeto);

    function findVowels(){
        const vowels = [];
        for (let i = 0; i < alfabeto.length; i++){
            const letter = alfabeto[i];
            if (letter === 'a' || letter ==='e' || letter === 'i' || 
                                    letter === 'o' || letter === 'u'){
                vowels.push(letter)
            }
        }
        return vowels
        
    }
    return findVowels();
    // ritorna un'array con le vocali
    // map non è una soluzione
    // non utilizzate i metodi array
}

const vowels = getVowels()
console.log(vowels);
// RICREIAMO IL METODO FILTER

// https://www.w3schools.com/jsref/jsref_filter.asp

function arrayFilter(inputArray, callback){
    // Studia e riproduci il metodo filter
    
}

const names = ["Marco", "Davide", "Alessia", "Domenico", "Olio"]

const filteredNames = arrayFilter(names, function(){
    // utilizzate vowels per ritornare solo i nomi che 
    // iniziano con una vocale
    // sosituite return true con la vostra implementazione
    return true
})