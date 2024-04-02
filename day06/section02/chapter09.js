// 1. filter 
// 기존배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환 
let arr1 = [
  {name:'홍길동', hobby : '날아당기기'},
  {name:'김철수', hobby : '독서'},
  {name:'김영희', hobby : '독서'},
]

const filterArr = arr1.filter((item) => item.hobby === '독서' ); 
console.log(filterArr);

// 2. map 
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환 
let arr2 = [1,2,3]; 
const mapResult = arr2.map((item, idx, arr) => {return item * 2 }); 
console.log(mapResult);


const names = arr1.map((item) => item.name);
console.log(names);


// 3. sort
// 배열을 사전순으로 정렬하는 메소드 

let arr3 = ['b', 'a', 'c'];
arr3.sort();
console.log(arr3);

let arr4 = [10, 3, 5];
arr4.sort((a,b) =>  {
  if( a > b){
    // b가 a 앞에와라 
    return 1;  // -> b, a 배치 
  }else if(a<b){
    return -1;  // a, b 배치 
  }else{
    return 0; // a,b 자리를 그대로 유지 
  }
});

console.log(arr4);

// 4. toSorted
let arr5 = ['b', 'a', 'c'];
const sorted = arr5.toSorted(); 
console.log(arr5); // ['b', 'a', 'c']
console.log(sorted); // ['a', 'b', 'c']


// 5.join
let arr6 = ['나는', '홍길동', '이다']; 
console.log(arr6.join('|'));
console.log(arr6.join(''));
console.log(arr6.join(' '));
