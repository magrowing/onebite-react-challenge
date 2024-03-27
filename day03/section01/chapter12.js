// 1. 함수 표현식

function funcA(){
  console.log('funcA');
}

let varA = funcA; // 함수자체를 변수에 담을 수 있다.
varA(); // 변수에 담은 후 변수이름으로 함수를 호출 


let varB = function (){ // 함수 선언식처럼 이름을 붙여도 사용하지 않으니, 이름 붙이지 않고 사용 👈🏻 익명함수
  console.log('funB')
}


// 2. 화살표 함수 

let varC = () => {
  return 1;
}

let varC_1 = (value) => value + 1;


console.log(varC());
console.log(varC_1(10));