# Node.js 기초

## 1. Node.js 소개

### 🤔 왜 Node.js를 배워야 하는 이유

- React는 Node.js를 기반으로 동작하는 기술이기 때문

### [Node.js](https://nodejs.org/en)

- 자바스크립트 런타임
  - 브라우저가 아닌 외부에서 자바스크립트를 실행하게 해주는 환경( = 구동기)

### 자바스크립트 언어의 히스토리

- 웹페이지 내부에 필요한 아주 단순한 기능만을 개발하기 위해 만들어진 언어
  - 유연하고 생산성 중심을 둔 언어로 인식되고 개발자들 사이에 해당 언어들의 매력에 빠져 브라우저가 아닌 다른 환경에서도 해당 언어를 사용하고 싶어함. → 이러한 이유로 Node.js가 탄생하게 되었다.  

> Node.js는 아주 단순한 상호작용만 할 수 있었던 언어인 자바스크립트를 범용적으로 사용할 수 있도록 도와주는 자바스크립트 실행해주는 환경, 즉 런타임이며 우리가 배우고자 하는 React 또한 이 Node.js를 기반으로 동작하는 기술이다.

<br/>

## 2. Node.js 설치

- 공식홈페이지에서 설치를 통해 사용이 가능하다.
  - LTS(Long Term Support) : 안정적인 버전  (✅ 많은 기업이 사용하는 버전)
  - Current : 최신기술이 반영되는 버전

- 설치 후 Node.js 버전 확인
  - window : 명령프롬프트  
  - mac : 터미널

```shell
node -v 
```

- Node.js 를 설치하면 함꼐 설치되는 npm의 버전까지 확인

```shell
npm -v 
```

<br/>

## 3. Node.js 사용

- 프로젝트(Project)
  - 특정 목적을 갖는 프로그램의 단위
- 패키지
  - Node.js에서 사용하는 프로그램의 단위

### package.json 파일 생성

```shell
npm init 
```

### Node.js 환경 자바스크립트 파일을 실행하는 명령어

```shell
node 자바스크립트 파일명.js 
```

### package.json 의 script 를 이용해서 실행 명령어 등록  

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" : "node index.js"
  },
```

- 아래 명령어를 입력하면 index.js 파일을 실행하게 해준다.

```shell
npm run start 
```

<br/>

## 4. Node.js 모듈 시스템 이해하기

### 모듈 시스템 (Module System)

- 모듈을 다루는 시스템
- 기능별로 파일을 분리해서 사용하는걸 `모듈`이라고 한다.

> 모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템

### CJS (Common JS)

- 내보내기 : module.exports
- 가져오기 : require('파일경로')

```js
function add (a,b){
  return a + b 
}

function sub(a,b){
  return a - b
}


module.exports = {
  add , sub 
}
```

```js
const {add, sub} = require('./math');  // 👈🏻 확장자는 기재하지 않아도 된다. 
console.log(add(1,3));
console.log(sub(4,3));
```

### ESM (ES 모듈 시스템)

- package.json ES Module을 사용하겠다는 옵션 지정
- 내보내기 : export
  - 내보내기를 할 때 `default` 사용하면 기본값으로 내보내진다.
- 가져오기 : import {} from '파일경로.확장자' // 꼭 확장자를 기재해야한다.
  - `default`로 지정된 값은 객체가 아닌 자유로운 이름으로 가져올 수 있다.

```json
{
  "name": "section03",
  "version": "1.0.0",
  "description": "## 1. Node.js 소개",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" : "node src/index.js"
  },
  "author": "",
  "license": "ISC", 
  "type" : "module"  // 👈🏻 ES모듈시스템을 사용하기 위해서 옵션 지정
}
```

> 📌 위의 두가지 모듈시스템은 함께 사용하는것은 불가능하다. 하나의 모듈시스템만 사용해야 한다!

```js
export function add (a,b){
  return a + b 
}

export function sub(a,b){
  return a - b
}


export default function multiply(a,b){
  return a * b
}

// export {add, sub}
```

```js
import multiply, {add, sub} from './math.js' // 👈🏻 확장자까지 꼭 기재해줘야한다.

console.log(add(1,3));
console.log(sub(4,3));
console.log(multiply(4,3));
```

<br/>

## 5. Node.js 라이브러리 사용

- 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것

### npm(Node Package Manager)

- 다양한 패키지(라이브러리)들이 모여있는 도구
  - `package.json` : 대략적인 패키지들의 버전이 명시되어 있는 파일
  - `package-lock.json`패키지들의 버전들의 실제 패키지의 버전이 명시되어 있는 파일
  - 해당 명령어를 통해 패키지를 설치하면 `node_modules` 폴더에 패키지의 실행 파일들이 들어있다.

#### 👩🏻‍💻 실습 `randomcolor`

```shell
npm i randomcolor
```

```js
import randomColor from "randomcolor"  // 👈🏻 경로는 필요없고 해당 라이브러리만 기재해주면 된다.
```

#### 📌 [참고사항] package.json 파일이 있기 때문에 node_modules는 공유하지 않아도 된다
