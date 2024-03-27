// 스코프 
// 전역, 지역 스코프 

let all = 1; // 👈🏻 전역 스코프 

function funA() {
  let area = 2 ; // 👈🏻 지역 스코프 
  console.log(all);
}

funA();  // 1 

console.log(area); // area is not defined