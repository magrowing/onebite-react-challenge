# 프로젝트3. 감정일기장

## 15. Edit 페이지 구현하기

- Header 컴포넌트
- Editor 컴포넌트

### Header [삭제하기] 버튼

- 삭제 할 건지 묻는 confirm

```jsx
  const onClickDelete = () => {
    if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
      onDelete(Number(param.id));
      navigate('/', { replace: true });
    }
  };
```

### 존재하지 않는 일기의 아이템

- param.id 값과 일치하는 일기 데이터가 존재하지 않는 경우

```jsx
  const getCurrentDiaryItem = () => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(param.id)
    );
    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      navigate('/', { replace: true }); // 👈🏻 ❌ 해당 코드는 실행되지 않음. 
    }

    return currentDiaryItem;
  };

  const diaryItem = getCurrentDiaryItem(); // 👈🏻 컴포넌트가 렌더링 되기 전에 호출 하기 떄문에 


  return (
    <article>
      <Header
        title="일기 수정하기"
        leftChild={
          <Button
            text={'< 뒤로가기'}
            onClick={() => {
              navigate(-1);
            }}
          />
        }
```

#### 🚨 navigate() 함수가 실행되지 않는 이유

> You should call navigate() in a React.useEffect(), not when your component is first rendered.

React-router-Dom은 BrowserProvider로부터 url의 정보를 공급받는다. 즉, BrowserProvider 컴포넌트가 렌더링 된 후 navigate()를 실행하게 한다.
url의 정보를 공급받아야 함으로, 그러나 getCurrentDiaryItem() 함수는 컴포넌트가 렌더링 전에 실행되는 순서를 가지고 있다. 그렇기에 navigate('/') url의 정보를 알수 없기에 실행되지 않는다.  

#### 💡 해결방법 useEffect 사용해서 렌더링 된 후 해당 함수가 실행되도록 적용

```jsx
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(param.id)
    );

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      navigate('/', { replace: true });
    }

    setCurDiaryItem(currentDiaryItem ?? nullCurDiaryItem);
  }, [param.id, data]);
```

### Editor 컴포넌트 prop로 params.id 와 일치하는 아이템 전달

```jsx
  <Editor onSubmit={onSubmit} initData={curDiaryItem} />
```

### useEffect 사용해서 input의 상태값을 curDiaryItem 값으로 변경

```jsx
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);
```

## 16. Diary 페이지 구현하기

- Header 컴포넌트
- Viewer 컴포넌트

### useEffect() 영역을 CustomHook으로 만들어 재사용

```jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDiaryStateContext } from './useContext';

import { TodoItemType, nullCurDiaryItem } from '../types';

export default function useDiary(id: string) {
  const data = useDiaryStateContext();
  const [curDiaryItem, setCurDiaryItem] = useState<TodoItemType>(nullCurDiaryItem);
  const navigation = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      navigation('/', { replace: true });
    }

    setCurDiaryItem(currentDiaryItem ?? nullCurDiaryItem);
  }, [id, data]);

  return curDiaryItem;
}
```

### parm.id는 처음에 렌더링 될 때 `undefined` 되므로 조건 처리

```jsx
  if (curDiaryItem.id === -1) {
    return <div>로딩중...</div>;
  }
```
