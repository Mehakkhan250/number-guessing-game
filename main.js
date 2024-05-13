#!
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer_1.default.prompt([
    {
        name: "guessingNumber",
        message: "please guess number 1-6",
        type: "number",
    }
]);
if (answer.guessingNumber === "randomNumber") {
    console.log("Congratulaions! your guess is right");
}
else {
    console.log("your guess is wrong");
}
