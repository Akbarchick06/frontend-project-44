import readlineSync from 'readline-sync';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const gameProgression = (userName) => {
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
   
    const start = Math.floor(Math.random() * 20) + 1; 
    const step = Math.floor(Math.random() * 5) + 2;   
    const length = Math.floor(Math.random() * 6) + 5;  

    const progression = generateProgression(start, step, length);

    
    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = String(progression[hiddenIndex]); 
    progression[hiddenIndex] = '..';

    
    const question = `What number is missing in the progression?\nQuestion: ${progression.join(' ')}`;

    
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    }
  }

  return `Congratulations, ${userName}!`;
};

export default gameProgression;
