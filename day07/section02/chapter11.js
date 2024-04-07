// 동기적 방식
// 자바스크립트에는 비동기적으로 실행시키는 기능을 가지고 있는 함수가 존재 
console.log(1);

setTimeout(() => {
  console.log(2);
},3000);

console.log(3);

