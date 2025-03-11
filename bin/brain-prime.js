import readlineSync from "readline-sync";

console.log('Welcome to the Brain Games!')
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const gamePrimeNumbers = () => {
    const userName = readlineSync.question("Your name: ")
      console.log(`Hello, ${userName}`)
    console.log('Answer "Yes" if the given number is prime. Otherwise, answer "No".');
    let i = 0;
    while (i < 3) {
        const num = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${num}`);
        const correctAnswer = isPrime(num) ? "Yes" : "No";
        const userInput = readlineSync.question('"Yes" or "No"? :');

        if (userInput === correctAnswer) {
            console.log('Correct!');
            i++;
        } else {
            return `'${userInput}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
        }
    }
    return `Congratulations, ${userName}!`;
};
console.log(gamePrimeNumbers())
export default gamePrimeNumbers;