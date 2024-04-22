# 프로젝트3. 감정일기장

## 17. 웹 스토리지 이용하기

### 감정일기장은 최적화 하지 않는다

- 주로 최적화를 하는건 비용이 많이 드는 계산 (API와 관련된 부분들에서 주로 최적화 한다.)

### 웹 스토리지(Web Storage)

- 웹 브라우저에 기본적으로 내장되어 있는 데이터베이스
- 자바스크립트 내장함수를 사용해서 접근 가능
  - 값을 저장 : localStorage.setItem(key,value)
  - 값을 꺼냄 : localStorage.getItem(key)
- 웹 스토리지 종류
  - SessionStorage : 브라우저 탭별로 데이터 보관, 탭이 종료되기 전에는 데이터 유지,
  - localStorage : 사이트 주소별로 데이터 보관, 사용자가 직접 삭제하기 전까지 데이터 보관

#### LocalStorage

- 값을 저장 :  value 문자열로 변환해서 저장해야한다.
- `JSON.stringify`

```js
  localStorage.setItem('test', 'hello');
  localStorage.setItem('person', JSON.stringify({ name: '홍길동' }));
```

- 값을 꺼냄 :  value 값을 가져오기 위해서는 `JSON.Parse`
- 🚨 JSON.parse() 안의 인수는 undefined/null 라면 Error 발생

```js
  console.log(JSON.parse(localStorage.getItem('test') ?? 'null'));
  console.log(JSON.parse(localStorage.getItem('test') ?? ''));
```

- 값을 삭제

```js
  localStorage.removeItem('test');
```

### LocalStorage 감정일기장 Date 저장

#### 1. Reducer 함수 수정

```jsx
import { ActionType, TodoItemType } from '../types';

export function reducer(state: TodoItemType[], action: ActionType): TodoItemType[] {
  let nextState;  // 👈🏻 일기생성, 수정,삭제된 state값을 저장하기 위해 생성 
  switch (action.type) {
    case 'INIT': { // 👈🏻 일기 데이터 초기값 
      return  action.initData ?? []
    }
    case 'CREATE': {
      nextState =  action.data ? [action.data, ...state] : state;
      break;
    }
    case 'UPDATE': {
      nextState =  state.map((item) =>
        String(item.id) === String(action.data ? action.data.id : item.id)
          ? action.data
            ? action.data
            : item
          : item
      );
      break;
    }
    case 'DELETE': {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break
    }
    default:
      return state;
  }
  localStorage.setItem('diary', JSON.stringify(nextState)); // 생성,수정, 삭제된 일기 데이터를 LocalStorage 저장  
  return nextState; // 컴포넌트에서 DiaryStateContent으로부터 전달해줄 data를 의미 
}
```

#### 2. App 컴포넌트내에 useEffect 이용 로컬스토리지의 초기값 생성

```jsx
useEffect(() => {
    const storedData = localStorage.getItem('diary'); // 로컬스토리지로부터 데이터 가져오기 
    if (!storedData) { // 만약 'diary' 의 value 값이 undefined라면 useEffect 종료 
      return;
    }

    const parsedData = JSON.parse(storedData); // 'diary'의 value 값이 undefined이 아니면 parsedData에 저장 

    if (!Array.isArray(parsedData)) { // 'diary' 의 value 값이 배열이 아니라면 useEffect 종료 
      return;
    }

    let maxId = 0; // 로컬스토리지 담긴 배열의 요소에서 ID값 중 가장 큰수의 ID값을 추출
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1; // 가장 큰수의 ID값을 추출해서 생성될 ID값의 + 1

    dispatch({  // 해당 함수를 통해 일기 데이터 초기값 추가 
      type: 'INIT',
      initData: parsedData,
    });
  }, []);
```

#### 3. App 컴포넌트 내에 로딩 처리

App 컴포넌트 내에 useEffect로 로컬스토리지의 초기값을 생성하고 해당 값을 자식컴포넌트가 useContext로 부터 공금받는데, 공급받기도 전 컴포넌트가 렌더링 되면서 일기데이터가 있음에도 불구하고 새로고침하게 되면 일기 데이터 초기값을 기준으로 렌더링 되어 찾을 수 없어 로딩 처리

```jsx
const [isLoading, setIsLoading] = useState(true); // 👈🏻 해당 상태 추가 

useEffect(() => {
  const storedData = localStorage.getItem('diary');
  if (!storedData) {
    setIsLoading(false);
    return;
  }
  const parsedData = JSON.parse(storedData);
  if (!Array.isArray(parsedData)) {
    setIsLoading(false);
    return;
  }

  let maxId = 0;
  parsedData.forEach((item) => {
    if (Number(item.id) > maxId) {
      maxId = Number(item.id);
    }
  });

  idRef.current = maxId + 1;

  dispatch({
    type: 'INIT',
    initData: parsedData,
  });
  setIsLoading(false);
}, []);

if (isLoading) { // 👈🏻 처음 렌더링시 해당 조건 실행 후 App 컴포넌트가 렌더링(마운트 되면)된 이후 false로 인해 실생 X 
  return <div>Loading.....</div>; 
}

return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
```

<br/>

## 18. 배포 준비하기

- 페이지 타이틀
- 파비콘
- 오픈 그래프 (Open Graph)
  - 웹 사이트의 링크를 공유 할 때 썸네일,제목 등의 정보를 노출 하는 것
- 프로젝트 빌드

### 페이지 타이틀

- index.html 의 `title` 변경

```html
  <title>감정 일기장</title>
```

#### 🤔 페이지들 마다 title을 변경하고 싶다면?

- CustomHook을 생성 후 인자로 타이틀 이름을 받고 실행 함수 호출

```jsx
import { useEffect } from 'react';

function usePageTitle(title: string) {
  useEffect(() => {
    const $title = document.getElementsByTagName('title')[0];
    $title.innerText = title;
  }, [title]);
}

export default usePageTitle;
```

### 오픈 그래프 (Open Graph)

```html
  <meta property="og:title" content="감정일기장" />
  <meta property="og:description" content="나만의 감정일기장" />
  <meta property="og:image" content="/thumbnail.png" />
```

<br/>

## 19. 배포하기

### Vercel 통해 배포

- 회원가입 후 Vscode 터미널로 vercel 로그인

```shell
vercel login
```

- vercel 통한 배포

```shell
vercel
```
