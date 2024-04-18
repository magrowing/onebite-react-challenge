import '../styles/EmotionItem.scss';

import { getEmotionImages } from '../utils/get-emotion-images';

type EmotionItemProps = {
  item: {
    emotionId: number;
    emotionName: string;
  };
  isSelected: boolean;
  onClick: () => void;
};

export default function EmotionItem({
  item,
  isSelected,
  onClick,
}: EmotionItemProps) {
  const { emotionId, emotionName } = item;
  return (
    <li>
      <button
        type="button"
        className={`EmotionItem ${
          isSelected ? `EmotionItem__On${emotionId}` : ''
        }`}
        onClick={onClick}
      >
        <img src={getEmotionImages(emotionId)} className="EmotionItem__img" />
        <span className="EmotionItem__name">{emotionName}</span>
      </button>
    </li>
  );
}
