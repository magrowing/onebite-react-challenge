
function returnFalse(){
  console.log('False 함수');
  return false; 
}

function returnTrue(){
  console.log('True 함수');
  return true; 
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() && returnFalse());
console.log(returnTrue() || returnFalse());
console.log(returnFalse() || returnTrue());


// 단락 평가 활용 사례 
let person = {name :'홍길동'}

function printName(person){
  // if(!person){  // 👈🏻 제거 
  //   console.log('person의 값이 없음'); 
  //   return; 
  // }
  const name = person && person.name
  console.log(name || 'person의 값이 없음');
}

person = null;
printName(person); 
