# useReducer

## useReducer

- 컴포넌트 내부에 새로운 state를 생성하는 hook
- 모든 useState는 useReducer로 대체 가능
- 👉🏻 장점 : __상태관리 코드를 컴포넌트 외부로 분리할 수 있음__

### 사용법

```jsx
const [state, dispatch] = useReducer(reducer, 초기값); 
```

- `state` : 초기값이 담긴 상태
- `dispatch` : 상태변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  - 인수로 상태가 어떻게 변화되길 원하는지 `액션객체`를 통해 전달
- `reducer` : 상태를 실제로 변화시키는 함수

```jsx

import { useReducer } from 'react';

// reducer : 변환기
// 상태를 실제로 변화시키는 변환기 역활
function reducer(state, action){
  console.log(state, action);
  switch (action.type) {
    case 'INCREASE': {
      return state + action.data;
    }
    case 'DECREASE': {
      return state - action.data;
    }
    default: {
      //throw new Error('reducer fail');
      return state;
    }
  }
}

function Exam() {
  // dispatch : 발송하다. 급송하다.
  // 상태변화가 있어야 한다는 사실을 알리는 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);
  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    // 액션객체를 통해 전달
    dispatch({
      type: 'INCREASE',
      data: 1,
    });
  };
  const onClickMinus = () => {
    dispatch({
      type: 'DECREASE',
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button type="button" onClick={onClickPlus}>
        +
      </button>
      <button type="button" onClick={onClickMinus}>
        -
      </button>
    </div>
  );
}

export default Exam;
```

<br/>

## TodoList App Upgrade

- useState를 사용했지만 useReducer 이용하도록 변경

### 상태의 변화를 일으키는 함수 reducer

```jsx
const reducer = (state: TodoItemType[], action: actionType): TodoItemType[] => {
  switch (action.type) {
    case 'CREATE': {
      return action.data ? [action.data, ...state] : state;
    }
    case 'UPDATE': {
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    }
    case 'DELETE': {
      return state.filter((item) => item.id !== action.targetId);
    }
    default:
      return state;
  }
};
```

### CREATE

```jsx
const onCreate = (content: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  };
```

### UPDATE

```jsx
const onUpdate = (targetId: number) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  };
```

### DELETE

```jsx
const onDelete = (targetId: number) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  };
```
