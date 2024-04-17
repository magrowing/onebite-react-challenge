# 프로젝트3. 감정일기장

## 10. HOME 페이지 구현하기 - 1. UI

### Markup 및 스타일링

- Header 컴포넌트
- DiaryList 컴포넌트
- DiaryItem 컴포넌트

## 11. HOME 페이지 구현하기 - 2. 기능

### 1) Header 컴포넌트 기능 구현

- new Date()를 사용해서 현재 기준의 `년`과`월`을 화면 출력

```jsx
const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date()); // 👈🏻 화면출력을 위한 상태 생성

  return (
    <article className="Home">
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`} // 👈🏻 state를 통해 화면 출력 
        leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
      />
      <DiaryList />
    </article>
  );
};
```

- `<`, `>` 버튼 기능 구현
  - 이전 버튼 클릭시 `이전달`이 화면에 출력되도록 함수 생성
  - 다음 버튼 클릭시 `다음달`이 화면에 출력되도록 함수 생성

```jsx
const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)); // 👈🏻 새롭게 newDate()를 사용해서 인자로 현재기준의 년도와 현재기준의 월에서 -1을 한 이전달로 생성 
  };

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)); // 👈🏻 새롭게 newDate()를 사용해서 인자로 현재기준의 년도와 현재기준의 월에서 +1을 한 이전달로 생성 
  };

  return (
    <article className="Home">
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
      />
      <DiaryList />
    </article>
  );
};
```

### 2) DiaryList 컴포넌트 props로 현재월의 기록된 일기 데이터 전달

- 현재월의 기록된 일기 데이터 전달하기 위해 context로부터 `data` 객체를 공급받기 위해 export 추가 작업

```jsx
// App.tsx

// ...(중략)...
export const DiaryStateContext = createContext<TodoItemType[]>([]);  // 👈🏻 export 추가 작업 
export const DiaryDispatchContext = createContext({});

export default function App() {
  const [data, dispatch] = useReducer(reducer, mockDate);
  const idRef = useRef(3);

  // ...(중략)...

  return (
    <DiaryStateContext.Provider value={data}>  // 👈🏻 공급받은 `data` 객체를 사용하기 위해 
      <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/editor/:id" element={<Editor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}
```

- `useContext()`로부터 공급받은 `Data` 객체를 필터링하기 위한 유틸 함수 생성
  - `getMonthlyData` 함수의 인자로 Data,pivotDate 전달
  - Data에서 createdDate을 기준으로 월의 시작일과 월의 마지막일 사이의 데이터들만 필터링 해서 반환

```ts
import { TodoItemType } from '../types';

const getMonthlyData = (data: TodoItemType[], pivotDate: Date) => {
  const beginTime = new Date( // 👈🏻 new Date() 의 인자를 pivotDate기준으로 년,월,일(월의 시작일),시간,분,초 설정해주고 타임스탬프처리 
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date( 
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1, // 다음월 
    0, // 다음월의 시작은 1이니깐 이달의 마지막달을 구하기 위해서는 0으로 기재
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

export default getMonthlyData;
```

- 필터링한 `Data` MonthlyData를 DiaryList 컴포넌트의 props로 전달

### 3) props로 전달받은 Data로 ListItem 컴포넌트 리스트 반환

### 4) 각각의 페이지로 이동되도록 `useNavigate()` 사용해서 처리

```jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

onClick={() => {navigate(`/diary/${id}`);}}
onClick={() => {navigate(`/editor/${id}`);}}
```

### 5) `새일기쓰기` 버튼 클릭시 /new 페이지로 이동되도록  `useNavigate()` 사용해서 처리

```jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

onClick={() => {navigate('/new');}}
```

### 6) 일기리스트 정렬 필터 구현

- getSortedDate() 함수를 통해 createDate 기준으로 필터링

```jsx
import { TodoItemType } from '../types';

const getSortedDate = (data: TodoItemType[], sortType: string) : TodoItemType[] => {
  return data.toSorted((a,b) => {
    if (sortType == 'latest') {
      return Number(b.createdDate) - Number(a.createdDate);
    } else {
      return Number(a.createdDate) - Number(b.createdDate);
    }
  });
};

export default getSortedDate;
```

#### 🚨 Typescript 오류 해결

> Property 'toSorted' does not exist on type 'TodoItemType[]'

`'TodoItemType[]' 유형에 'toSorted' 속성이 존재하지 않습니다.`라는 문구가 출력되면서 타입스크립 오류 발견되어 해결방법을 찾아보니, `tsconfig.json` 파일내의 `compilerOptions` : `ESNext.Array` 추가하면 된다는 글을 stack overflow 찾을 수 있었다. 무슨 의미인지 찾아보니 `lib`는 타입스크립트 파일을 어떤 버전의 자바스크립트 파일로 바꿔줄지 정하는 부분이다. toSorted는 자바스크립트의 신버전이므로 ESNext.Array로 설정해두면 신버전의 자바스크립트로 컴파일을 반환해준다.

```json
{
  "compilerOptions": {
    "lib": ["ESNext.Array","etc..."]
  }
}
```

<br/>

## 12.HOME 페이지 구현하기 - 3. 회고

### 구현이 어려웠던 점

- header영역의 `new Date()` 사용해서 기능 구현하는 부분
- 월의 첫번째일과 마지막일을 구하는 방식
