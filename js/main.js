// creazione ciclo da 1 a 100
for (let i = 1; i <= 100; i++)

// settiamo le condizioni in cui se "i" è un moltiplicatore di 3 e/o 5 il console.log sarà diverso 
if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');

} else if (i % 3 == 0) {
    console.log("Fizz")

} else if (i % 5 == 0) {
    console.log('Buzz')

} else {
    console.log (i)
} 