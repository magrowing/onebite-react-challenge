import '../styles/AlertPopup.scss';

import Button from './Button';

type AlertPopupProps = {
  message: string;
  handlePopupClose: () => void;
  onComplete: () => void;
};

const AlertPopup = ({
  message,
  handlePopupClose,
  onComplete,
}: AlertPopupProps) => {
  return (
    <section className="AlertPopup">
      <div className="AlertPopup__wrap">
        <p className="AlertPopup__msg">{message}</p>
        <div className="AlertPopup__btn">
          <Button text="취소" onClick={handlePopupClose} />
          <Button text="확인" styleType="POSITIVE" onClick={onComplete} />
        </div>
      </div>
    </section>
  );
};

export default AlertPopup;
