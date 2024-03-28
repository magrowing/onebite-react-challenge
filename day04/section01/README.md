# Javascript 기본

## 15. 객체(Object) - 1

- 객체 타입의 자료형
- 여러가지 값을 동시에 저장할 수 있는 자료형을 의미

### 객체 생성

- 객체 생성자

```javascript
let obj1 = new Object(); 
```

- ⭐️ 객체 리터럴 (자주 사용하는 방식)

```javascript
let obj2 = {} 
```

### 객체 프로퍼티 (객체 속성)

- key : value
- value : 문자열, 숫자, boolean, 함수, 객체, 배열 타입 사용 가능  

```javascript
let objValue = {
  str : 'string',  // 👈🏻 객체 프로퍼티 key : value 
  num : 27, 
  bol : true,
  obj : {}, 
  arr : [], 
  func : function (){},
}
```

### 객체 프로퍼티를 다루는 방법

#### 1. 특정 프로퍼티에 접근하는 방법

- 점 표기법

```javascript
let str = objValue.str;
console.log(str);  // string
```

- 괄호 표기법 `['문자열']`
  - `''` 없으면 변수로 인식해서 Error
  - 동적으로 생성시 유용

```javascript
let num = objValue['num']; 
console.log(num)  // 27 
```

#### 2. 새로운 프로퍼티 추가하는 방법

```javascript
objValue.newType1 = '점 표기법으로 생성'; 
objValue['newType2'] = '괄호 표기법으로 생성'; 
```

#### 3. 프로퍼티를 수정하는 방법  

```javascript
objValue.newType1 = '점 표기법으로 수정'; 
objValue['newType2'] = '괄호 표기법으로 수정'; 
```

#### 4.프로퍼티를 삭제하는 방법 `delete`

```javascript
delete objValue.newType1;
delete objValue['newType2'];
console.log(objValue);
```

#### 5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)

- `key in 객체이름`

```javascript
console.log('newType1' in objValue);
console.log('newType2' in objValue);
console.log('obj' in objValue);
```

<br/>

## 16. 객체(Object) - 2

### 상수 객체

- 상수로 생성된 객체의 프로퍼티는 수정이 가능하다.
  - 🤔 왜 수정이 가능 할까?
  - 실제로 객체의 값을 저장하는게 아니라 참조(메모리주소)를 저장하기 때문에 발생하는 현상

```javascript
const animal = {
  type : '고양이',
  name : '나비',
  color : 'black',
}

animal.age= 2; // 추가 
animal.name = '까망이' // 수정 
delete animal.color // 삭제 
```

### 메서드

- value가 함수인 프로퍼티를 의미

```javascript
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
```

<br/>

## 17. 배열(Array)

- 여러개의 값을 `순차적`으로 담을수 있는 자료형

### 배열 생성

- 배열 생성자

```javascript
let arrA = new Array(); 
```

- ⭐️ 배열 리터럴 (자주 사용하는 방식)

```javascript
let arrB = [];
```

### 배열 요소 접근 `index`

- 배열은 순서가 있다. index를 통해 접근해서 수정 할수 있다.
- index의 시작은 `0`

```javascript
let item1 = arrC[0] // 👈🏻 index로 접근 
let item2 = arrC[1] 

acc[0] = 'hello';
console.log(arrC)
```
