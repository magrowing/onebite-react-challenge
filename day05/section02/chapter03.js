// 1. 배열의 구조 분해 할당 
//  배열의 원소들을 각각의 변수에 할당하는 것
let arr = [1,2,3];
let arrA = [4, 5,6];

let [one,two,three, four=4] = arr;
console.log(one, two, three, four);


// 2. 객체의 구조 분해 할당 
let person = {
  name : '홍길동', 
  age : 20, 
  hobby : '날아다니기',
}

let {
  name,
  age : myAge, 
  hobby, 
  year='2005'
} = person; 

console.log(name, myAge, hobby, year);


// 3.객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법 
const func = ({name, age, hobby, year}) => {
  console.log(name, age, hobby, year);
}

func(person)


// 4. 배열도 구조분해 할당을 통해서 이용할 수 있다? 
const arrFunc = ([one,two,three]) => {
  console.log(one, two, three);
}

arrFunc(arr);
arrFunc(arrA);