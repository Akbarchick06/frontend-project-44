#!/usr/bin/env node
import { getUserName } from "../src/cli.js";
import gameRandomNumber from "./brain-even.js";
import getRandomOper from "./brain.calc.js";

console.log("Welcome to the Brain Games!");

const name = getUserName()
console.log(`Hello, ${name}!`);

const results = getRandomOper(name);
console.log(results); 

const result = gameRandomNumber(name)
console.log(result);