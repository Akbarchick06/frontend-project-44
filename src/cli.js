import readlineSync from 'readline-sync';

const qwerty = () => {
    const name = readlineSync.question('Your answer: ');
    return `Hello, ${name}!`
}
console.log(qwerty());

export default qwerty