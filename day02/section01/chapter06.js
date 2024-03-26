// 1. 묵시적 형 변환 

let num = 10;   // 숫자를 문자열로 묵시적 형 변환 
let str = '20';

const result = num + str;
console.log(result);  // 1020


// 2. 명시적 형 변환 
// 내장함수 등을 이용해서 의도적으로 형 변환 

// 2-1. 문자열 → 숫자 타입 변환하는 내장 함수 

let str1 = '10'; 
let str2 = '30개';
let str3 = 'ea30';

let strToNum1 = Number(str1);
let strToNum2 = Number(str2); 

let strToPar1 = parseInt(str1); 
let strToPar2 = parseInt(str2); 
let strToPar3 = parseInt(str3); 


console.log(strToNum1);  // 10 
console.log(strToNum2);  // NaN


console.log(strToPar1); // 10 
console.log(strToPar2); // 30 
console.log(strToPar3); // NaN

// 2-2 . 숫자 → 문자열 변환하는 내장함수 

let num1 = 100; 
let numToStr1 = String(num1); 

console.log(numToStr1 + "점 입니다!!!"); // 100점 입니다!!!
