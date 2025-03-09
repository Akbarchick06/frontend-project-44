#!/usr/bin/env node
import { getUserName } from "../src/cli.js";
import gameRandomNumber from "./brain-even.js";
import getRandomOper from "./brain.calc.js";
import gameNOD from "./brain-gcd.js";
import gameProgression from "./brain-progression.js"

console.log("Welcome to the Brain Games!");

const name = getUserName()
console.log(`Hello, ${name}!`);

const result1 = getRandomOper(name);
console.log(result1); 

const result2 = gameRandomNumber(name);
console.log(result2);

const result3 = gameNOD(name);
console.log(result3);

const result4 = gameProgression(name);
console.log(result4);