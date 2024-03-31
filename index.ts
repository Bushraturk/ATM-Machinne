#! /usr/bin/env node

import inquirer from "inquirer";

//initilaize user balance and pin code

let myBalance = 5000;
let mypin = 12345;

//wellcome message
console.log("wellcome to ATM Machine");

let pinanswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your pin code",
  },
]);
if (pinanswer.pin === mypin) {
  console.log("pin is correct, login successfully!");
  // console.log(`Current Account Balance is: ${myBalance}`);


let operationAns = await inquirer.prompt([
  {
    name: "operation",
    type: "list",
    message: "select an operation",
    choices: ["Withdraw Ammount", "Check Balance"],
  },
]);
if (operationAns.operation === "Withdraw Ammount") {
  let amountAns = await inquirer.prompt([
    {
      name: "amount",
      type: "number",
      message: "Enter the ammount to withdraw:",
    }
  ]);

  if (amountAns.amount > myBalance) {
    console.log("insufficient balance");
  } else {
    myBalance -= amountAns.amount;
    console.log(`${amountAns.amount} withdraw successfully`);
    console.log(`your remaning balance is: ${myBalance}`);
  }
}
 else if (operationAns.operation === "Check Balance") {
  console.log(`Your Account Balance is: ${myBalance}`);
 }
}
else {
  console.log("Pin is incorrect,Try Again");
}
