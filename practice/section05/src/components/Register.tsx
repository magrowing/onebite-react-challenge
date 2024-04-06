// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useRef, useState } from 'react';

type InputType = {
  name: string;
  birth: string;
  country: string;
  bio: string;
};

const nullInput: InputType = {
  name: '',
  birth: '',
  country: '',
  bio: '',
};

const Register = () => {
  const [input, setInput] = useState(nullInput);
  const countRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (e: React.ChangeEvent<any>) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (input.name === '') {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current?.focus();
    }
  };

  return (
    <div>
      <p>
        <input
          ref={inputRef}
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
      <button type="button" onClick={onSubmit}>
        제출
      </button>
    </div>
  );
};

export default Register;
