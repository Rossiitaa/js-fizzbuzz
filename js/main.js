// creazione ciclo da 1 a 100 di consoleRow
for ( i = 1; i <= 100; i++); {

// creazione variabile
const consoleRow = document.querySelector('#console-to-html');

// settiamo le condizioni in cui se "i" è un moltiplicatore di 3 e/o 5 il console.log sarà diverso 
if ( i % 3 == 0 && i % 5 == 0) {
    // creiamo in un div vuoto una variabile
    const BoxFB = "FizzBuzz"
    const boxFizzBuzz = document.createElement('div');

// | aggiungiamo delle classi
    boxFizzBuzz.classList.add('col-3', 'box', 'rounded');

//# aggiungiamo il contenuto nel div
    boxFizzBuzz.innerHTML = BoxFB;

//° append
    consoleRow.append(boxFizzBuzz);

    console.log(BoxFB);

} else if (i % 3 == 0) {
    console.log("Fizz")

} else if (i % 5 == 0) {
    console.log('Buzz')

} else {
    console.log (i)
} 
}