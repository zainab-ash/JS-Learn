// let num = 5, num2 = 10, num3 = 15, num4 = 20;
// let average = Math.floor((num+num2+num3+num4)/4)
// console.log(average)


function averageNumber(x, y) {
    let num1 = 5; num2 = 10;
  let average = Math.floor((num1 + num2 +x + y) / 4);
  return average;
}
let num1 = 15;
let num2 = 20;
console.log(averageNumber(num1,num2)); 
