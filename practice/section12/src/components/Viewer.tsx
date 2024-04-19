import '../styles/Viewer.scss';

import { emotionList } from '../utils/constants';
import { getEmotionImages } from '../utils/get-emotion-images';

import { TodoItemType } from '../types';

type ViewerProps = {
  diaryItem: TodoItemType;
};

export default function Viewer({ diaryItem }: ViewerProps) {
  const { emotionId, content } = diaryItem;
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <section className="Viewer">
      <div className="Viewer__emotion">
        <h4>오늘의 감정</h4>
        <div
          className={`Viewer__emotion-area  Viewer__emotion-area${emotionId}`}
        >
          <img src={getEmotionImages(emotionId)} alt="감정이미지" />
          <span>{emotionItem?.emotionName}</span>
        </div>
      </div>
      <div className="Viewer__content">
        <h4>오늘의 일기</h4>
        <p>{content}</p>
      </div>
    </section>
  );
}
