import { useReducer } from 'react';

// reducer 변환기
// 상태를 실제로 변화시키는 변환기 역활
function reducer(
  state: number,
  action: { type: string; data: number }
): number {
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
