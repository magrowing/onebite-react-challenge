// 6가지의  요소 조작 메서드 

// 1. push 
// 배열 맨뒤에 새로운 요소를 추가하는 메서드
// 반환값 :  추가된 요소의 길이값 

let arr1 = [1,2,3]; 
const newLength = arr1.push[4,5,6,7];
console.log(newLength);

// 2. pop 
// 배열의 맨 뒤에 있는 요소를 제거하고, 제거한값을 반환 

let arr2 = ['하나', '둘', '셋'];
console.log(arr2.pop()); // 셋 
console.log(arr2); // ['하나', '둘']


// 3. shift 
// 배열의 맨 앞에 있는 요소를 제거하고, 제거한 값을 반환 
let arr3 = [4,5,6]; 
console.log(arr3.shift()); // 4 
console.log(arr3); // [5, 6]

// 4. unshift 
// 배열의 맨 앞에 있는 요소를 추가하고, 변경된 배열의 길이를 반환  
let arr4 = [1,2,3,4]; 
console.log(arr4.unshift(0)); // 5
console.log(arr4); // [0,1,2,3]


// 5. slice 
// 마치 가위처럼, 배열의 특정범위를 잘라서 자른 배열을 반환 
// 원본배열은 유지 
let arr5 = [11,12,13,14,15]; 
console.log(arr5.slice(0,2)) // [11,12]
console.log(arr5.slice(2)) // [13,14,15] 
console.log(arr5.slice(-1)) // [15] 


// 6. concat 
// 두개의 서로다른 배열을 이어붙여서 새로운 배열로 반환하는 메서드
let arr6 = [21,22,23,24]; 
let arr7 = [25,26];
console.log(arr6.concat(arr7));