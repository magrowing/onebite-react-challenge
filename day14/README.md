# 프로젝트 2.Todo List

- 🔗 [Project Demo](https://chapter7-dun.vercel.app/)

## 개발 환경 준비

- vite 프로젝트 생성
  - React
  - TypeScript

## UI 구현하기

- 컴포넌트 디렉토리
  - Header.tsx
  - Editor.tsx
  - List.tsx
    - ListItem.tsx(TodoItem.tsx)

- 컴포넌트별 스타일링 적용

## 기능 구현 준비하기

- state가 존재 해야 하는 위치 확인
- 초기값 MockData 설정
  - type 설정

```jsx
const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    isDone: false,
    id: 2,
    content: 'TypeScript 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: 'Next.js 공부하기',
    date: new Date().getTime(),
  },
];
```

## Create - Todo 추가하기

### App.tsx

- `onCreate` 새로운 아이템을 추가하는 기능 구현
  - 고유의 아이디 값을 생성하기 위해서 `useRef` 사용  
  - newTodo 객체 생성 후 `setTodoList` 상태를 변화시키는 함수를 사용해 todoList 변경
  - `Editor` 컴포넌트 props로 전달  

```jsx
  const idRef = useRef(3);  // 👈🏻 추가되는 아이템마다 고유의 아이디를 부여하기 위해 사용
  const [todoList, setTodoList] = useState(mockData);

  const onCreate = (content: string) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };
    setTodoList([newTodo, ...todoList]);
  };
```

### Editor.tsx

- input의 상태 생성 및 onChange 이벤트 핸들러 생성
- props로 전달받은 함수를  `추가`버튼 이벤트 핸들러 생성하면서 사용

### ✅ 기능의 완성도를 높이는 작업

- input 입력하지 않는 경우 예외처리
- 추가 버튼 누른 다음 input 초기화 작업
- 입력 후 Enter 따라 추가버튼과 동일하게 동작하도록 처리

## Read - TodoList 렌더링 하기

### App.tsx

- todoList 상태값을 `List` 컴포넌트 props로 전달  

### List.tsx

- props로 전달 받은 todoList를 `map`메서드를 사용해서 순회하여 컴포넌트가 렌더링 되도록 적용
  - return 으로 반환되는 컴포넌트가 화면에 list로 렌더링 하게 된다.
  - `map` 메서드를 사용해서 순회 할 떄는 `key`값을 기재해주어야 한다.

```jsx
  <ul>
      {filteredTodoList.map((todo: TodoItemType, idx: number) => {
        const key = `TodoItem_${idx}`;
        return <ListItem key={key} todo={todo} onDelete={onDelete} />;
      })}
  </ul>
```

### ListItem.tsx

- props로 전달받은 `todo` 객체를 구조분해할당을 통해 사용

```jsx
function ListItem({ todo, onDelete }: ListItemProps) {
  const { id, isDone, content, date } = todo;
  return (
    <li className="ListItem">
      {/*<input type="checkbox" checked={isDone} readOnly/>*/} // 👈🏻 체크박스의 onChange 이벤트가 없어 경고하고 있음. readOnly를 통해 해결 가능
      <input type="checkbox" defaultChecked={isDone} />
      <p className="content">{content}</p>
      <p className="date">{new Date(date).toLocaleDateString()}</p>
      <button type="button" onClick={() => onDelete(id)}>
        삭제
      </button>
    </li>
  );
}
```

### 검색어를 입력하면 검색어가 있는 List만 노출 되도록 filtering 처리

- input의 상태를 관리하기 위해 새롭게 생성

```jsx
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
```

- 입력받은 search를 todoList배열의 객체의 content 포함하고 있는지 확인 후 배열로 반환
  - `filterTodoList` utils 함수로 분리

```jsx
import { TodoItemType } from '../types';

function normalize(text : string){
  return text.trim().toLocaleLowerCase();
}

function filterTodoList(todoList : TodoItemType[], search : string){
  const query = normalize(search); 

  if(!query){
    return todoList;
  }

  return todoList.filter((todo) => normalize(todo.content).includes(query));
}
export default filterTodoList;
```

## Update - Todo 수정하기

- todoList state의 값들 중에서 `targetId`와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열 반환
- `onUpdate`는 List 컴포넌트 props로 전달

```jsx
  const onUpdate = (targetId: number) => {
    const targetTodoList = todoList.map((todo) =>
      todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodoList(targetTodoList);
  };
```

## Delete - Todo 삭제하기

- todoList state의 값들 중에서 `targetId`와 일치하는 id를 갖는 요소의 데이터만 제외한 배열 반환
- `onDelete`는 List 컴포넌트 props로 전달

```jsx
  const onDelete = (id: number) => {
    const filterTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filterTodoList);
  };
```

<br/>

### 🔗 참고

- [test : 리액트 체크박스 에러 해결](https://velog.io/@khy226/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%B2%B4%ED%81%AC%EB%B0%95%EC%8A%A4-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0)
- [ref prop로 전달하기](https://dori-coding.tistory.com/entry/React-ref%EB%A5%BC-prop%EC%9C%BC%EB%A1%9C-%EB%84%98%EA%B8%B0%EA%B8%B0-forwardRef)
- [ref prop 전달시 Typescript 에러](https://seungddak.tistory.com/156)
- [typescript onKeyDown 이벤트 처리](https://minjs.tistory.com/2)
