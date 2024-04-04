import { ReactElement } from 'react';

type ButtonProps = {
  text: string;
  color?: string;
  children?: ReactElement;
};

const Button = ({ text, color, children }: ButtonProps) => {
  return (
    <button type="button">
      {text} - {color}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'black',
};

export default Button;
