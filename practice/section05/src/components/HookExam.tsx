// 3가지 hooks 관련 된 Tip
// 1. 함수 컴포넌트, 커스텀 hook 내부에서만 호출 가능
// 2. 조건문, 반목문 내부에서는 호출 불가
// 3. `use`라는 접두사를 이용해서 CustomHooks

import useInput from '../hooks/useInput';

const HookExam = () => {
  const [input, onInput] = useInput();
  const [input2, onInput2] = useInput();
  return (
    <div>
      <input type="text" value={input} onChange={onInput}></input>
      <input type="text" value={input2} onChange={onInput2}></input>
    </div>
  );
};

export default HookExam;
