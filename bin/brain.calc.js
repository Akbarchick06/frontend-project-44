import readlineSync from "readline-sync";

console.log('Welcome to the Brain Games!')
const getRandomOper = () => {
  const userName = readlineSync.question("Your name: ")
    console.log(`Hello, ${userName}`)
  console.log("What is the result of the expression?")
  let i = 0;
  while (i < 3) {
    const num1 = Math.floor(Math.random() * 10);  
    const num2 = Math.floor(Math.random() * 10);  
    const operationsArray = ['+', '-', '*'];
    const randomOperationIndex = Math.floor(Math.random() * operationsArray.length);
    const selectedOperation = operationsArray[randomOperationIndex];
    const expression = `${num1} ${selectedOperation} ${num2}`;

    let correctAnswer;
    switch (selectedOperation) { 
      case '+': correctAnswer = num1 + num2; break;
      case '-': correctAnswer = num1 - num2; break;
      case '*': correctAnswer = num1 * num2; break;
      default: correctAnswer = null;
    }

    console.log(`Question: ${expression}`);
    const userResponse = parseInt(readlineSync.question(`Your choice: `), 10);

    if (userResponse === correctAnswer) {
      console.log(`Correct! ${userName}`);
      i++; 
    } else {
      return `No correct! ${userName}. Correct answer was ${correctAnswer}`;
    }
  }
  return `Congratulations, ${userName}! You won!`;
};

console.log(getRandomOper())
export default getRandomOper;

