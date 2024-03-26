// 1. 대입 연산자 
let var1 = 1; 

// 2. 산술 연산자 
let num1 = 3 + 2; 
let num2 = 3 - 2; 
let num3 = 3 * 2; 
let num4 = 3 / 2; 
let num5 = 3 % 2;

let sum = (1 + 2) * 10;

// 3. 복합 대입 연산자 
let num7 = 10;
num7 +=20;
num7 -=20;
num7 *=20;
num7 /=20;
num7 %= 20;


// 4. 증감 연산자 
let num8 = 10;
console.log(++num8); // 11
console.log(num8--); // 11 

console.log(num8); // 10


// 5. 논리 연산자 
let or = true || false; 

let and = true && false; 

let not = !true;

console.log(or);  // true
console.log(and); // false
console.log(not);  // false

// 6. 비교 연산자 

// 동등 비교 연산자
let comp1 = 1 == '1';
let comp2 = 1 !== 2;
console.log(comp1, comp2);

// 대소 비교 

let comp3 = 10 > 5 ; 
let comp4 = 10 < 5 ; 

console.log(comp3, comp4);

let comp5 = 5 >= 5 ; 
let comp6 = 2 <= 5 ; 

console.log(comp5, comp6);