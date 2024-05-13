#!/usr/bin/env node

import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() *6 + 1);
const answer = await inquirer.prompt([
    {
        name : "guessingNumber",
        message : "please guess number 1-6",
        type : "number",
    
    }
]);
if (answer.guessingNumber === "randomNumber"){
    console.log("Congratulaions! your guess is right");
    
}
else{
    console.log("your guess is wrong");
    
}