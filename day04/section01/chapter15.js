// 1. 객체 생성 
let obj1 = new Object();  // 객체 생성자 
let obj2 = {} // 객체 리터럴 (주로 사용하는 방식 )


// 2. 객체 프로퍼티 ( 객체 속성 ) 
// key : value 
let objValue = {
  str : 'string',  // 👈🏻 객체 프로퍼티 key : value 
  num : 27, 
  bol : true,
  obj : {}, 
  arr : [], 
  func : function (){},
}

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 

// 점 표기법 
let str = objValue.str;
console.log(str); 

// 괄호 표기법  ['문자열']
let num = objValue['num'];
console.log(num) 

// 3.2 새로운 프로퍼티를 추가하는 방법 
objValue.newType1 = '점 표기법으로 생성'; 
objValue['newType2'] = '괄호 표기법으로 생성'; 

// 3.3 프로퍼티를 수정하는 방법  
objValue.newType1 = '점 표기법으로 수정'; 
objValue['newType2'] = '괄호 표기법으로 수정'; 


// 3.4 프로퍼티를 삭제하는 방법 
delete objValue.newType1;
delete objValue['newType2'];
console.log(objValue);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
console.log('newType1' in objValue);
console.log('newType2' in objValue);
console.log('obj' in objValue);