import { useState, useRef } from 'react';

import './App.css';

type CurrenyInputProps = {
  label: string;
  change: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function CurrenyInput({ label, change, onChange }: CurrenyInputProps) {
  const id = useRef(`${label}`);
  return (
    <div>
      <label htmlFor={id.current}>{label} : </label>
      <input type="number" id={id.current} value={change} onChange={onChange} />
    </div>
  );
}

function App() {
  const [change, setChange] = useState({
    KRW: 0,
    USD: 0,
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.id === 'KRW') {
      setChange({ KRW: Number(value), USD: Number(value) / 1300 });
    } else {
      setChange({ KRW: Number(value) * 1300, USD: Number(value) });
    }
  };

  return (
    <article>
      <h1>환율 변환기(KRW-USD)</h1>
      <CurrenyInput
        label={'KRW'}
        change={change.KRW}
        onChange={handleOnChange}
      />
      <CurrenyInput
        label={'USD'}
        change={change.USD}
        onChange={handleOnChange}
      />
    </article>
  );
}

export default App;
