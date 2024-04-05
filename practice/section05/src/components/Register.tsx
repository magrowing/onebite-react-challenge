// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <p>
        <input
          type="text"
          placeholder={'이름'}
          value={name}
          onChange={onChangeName}
        />
      </p>
      <p>
        <input type="date" value={birth} onChange={onChangeBirth} />
      </p>
      <p>
        <select value={country} onChange={onChangeCountry}>
          <option value={''}>국적을 선택해주세요!</option>
          <option value={'kr'}>한국</option>
          <option value={'us'}>미국</option>
          <option value={'uk'}>영국</option>
        </select>
      </p>
      <div>
        <textarea
          placeholder="자기소개를 입력해주세요."
          value={bio}
          onChange={onChangeBio}
        ></textarea>
      </div>
    </div>
  );
};

export default Register;
