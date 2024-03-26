
// 1. null 병합 연산자 
// 존재하는 갓을 추려내는 기능? 
// null, undefined 아닌 값을 찾아내는 연산자 

let var1; 
let var2 = 10; 
let var3 = 20; 

console.log(var1 ?? var2); // 10 
console.log(var1 ?? var3); // 20 
console.log(var2 ?? var3); // 10  null, undefined 없는 경우 앞에 있는 값을 출력함 
console.log(var3 ?? var2); // 20  

// 2. typeof 연산자 
// 자바스크립트의 타입은 유연하게 변경된다. 
// 그래서 타입을 확인하고 싶을 때 사용 
// → 값의 타입을 문자열로 반환하는 기능을 하는 연산자 

let type = '나는 문자열'
console.log(typeof type);


// 3. 삼항 연산자 
// → 항 3개 사용하는 연산자 
// 조건식 ? 참일 경우 반환값 : 거짓을 경우 반환값 

let var4 = 10; 
let res = !(var4 % 2) ? '짝수' : '홀수'; 
console.log(res); // 짝수 