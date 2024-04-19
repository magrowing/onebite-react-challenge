import '../styles/Viewer.scss';

import getEmotionImages from '../utils/getEmotionImages';

import { emotionList } from '../fixtures/emotionList';

import { DiaryItemType } from '../types';

type ViewerProps = {
  diaryItem: DiaryItemType;
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
