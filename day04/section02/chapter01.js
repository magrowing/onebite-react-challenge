// 1. Falsy한 값 

let f1 = undefined; 
let f2 = null; 
let f3 = 0; 
let f4 = -0; 
let f5 = NaN; 
let f6 = '';
let f7 = 0n; 

if(!f1){
  console.log('Falsy');
}


// 2. Truthy한 값 
// Falsy한 값들 제외한 나머지 모든 값 

let t1 = 'string';
let t2 = {};
let t3 = [];

if(t1){
  console.log('Truthy');
}


// 3. 활용 사례 
let person = {name :'홍길동'}

function printName(person){
  if(!person){
    console.log('person의 값이 없음'); 
    return; 
  }
  console.log(person.name);
}

person = null;
printName(person); 
