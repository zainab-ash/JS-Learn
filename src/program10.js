// let num = 13
// for (let i = 1; i>= 1;  i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         num--
//         if(num === 0){
//             break;
//         }
//     }
// }
const countOddNumber = (x) => {
  for (let i = 1; i >= 1; i++) {
    if (i % 2 !== 0) {
      console.log(i);
      x--;
      if (x === 0) {
        break;
      }
    }
  }
};
let num = 13
console.log(countOddNumber(num));
