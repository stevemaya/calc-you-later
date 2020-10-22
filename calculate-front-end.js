const calculate = require('./calculate-back-end.js');

let userInput1 = process.argv[2];
let operation = process.argv[3];
let userInput3 = process.argv[4];

let result = calculate(userInput1, userInput3, operation);

console.log(result); 

function userInput() {
    if (process.argv[5]) {

    }