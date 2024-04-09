import { forwardRef } from 'react';

type TextFieldProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ placeholder, value, onChange, onKeyDown }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    );
  }
);

export default TextField;
