let num = 8769;

let a = num % 10;                            
let b = Math.floor((num % 100) / 10);        
let c = Math.floor((num % 1000) / 100);      
let d = Math.floor(num / 1000);              
let result = a * 1000 + b * 100 + c * 10 + d; 
console.log(result)