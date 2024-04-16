import '../styles/Button.scss';

type ButtonProps = {
  text: string;
  styleType?: string;
  onClick: () => void;
};

export default function Button({
  text,
  styleType = 'DEFAULT',
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`Button Button_${styleType}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
