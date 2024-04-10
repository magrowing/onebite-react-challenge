import { forwardRef } from 'react';

type TextFieldProps = {
  className: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, placeholder, value, onChange, onKeyDown }, ref) => {
    return (
      <input
        type="text"
        ref={ref}
        id={className}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    );
  }
);

export default TextField;
