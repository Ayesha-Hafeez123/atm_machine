#!/usr/bin/env node
import inquirer from "inquirer";
//initialize user balance and pin code
let myBalance = 15000;
let myPin = 5839;
//print welcome message
console.log("Welcome to Code With Ayesha - ATM MACHINE");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct, Login Successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select an operation:",
            type: "list",
            choices: ["withdraw Amount", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdrawal method:",
                choices: ["Fast Cash", "Enter Amount"]
            },
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [1000, 3000, 4000, 7000, 9000, 11000, 20000,]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdraw Successfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
        if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "enter the Amount to withdraw:"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficent Balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw Successfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number, Try again");
}
