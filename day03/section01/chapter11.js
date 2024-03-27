// 함수선언 

function greeting(){
  console.log('안녕하세요~');
}

greeting();



let area1 = getArea(30,20);
console.log(area1);


// ⭐️ 호이스팅 : 끌어올리다.
// 함수의 선언문보다 함수호출 부분이 더 먼저 입력되었지만 함수는 실행 된다. 
// 다른언어는 이런 경우 Error 발생 
getArea(1000,2000); 

function getArea(width, height){ // 👈🏻 매개변수
  function another(){
    console.log('중첩함수');
  }

  let area = width * height; 
  console.log(area); 
  return area; // 👈🏻 반환하고 함수를 종료한다.
}

getArea(10,20); // 👈🏻 인수 

function returnCheck(){
  const check = 'return을 적어주지 않는다면?'; 
}

const what = returnCheck();
console.log(what);