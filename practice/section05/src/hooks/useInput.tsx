import { useState } from 'react';

function useInput(): [string, (e: React.ChangeEvent<any>) => void] {
  const [state, setState] = useState('');

  const onChange = (e: React.ChangeEvent<any>) => {
    setState(e.target.value);
  };

  return [state, onChange];
}

export default useInput;
