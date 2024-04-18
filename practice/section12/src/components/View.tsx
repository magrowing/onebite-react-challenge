import EmotionItem from './EmotionItem';

import { TodoItemType } from '../types';

import emotionList from '../mocks/emotionList';

type ViewProps = {
  diaryItem: TodoItemType;
};

function View({ diaryItem }: ViewProps) {
  const { emotionId, content } = diaryItem;
  return (
    <section className="View">
      <div className="View__emotion">
        <h4>오늘의 감정</h4>
        <ul>
          <EmotionItem item={emotionList[emotionId - 1]} isSelected={true} />
        </ul>
      </div>
      <div className="View__content">
        <h4>오늘의 일기</h4>
        <textarea value={content} readOnly>
          {content}
        </textarea>
      </div>
    </section>
  );
}

export default View;
