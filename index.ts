#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {massage : 'Enter your first number', type: 'number' , name : 'firstnumber'},
    {massage : 'Enter your second number', type: 'number' , name : 'secondnumber'},
    {massage : 'salect one of the operators to perform operation',
     type: 'list',
     name : 'operator',
     choices :["Addition","subtraction","Division","Multiplication"],
    }
]);
// condition statement
if (answer.operator === "Addition"){
    console.log(  answer.firstnumber + answer.secondnumber);
}else if (answer.operator === "subtraction"){
    console.log(  answer.firstnumber - answer.secondnumber);
}else if (answer.operator === "Division"){
    console.log(  answer.firstnumber / answer.secondnumber);
}else if (answer.operator === "Multiplication"){
    console.log(  answer.firstnumber * answer.secondnumber);
}else{
    console.log("please select valid operator")
}