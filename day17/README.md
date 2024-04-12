# Context

## 1.Context

- 컴포넌트간의 데이터를 전달하는 또 다른 방법
- 기존의 Props가 가지고 있던 담점을 해결 할 수 있음.

> React 부모에서 자식으로 props를 통해 데이터를 전달하는 단반향 데이터 흐름을 가지고 있다. 계층구조로 이루어진 컴포넌트들에게 props를 데이터를 전달하게 되면 중간 컴포넌트는 사용하지도 않는 데이터를 전달하기 위해 전달 받아야 하는 문제가 생긴다. 이를 Props Drilling 이라고 한다. 이를 해결하기 위한 방법으로 별도 전역에 데이터를 전달하기 위한 별도의 저장소를 두고 저장소에서 데이터를 받아와 사용하는걸 `Context`부른다.

<br/>

## 2.Context 사용하기

- 사용하기 위해서는 컴포넌트 외부에서 `createContext`를 통해 생성

```jsx
import { createContext } from 'react';

export const TodoContext = createContext(/초기값/); // 👈🏻 초기값이 없다면 생략 가능 
```

- 생성한 Context를 데이터가 필요한 컴포넌트의 `Provider` 컴포넌트로 감싸준다.
- `value={전달할 데이터}`

```jsx
<TodoContext.Provider value={{ todoList, onCreate, onDelete, onUpdate }}>
  <Editor />
  <List />
</TodoContext.Provider>
```

- Provider 컴포넌트로 감싼 자식 컴포넌트에서 사용하기 위해서는 `useContext`를 이용해 데이터 가져온다.

```jsx
// Editor.tsx

import { useContext } from 'react';

import { TodoContext } from '../App';  // 👈🏻 생성했던 Context 불러오고 

export default function Editor() {

const { onCreate } = useContext(TodoContext); // 👈🏻 useContext의 함수 인자로 생성했던 Context 사용하고 구조분해할당을 통해 데이터 공급 받는다.

  // ...(중략)...
}
```

<br/>

## 3.Context 분리하기

### 🚨 문제 발생

React.memo를 통해 최적화 했던 ListItem 컴포넌트가 Context Provider를 통해 공급받아 사용하니, 형제요소 모두 전체가 리렌더링 되는 상황이 발생하기 되었다. 그이유는 TodoContext.Provider value={{}}를 통해 객체를 통해 전달하게 되고 객체안에 TodoList가 변경하게 되면 Provider 컴포넌트 또한 상태값이 변경되었다고 인지하기 때문에 리렌더링 되고, Provider로 데이터를 공유하고 있는 자식 컴포넌트도 리렌더링 하게 된다. useContext를 통해 공급받는 데이터 객체가 다시 생성하게 되면서 최적화가 풀리게 된 것이다.

### 💡 해결 방법

- 하나의 Context를 변경되는 값과 변경되지않는 값을 기준으로 분리한다.

#### TodoStateContext

- TodoList 상태 값을 가지고 공급하는 Context 생성

#### TodoDispatchContext

- TodoList 상태를 변화시키는 함수들을 가지고 공급하는 Context 생성

### 별도의 파일로 분리 후 작업 진행

- Typescript 사용중이여서 별도 파일로 분리하여 context 적용

```jsx
import { createContext, useContext } from 'react';

import { DispatchContextType, TodoItemType } from '../types';


export const TodoStateContext = createContext<TodoItemType[] | null>(null); 
export const TodoDispatchContext =
  createContext<DispatchContextType | null>(null);



export const useTodoState = () => {
  const value = useContext(TodoStateContext)

  if (!value) {
    throw new Error('cannot find useTodoState');
  }

  return value
}


export const useTodoDispatch = () => {
  const value = useContext(TodoDispatchContext)

  if (!value) {
    throw new Error('cannot find useTodoDispatch');
  }

  return value
}
```
