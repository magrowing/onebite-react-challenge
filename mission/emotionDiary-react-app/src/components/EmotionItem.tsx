import '../styles/EmotionItem.scss';

import getEmotionImage from '../utils/getEmotionImages';

type EmotionItemProps = {
  item: {
    emotionId: number;
    emotionName: string;
  };
  isSelected: boolean;
  onClick: () => void;
};

function EmotionItem({ item, isSelected, onClick }: EmotionItemProps) {
  const { emotionId, emotionName } = item;
  return (
    <li>
      <button
        type="button"
        className={`EmotionItem  ${
          isSelected ? `EmotionItem__On${emotionId}` : ''
        }`}
        onClick={onClick}
      >
        <img
          src={getEmotionImage(emotionId)}
          alt="감정 이미지"
          className="EmotionItem__img"
        />
        <span className="EmotionItem__name">{emotionName}</span>
      </button>
    </li>
  );
}

export default EmotionItem;
