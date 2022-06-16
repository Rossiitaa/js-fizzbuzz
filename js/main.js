// creazione ciclo da 1 a 100 di consoleRow
for ( let i = 1; i <= 100; i++) {

// creazione variabile
const consoleRow = document.querySelector('#console-to-html');

// settiamo le condizioni in cui se "i" è un moltiplicatore di 3 e/o 5 il console.log sarà diverso 
if ( i % 3 == 0 && i % 5 == 0) {

    // creiamo in un div vuoto una variabile
    const BoxFB = "FizzBuzz"
    const boxFizzBuzz = document.createElement('div');
// | aggiungiamo delle classi
    
//# aggiungiamo il contenuto nel div
    boxFizzBuzz.innerHTML = BoxFB;
//° append
    consoleRow.append(boxFizzBuzz);
    console.log(BoxFB);

} else if (i % 3 == 0) {

    const fizz = "Fizz";
    const fizzBox = document.createElement("div");
    
    fizzBox.innerHTML = fizz;
    consoleRow.append(fizzBox);
    console.log(fizz);

} else if (i % 5 == 0) {

    const buzz = "Buzz";
    const buzzBox = document.createElement("div");
    
    buzzBox.innerHTML = buzz;
    consoleRow.append(buzzBox);
    console.log(buzz);

} else {

    const box = document.createElement("div");
    
    box.innerHTML = i;
    consoleRow.append(box);
    console.log(i);
    
} 
}