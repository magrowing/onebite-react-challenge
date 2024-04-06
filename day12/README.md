# React.js 입문

## 9. State로 사용자 입력 관리하기 - 2

### 여러개의 상태를 하나의 객체로 관리하는 방식으로 변경

```jsx
type InputType = {
  name: string;
  birth: string;
  country: string;
  bio: string;
};

const nullInput: InputType = {  // 👈🏻 하나의 객체로 상태를 관리  
  name: '',
  birth: '',
  country: '',
  bio: '',
};

const Register = () => {
  const [input, setInput] = useState(nullInput); // 👈🏻 하나의 객체로 상태를 관리  
}

// ..(중략)...
```

### 중복으로 보이는 이벤트핸들러도 통합하는 방식으로 변경

```jsx
const Register = () => {
  const [input, setInput] = useState(nullInput);

  const handleOnChange = (e: React.ChangeEvent<any>) => {
    setInput({ ...input, [e.target.name]: e.target.value });  // 👈🏻  []표기법으로 변경한 방식 
  };

  return (
    <div>
      <p>
        <input
          type="text"
          placeholder={'이름'}
          name="name"
          value={input.name}
          onChange={handleOnChange}
        />
      </p>
      <p>
        <input
          type="date"
          name="birth"
          value={input.birth}
          onChange={handleOnChange}
        />
      </p>
      <p>
        <select name="country" value={input.country} onChange={handleOnChange}>
          <option value={''}>국적을 선택해주세요!</option>
          <option value={'kr'}>한국</option>
          <option value={'us'}>미국</option>
          <option value={'uk'}>영국</option>
        </select>
      </p>
      <div>
        <textarea
          name="bio"
          placeholder="자기소개를 입력해주세요."
          value={input.bio}
          onChange={handleOnChange}
        ></textarea>
      </div>
    </div>
  );
};

export default Register;
```

<br>

## 10. useRef로 컴포넌트의 변수 생성하기

### useRef

- 새로운 Reference 객체를 생성하는 기능
- 특정 요소(DOM)를 조작할 수 있는 기능
- 리렌더링은 일어나지 않아, 렌더링과 관련 없는 변수를 생성할 때 활용

```jsx
  const refObject = useRef('초기값을 넣을 수 있음');
  // {current : 초기값} 반환
```

<br/>

## 11. React Hooks

- 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 도와주는 메서드들을 의미
- 이름앞에 동일한 접두사 `use`가 붙는 특징을 가지고 있다.

> 2017년도 이전의 React.js에서는 클래스만 사용해 컴포넌트를 만들었다. 클래스 컴포넌트는 모든 기능을 이용할 수 있었고, 함수 컴포넌트는 UI렌더링하는것 외에는 아무런 기능도 쓸 수 없었다.클래스 문법을 사용하는 클래스 컴포넌트는 함수컴포넌트에 비하면 코드가 굉장히 복잡했다. 그래서 많은 사람들은 클래스 보다 문법이 훨씬 간결한 함수 컴포넌트에서도 리액트의 모든 기능을 이용할 수 있기를 바랬고, 리액트 개발팀 역시 이런한 요구를 가지고 있어 마치 클래스 컴포넌트의 기능을 낚아채듯이 가져와 사용할 수 있도록 hooks 라는 기능이 개발되었다.

### 특징

- 함수 컴포넌트 내부에서만 호출 될 수 있다.
- 조건문, 반목문 내부에서는 호출 불가
  - if,for문에서 사용되게 되면 호출 순서를 보장 할 수 없기 때문에
- `use`라는 접두사를 이용해서 CustomHooks을 만들 수 있다.
