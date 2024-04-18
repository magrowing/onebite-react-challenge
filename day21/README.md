# 프로젝트3. 감정일기장

## 13. New 페이지 구현하기 - 1. UI

- Header 컴포넌트
- Editor 컴포넌트
- EmotionItem 컴포넌트

## 14. New 페이지 구현하기 - 2. 기능

### Editor 컴포넌트

#### `getStringedDate` 유틸 함수 생성

- input[type='date'] 의 value는 `YYYY-MM-DD` string 으로 변화해야한다.

```ts
/* eslint-disable prefer-const */
function getStringedDate(targetDate : Date){
  const year = targetDate.getFullYear(); 
  let month = String(targetDate.getMonth() + 1); 
  let date = String(targetDate.getDate()); 

  if(Number(month) < 10 ){
    month = `0${month}`; 
  }

  if(Number(date) < 10 ){
    date = `0${date}`; 
  }

  return `${year}-${month}-${date}`
}

export default getStringedDate;
```

#### 컴포넌트에서는 이벤트객체는 자동 전달이 되지 않는다

- 컴포넌트는 함수를 호출시켜서 이벤트를 강제 발생하도록 만들어줘햐 한다.
  - 컴포넌트는 이벤트 객체가 자동으로 전달 되지 않는다.

```jsx
<div className="Editor__emotion">
  <h4>오늘의 감정</h4>
  <ul>
    {EmotionList.map((item) => {
      const key = `emotion${item.emotionId}`;
      return (
        <EmotionItem
          key={key}
          item={item}
          isSelected={item.emotionId === input.emotionId}
          onClick={() =>
            onChangeInput({  // 👈🏻 컴포넌트는 이벤트 객체가 전달되지 않으므로 강제로 지정 
              target: {
                name: 'emotionId',
                value: String(item.emotionId),
              },
            })
          }
        />
      );
    })}
  </ul>
</div>
```

> 이벤트 객체란 이벤트가 일나는 요소 자체를 의미한다. 위의 코드를 보면 EmotionItem은 컴포넌트이다. 컴포넌이기 때문에 별도의 이벤트 객체를 가지고 있지 않기에 onClick props를 통해 onChangeInput()함수의 인자에 강제로 이벤트 객체를 선언해주고 클릭시 해당 함수가 처리 되어 이벤트가 발생시키도록 적용해주었다.
