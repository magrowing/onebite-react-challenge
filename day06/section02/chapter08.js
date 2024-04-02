// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드 
let arr1 = [1,2,3]; 

arr1.forEach(function(item, idx, arr){
  console.log(idx, item *2);
})

let doubleArr = []; 
arr1.forEach((item) => {
  doubleArr.push(item * 2);
})

console.log(doubleArr);


// 2. includes 
// 배열에 특정요소가 있는지 확인해서 true/false 반환하는 메서드 
let arr2 = [3,6,9]; 
let isInclude = arr2.includes(3); 
console.log(isInclude);

// 3. indexOf 
// 특정요소의 인덱스(위치)를 찾아서 반환하는 메서드 
let arr3 = [2,4,6]; 
const index = arr3.indexOf(10);
console.log(index); 


// 4. findIndex 
// 모든 요소를 순회하면서 콜백함수를 만족하는 
// 특정 요소의 인덱스(위치)를 반환하는 메서드 

let objArr = [
  {name : '홍길동'},
  {name : '김철수'},
]

console.log(objArr.indexOf({name : '홍길동'})); // -1
console.log(objArr.findIndex((item) => item.name === '김철수')); // 1

// 5. find 
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아 요소를 그대로 반환

console.log(objArr.find((item) => item.name === '홍길동'));