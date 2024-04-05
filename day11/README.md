# React.js 입문

## 5. 이벤트 처리하기

### Event Handling

- `Event` : 웹 내부에서 발생하는 사용자의 행동
  - 버튼,스크롤
- `Handling` : 처리하다.

> 즉, 이벤트가 발생했을 때 그것을 처리하는 것.

### 이벤트 객체

- 합성 이벤트
  - 브라우저별로 스펙이 달라 발생하는 문제를 해결하기 위해 나온 개념
  - 브라우저마다 통일된 규칙(규격) 만들어 이벤트 처리 할 수 있다.

<br/>

## 6. State로 상태관리하기

> 📖 State : 현재 가지고 있는 형태나 모양을 정의, 변화할 수 있는 동적인 값

- state 값에 따라 다른 UI 구현 할 수 있다.
- state 값에 따라 화면 변화되는 상황을 `리렌더`, `리렌더링`이라고 한다.

### useState

- 함수형 컴포넌트에서 state를 사용하기 위한 hooks

```jsx
import { useState } from 'react';
import './App.css';

function App() {
  const state = useState(0);
  console.log(state);  // [0, ƒ] 초기값, 상태변화함수 
  return <></>;
}

export default App;
```

### 리렌더링 (Re-Rendering)

- state 값이 변경되게 되면 다시 App()함수를 실행하고 return문을 반환하게 되면서 화면을 다시 그리게 된다.

```jsx
import { useState } from 'react';

import './App.css';

function App() {
  const [state, setState] = useState(0);
  return (
    <>
      <h1>{state}</h1>
      <button
        type="button"
        onClick={() => {
          setState(state + 1);
        }}
      >
        +버튼
      </button>
    </>
  );
}

export default App;
```

### 🤔 일반 변수를 사용하면 되지 않나요?

- 일반변수는 화면을 업데이트 하지 않는다.

```jsx
import { useState } from 'react';

import './App.css';

function App() {
  const [light, setLight] = useState('OFF');
  let lightVar = 'OFF';

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          type="button"
          onClick={() => {
            setLight(light === 'ON' ? 'OFF' : 'ON');
          }}
        >
          {light === 'ON' ? '끄기' : '켜기'}
        </button>
        <button
          type="button"
          onClick={() => {
            setLight(light === 'ON' ? 'OFF' : 'ON');
          }}
        >
          {lightVar === 'ON' ? '끄기' : '켜기'} // 👈🏻 일반변수는 화면을 업데이트 해주지 않는다.
        </button>
      </div>
    </>
  );
}

export default App;
```

<br/>

## 7. State 와 Props

- 부모 컴포넌트의 내의 state을 자식 컴포넌트의 props로 전달 할 수 있다.
  - 부모 컴포넌트로 전달받은 props가 변경되게 되면 자식 컴포넌트는 리렌더링 된다.  

### 컴포넌트의 Rerendering 상황

1. 컴포넌트 내의 state 값 변경
2. 컴포넌트 내의 전달 받은 props 값이 변경
3. 부모컴포넌트의 렌더링이 일어나면 자식 컴포넌트도 변경

### 불필요한 리렌더링을 피하기 위한 방법

- state도 각각의 컴포넌트내로 변경

```jsx
import { useState } from 'react';

import './App.css';

const Bulb = () => {
  const [light, setLight] = useState('OFF');
  return (
    <div>
      <h1 style={{ backgroundColor: `${light === 'ON' ? 'orange' : 'gray'}` }}>
        {light === 'ON' ? 'ON' : 'OFF'}
      </h1>
      <button
        type="button"
        onClick={() => {
          setLight(light === 'ON' ? 'OFF' : 'ON');
        }}
      >
        {light === 'ON' ? '끄기' : '켜기'}
      </button>
    </div>
  );
};

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +버튼
      </button>
    </div>
  );
};

function App() {
  return (
    <>
      <Bulb />
      <Count />
    </>
  );
}

export default App;
```

- 컴포넌트를 별도의 파일로 분리
  - src/components/Count.tsx
  - src/components/Count.tsx

<br/>

## 8. State로 사용자 입력 관리하기 - 1

입력폼을 생성함에 따라 각각의 state 와 이벤트 핸들러 함수 생성

### input

- type : text, date
- value, onChange

### select

- value , onChange

### textarea

- value, onChange
