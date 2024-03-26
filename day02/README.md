# Javascript 기본

## 6. 형 변환 (Type Casting)

- 어떤 값의 타입을 다른 타입으로 변경하는 것을 의미

### 묵시적 형 변환

- 암묵적 형 변환
- 자바스크립트 엔진이 알아서 형 변환 하는 것을 의미

```javascript
let num = 10;   // 숫자 → 문자열 타입으로 자바스크립트 엔진이 묵시적 형 변환 
let str = '20';

const result = num + str;
console.log(result);  // 1020 출력
```

### 명시적 형 변환

- 의도적으로 형 변환 하는 것을 의미
- 자바스크립트의 내장함수를 이용해서 의도적으로 형 변환

```javascript
let str1 = '10'; 
let strToNum1 = Number(str1);

console.log(strToNum1);  // 10 

let num1 = 100; 
let numToStr1 = String(num1); 

console.log(numToStr1 + "점 입니다!!!"); // 100점 입니다!!!
```

#### 문자열 → 숫자 형 변환 내장 함수

- [Number](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)
  - 인자가 숫자일 경우 사용

- [parseInt](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
  - 인자가 숫자+문자 조합일 때 사용
  - 인자가 문자 + 숫자 경우 사용  ❌

#### 숫자 → 문자열 형 변환 내장 함수

- [String](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String)

<br/>

## 7. 연산자 (Operator) - 1

### 대입 연산자 :  `=`

### 산술 연산자 :  `+` ,`-`, `*`, `/`, `%`

- 산술연산자의 우선순위 : `*`, `/`, `%`
- `()` 통해 우선 순위 적용

### 복합 대입 연산자  : `+=` ,`-=`, `*=`, `/=`, `%=`

```javascript
let num7 = 10;
num7 +=20;  // num7 = num7 + 20; 
num7 -=20;  // num7 = num7 - 20; 
num7 *=20;
num7 /=20;
num7 %= 20;
```

### 증감 연산자 : `++` ,`--`

- 전위 연산 (++변수) : 할당 전에 연산을 하게 됨
- 후위 연산 (변수++) : 할당 이후에 연산을 하게 됨

```javascript
let num8 = 10;
console.log(++num8); // 11 ( num8 = num8 + 1 )
console.log(num8--); // 11 ( num8 = num8 ) 할당만 하고 연산은 아직 안한 상태 

console.log(num8); // 10 (num8 = num8 - 1) 윗줄에서 할당받은 값으로 연산한 결과를 반환 
```

### 논리연산자 : `||`, `&&`, `!`

- Boolean 타입의 True / False 값을 다룰 때 사용하는 연산자

```javascript
let or = true || false; 

let and = true && false; 

let not = !true;

console.log(or);  // true
console.log(and); // false
console.log(not);  // false
```

### 비교 연산자

#### 동등 비교 연산자

- `===` : 자료형(type)까지 비교하는 연산자
- `==` : 자료형(type)까진 확인 하지 않는 연산자

```javascript
let comp1 = 1 === '1'; 
let comp2 = 1 == '1';
console.log(comp1, comp2); // false, true
```

#### 대소 비교 연산자  : `>`, `<`, `>=`, `<=`

<br/>

## 8. 연산자 (Operator) - 2

### null 병합 연산자 : `??`

- null, undefined 아닌 값을 찾아내는 연산자

```javascript
let var1; 
let var2 = 10; 
let var3 = 20; 

console.log(var1 ?? var2); // 10 
console.log(var1 ?? var3); // 20 
console.log(var2 ?? var3); // 10  👈🏻 null, undefined 없는 경우 앞에 있는 값을 출력함
```

### typeof 연산자

- 값의 타입을 문자열로 반환하는 기능을 하는 연산자

```javascript
let type = '나는 문자열'
console.log(typeof type);
```

### 삼항 연산자

- 항 3개를 사용하는 연산자
- 조건식 `?` 참일 경우 반환값 `:` 거짓을 경우 반환값

```javascript
let var4 = 10; 
let res = !(var4 % 2) ? '짝수' : '홀수'; 
console.log(res); // 짝수 
```

<br/>

## 조건문

- 특정 조건을 만족 했을 경우 실행되는 코드를 작성하기 위한 문법
- 대표적 if, switch

### if 조건문

- if, else if , else

```javascript
if(num > 10){ // 👈🏻 해당 조건식이 참이면 
  console.log(`num은 10이상입니다.`); // 👈🏻 { } 안의 내용이 수행  
} else if( num >= 5 ){
  console.log(`num은 5이상입니다.`);
}else{
  console.log(`num은 5보다 작은 수입니다.`);
}
```

### switch 문

- 다수의 조건을 처리 할 때 if문보다 직관적
- switch , case, break , default

```javascript
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
```
