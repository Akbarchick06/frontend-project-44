import readlineSync from "readline-sync";

const gcd = (a, b) => {
    while (b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const gameNOD = (userName) => {
 
    let i = 0;
    while (i < 3) {
        const num1 = Math.floor(Math.random() * 6) + 1;
        const num2 = Math.floor(Math.random() * 6) + 1;
        const correctAnswer = gcd(num1, num2);
        console.log(`Find the greatest common divisor of ${num1} and ${num2}:`);
        const userInput = parseInt(readlineSync.question(`Your choice: `), 10);

        if (userInput === correctAnswer) {
            console.log(`Correct!`);
            i++;
        } else {
            return `Incorrect. The correct answer was ${correctAnswer}.`;
        }
    }
    if (i === 3)
    return `Congratulations, ${userName}!`;
};
export default gameNOD;        