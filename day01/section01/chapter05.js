// 자료형(Type) 

// 원시타입 

// 1. Number Type 
// 사칙연산, 나머지( % : 모듈러연산 ) 가능하다.
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; 
let nInf = -Infinity; 

let nan = NaN;

// 2. String Type
let myName = "magrowing"
let myLocation = '서울';
let introduce = myName + myLocation;

// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);

// 3. Boolean Type 
let iSwitchOn = true;
let isEmpty = false; 


// 4. Null Type 
let empty = null; 


// 5. Undefined Type
let none; 
console.log(none);