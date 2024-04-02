# Javascript 심화

## 7. 배열 메서드 - 요소조작

### push

- 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
- 기존의 요소와 추가된 요소를 포함한 길이값 반환  

```Javascript
let arr1=[1,2,3]; 
const newLength = arr1.push[4,5,6,7];
console.log(newLength);  // 7 
```

### pop

- 배열의 맨 뒤에 있는 요소를 제거하는 메서드
- 제거한 값을 반환

```Javascript
let arr2 = ['하나', '둘', '셋'];
console.log(arr2.pop()); // 셋 
console.log(arr2);  // ['하나', '둘']
```

### shift

- 배열의 맨 앞에 있는 요소를 제거하는 메서드
- 제거한 값을 반환

```Javascript
let arr3 = [4,5,6]; 
console.log(arr3.shift()); // 4 
console.log(arr3); // [5, 6]
```

### unshift

- 배열의 맨 앞에 새로운 요소를 추가하는 메서드
- 변경된 배열의 길이를 반환

```Javascript
let arr4 = [1,2,3,4]; 
console.log(arr4.unshift(0)); // 5
console.log(arr4); // [0,1,2,3]
```

> 📌 shift / unshift <br/>
인덱의 처음을 추가하게 되면 인덱스의 번호가 달라지기 떄문에 느리게 동작한다. 그러므로 최대한 push/pop 메서드를 사용해서 해결하자!

### slice

- 마치 가위처럼, 배열의 특정범위를 잘라서 자른 배열을 반환
- 원본 배열은 유지되고 자른 배열을 반환해준다.
- slice (자르고 싶은 인덱스, 기재한 인덱스 전까지)
  - 두번째 인자는 생략 가능
  - 음수를 사용해서 인덱스의 마지막 기준으로 잘라 낼 수 있다.

```Javascript
let arr5 = [11,12,13,14,15]; 
console.log(arr5.slice(0,2)) // [11,12]
console.log(arr5.slice(2)) // [13,14,15] 
console.log(arr5.slice(-1)) // [15] 
```

### concat

- 두개의 서로다른 배열을 이어붙여서 새로운 배열로 반환하는 메서드

```Javascript
let arr6 = [21,22,23,24]; 
let arr7 = [25,26];
console.log(arr6.concat(arr7));  //  [21, 22, 23, 24, 25, 26]
```

<br/>

## 8. 배열 메서드 - 순회와 탐색

### [forEach](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

- 모든 요소를 `순회`하면서 각각의 요소에 특정 동작을 수행시키는 메서드

```Javascript
let arr1 = [1,2,3]; 

arr1.forEach(function(item, idx, arr){
  console.log(idx, item *2);  // 0,2  1,4, 2,6 
})

let doubleArr = []; 
arr1.forEach((item) => {
  doubleArr.push(item * 2); 
})

console.log(doubleArr); //[2,4,6]
```

### [includes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

- 배열에 특정요소가 있는지 확인해서 true/false 반환하는 메서드

```Javascript
let arr2 = [3,6,9]; 
let isInclude = arr2.includes(3); 
let noneInclude = arr2.includes(10); 
console.log(isInclude);  // true
console.log(noneInclude);  // false
```

### [indexOf](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

- 특정요소의 인덱스(위치)를 찾아서 반환하는 메서드
- 얇은 비교 : 원시타입이 아닌 객체타입을 사용할 때는 사용할 수 없다.

```Javascript
let arr3 = [2,4,6]; 
const index = arr3.indexOf(2);
console.log(index); // 0 
```

- 동일한 요소가 존재한다면 처음에 있는 인덱스 번호를 반환

```Javascript
let arr3 = [2,4,6,4,7,8]; 
const index = arr3.indexOf(4);
console.log(index); // 1
```

- 찾는 요소가 없다면 `-1`을 반환

```Javascript
let arr3 = [2,4,6]; 
const index = arr3.indexOf(10);
console.log(index); // -1
```

### [findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

- 모든요소를 순회하면서 `콜백함수를 만족하는` 특정요소의 인덱스(위치)를 반환하는 메서드
- 객체타입으로 이루어진 요소의 배열에서 index를 찾기 위해 사용되는 메서드

