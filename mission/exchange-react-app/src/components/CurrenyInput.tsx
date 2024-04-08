import { useRef } from 'react';

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

export default CurrenyInput;
