// 1. if 조건문 (if문)
let num = 10; 

if(num > 10){
  console.log(`num은 10이상입니다.`);
} else if( num >= 5 ){
  console.log(`num은 5이상입니다.`);
}else{
  console.log(`num은 5보다 작은 수입니다.`);
}


// 2. Switch 문 
// 다수의 조건을 처리 할 때 if문 보다 더 직관적이다. 

let animal = 'cat'; 

switch(animal) {
  case 'cat' : { 
    console.log('고양이'); 
    break; // 👈🏻 없다면..? 모든 case가 출력됨 
  }
  case 'dog' : { 
    console.log('강아지'); 
    break;
  }
  case 'bear' : { 
    console.log('곰'); 
    break;
  }
  case 'tiger' : { 
    console.log('호랑이'); 
    break;
  }
  default : {
    console.log('그런 동물은 전 잘 몰라요!'); // 👈🏻 조건과 일치 하지 않는 경우를 고려한 상황 
  }
}