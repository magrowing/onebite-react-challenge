import '../styles/Button.scss';

type ButtonProps = {
  text: string;
  styleType?: string;
  onClick: () => void;
};

function Button({ text, styleType = 'DEFAULT', onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={`Button Button__${styleType}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
