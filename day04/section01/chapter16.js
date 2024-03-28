// 1. 상수 객체 
// 상수로 생성된 객체의 프로퍼티는 수정이 가능하다. 
// 그 이유는 ? 

const animal = {
  type : '고양이',
  name : '나비',
  color : 'black',
}

animal.age= 2; // 추가 
animal.name = '까망이' // 수정 
delete animal.color // 삭제 


// 2. 메서드 
// -> 값이 함수인 프로퍼티를 의미 

const person = {
  name : '홍길동', 
  sayHi : function(){  // 👈🏻 메서드 
    console.log('Hi!');
  },
  sayHello(){ // 👈🏻 메서드 선언 
    console.log('Hello!');
  }
}

person.sayHi(); // Hi! 
person['sayHello'](); // Hello! 