```Javascript
let objArr = [
  {name : '홍길동'},
  {name : '김철수'},
]

console.log(objArr.indexOf({name : '홍길동'})); // -1 객체는 참조값을 담고 있기때문에 프로퍼티로 비교가 불가능 하다 
console.log(objArr.findIndex((item) => item.name === '김철수')); // 1
```

### [find](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

- 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아 요소를 그대로 반환해주는 메서드

```Javascript
let objArr = [
  {name : '홍길동'},
  {name : '김철수'},
]
console.log(objArr.find((item) => item.name === '홍길동'));  // {name: '홍길동'}
```

<br/>

## 9. 배열 메서드 - 배열 변형

### [filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

- 기존배열에서 조건을 만족하는 요소(true인 경우)들만 필터링하여 새로운 배열로 반환

```Javascript
let arr1 = [
  {name:'홍길동', hobby : '날아당기기'},
  {name:'김철수', hobby : '독서'},
  {name:'김영희', hobby : '독서'},
]

const filterArr = arr1.filter((item) => item.hobby === '독서' ); 
console.log(filterArr);
```

### [map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

- 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환

### [sort](https://reactjs.winterlood.com/fc0a951e-41cd-4cc5-8f47-7507965bbe41#8f2d70d5e8334377bb56f0a3f9101de2)

- 배열을 사전순으로 정렬하는 메소드
- 배열의 요소를 정렬할 때 사용하는 메소드
- `원본배열의 정렬`

```Javascript
let arr3 = ['b', 'a', 'c'];
arr3.sort();
console.log(arr3);
```

- 대소관계 : 콜백함수를 통해 조건문 처리
  - 오름차순
  - 내림차순

```Javascript
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

console.log(arr4); //  [3, 5, 10]
```

### [toSorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)

- 가장 최근에 추가된 최신 함수
- sort와 동일한 기능이지만 정렬된 `새로운 배열을` 반환하는 메소드

```Javascript
let arr5 = ['b', 'a', 'c'];
const sorted = arr5.toSorted(); 
console.log(arr5); // ['b', 'a', 'c']
console.log(sorted); // ['a', 'b', 'c']
```

### [join](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

- 배열 요소를 모두 연결해 하나의 문자열로 반환하는 메소드
- `()` 인자로 넣어준 요소를 가지고 하나의 문자열로 반환

```Javascript
let arr6 = ['나는', '홍길동', '이다']; 
const joined = arr6.join('|');  // 나는|홍길동|이다
console.log(joined);
```

```Javascript
let arr6 = ['나는', '홍길동', '이다']; 

console.log(arr6.join('|'));  // 나는|홍길동|이다
console.log(arr6.join(''));  // 나는홍길동이다
console.log(arr6.join(' ')); // 나는 홍길동 이다
```

<br/>

## 10. Date 객체와 날짜

### Date 객체를 생성하는 방법

```Javascript
let date1 = new Date();  // 생성자 
console.log(date1); // 현재기준의 날짜를 확인 할 수 있다. 

let date2 = new Date('2002/12/25/12:00:00');
console.log(date2);
```

### 타임스탬프

- 특정시간이 "1970.01.01 00시00분00초"(UTC)로 부터 몇 ms가 지났는지 의미하는 숫자값

```Javascript
let ts1 = date1.getTime(); 
console.log(ts1); // 1712027045417
```

### 시간요소들을 추출하는 방법

- 1월, 일요일 0으로 인지

```Javascript
let year = date1.getFullYear();
let month = date1.getMonth() + 1; 
let date = date1.getDate(); 

let hour = date1.getHours(); 
let minute = date1.getMinutes(); 
let seconds = date1.getSeconds(); 

console.log({
  year,
  month,
  date,
  hour,
  minute,
  seconds,
});
```

### 시간 수정하는 방법

```Javascript
date1.setFullYear(2023);
date1.setMonth(4);
date1.setDate(30);
date1.setHours(23); 
date1.setMinutes(59); 
date1.setSeconds(59); 

console.log(date1);
```

### 시간을 여러 포맷으로 출력하기

```Javascript
console.log(date1.toDateString()); // Tue May 30 2023
console.log(date1.toLocaleString());  // 2023. 5. 30. 오후 11:59:59
```
