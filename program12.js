// let salary = 21000;
// let d = Math.floor(7/100 * salary);
// if (salary > 20000) {
//   console.log("Your salary is: ", salary - d);
// } else if (salary >= 10000 && salary <= 20000) {
//  console.log("Your salary is: ", salary - 1000);
// } else if(salary < 10000) {
//   console.log("Your salary is: ", salary);
// }

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Please enter first number: "));
let num2 = Number(prompt("Please enter second number: "));
let operater = prompt("Please enter operator :");

if (operater === "+") {
  console.log(num1 + num2);
} else if (operater === "-") {
  console.log(num1 - num2);
} else if (operater === "*") {
  console.log(num1 * num2);
} else if (operater === "/") {

    console.log(num1 / num2);
  
    

}

