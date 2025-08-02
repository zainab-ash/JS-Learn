// const prompt = require("prompt-sync")();

// let num;
// do {
//     let a = prompt("Enter the value of n: ");
//     num = Number.parseInt(a);
// } while (num !== 0);

// while(true){
//     let a = prompt("Enter the value of n: ");
//     num = Number.parseInt(a);
//     if(6){s
//         break
//     }
// }
// let n = 5,
//   i = 2,
//   j = 1;
// while (i <= n) {
//   j *= i;
//   i++;
// }
// console.log(j);

// let n = 5, r = 1
// while (n) {
//     r = r*n
//     n--
// }
// console.log(r);

// let arr = [2,6,2467,865,2,3,241,2,6,80,70,8,35,2123,3,45,7,63,4], sum = 0

// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2 === 0){
//         console.log(arr[i])
//     }
// }

// let i = 0
// while(i<arr.length){
//     if(arr[i]%2 === 0){
//         console.log(arr[i])
//     }
//     i++
// }
//

// let num = 12;
// for (let i = 0; i <= num; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }

// let n = 153; countDigit = 0;
// while(n > 0){
//     n = Math.floor(n/10)
//     console.log(n)
//     countDigit++
// }
// console.log(countDigit)

// let n = 153; countDigit = 0;
// for(let i = 0; n > 0 ; i++){
//     n = Math.floor(n/10)
//    countDigit++
// }
// console.log(countDigit)

// TODO: implement using function

const countDigits = (x, c) => {
  
  for (let i = 0; x > 0; i++) {
    x = Math.floor(x / 10);
    c++;
  }
  return c;
}

let n = 1539768, count = 0;
console.log(countDigits(n, count));
