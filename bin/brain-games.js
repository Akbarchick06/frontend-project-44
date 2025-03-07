#!/usr/bin/env node
import { getUserName } from "../src/cli.js";
import gameRandomNumber from "./brain-even.js";

console.log("Welcome to the Brain Games!");

const name = getUserName()
console.log(`Hello, ${name}!`);


const result = gameRandomNumber(name)
console.log(result);