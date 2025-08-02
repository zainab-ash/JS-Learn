// let t = 1100,
//   o = 973;
// let p = Math.floor((o / t) * 100);
// console.log(p);

// if (p < 33) {
//   console.log("Grade is F");
// } else if (p > 33 && p < 50) {
//   console.log("Grade is D");
// } else if (p > 50 && p < 70) {
//   console.log("Grade is C");
// } else if (p > 70 && p < 80) {
//   console.log("Grade is B");
// } else if (p > 80 && p < 90) {
//   console.log("Grade is A");
// } else {
//   console.log("Grade is A+");
// }

const grade = (o,t) => {
  let p = Math.floor((o / t) * 100);
  if (p < 33) {
    console.log("Grade is F");
  } else if (p > 33 && p < 50) {
    console.log("Grade is D");
  } else if (p > 50 && p < 70) {
    console.log("Grade is C");
  } else if (p > 70 && p < 80) {
    console.log("Grade is B");
  } else if (p > 80 && p < 90) {
    console.log("Grade is A");
  } else {
    console.log("Grade is A+");
  }
};

let t = 1100;
o = 973;
o2 = 765
grade(o, t);
grade(o2, t);
