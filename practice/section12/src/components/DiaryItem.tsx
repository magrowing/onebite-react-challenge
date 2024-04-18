import { useNavigate } from 'react-router-dom';

import Button from './Button';

import { getEmotionImages } from '../utils/get-emotion-images';

import { TodoItemType } from '../types';

type DiaryItemProps = {
  item: TodoItemType;
};

export default function DiaryItem({ item }: DiaryItemProps) {
  const { id, emotionId, createdDate, content } = item;
  const navigate = useNavigate();
  return (
    <li className="DiaryItem">
      <figure
        className={`emotion-img emotion-img__${emotionId}`}
        onClick={() => {
          navigate(`/diary/${id}`);
        }}
      >
        <img src={getEmotionImages(emotionId)} alt="감정 이미지" />
      </figure>
      <dl
        className="info"
        onClick={() => {
          navigate(`/diary/${id}`);
        }}
      >
        <dt className="info__date">
          {new Date(createdDate).toLocaleDateString()}
        </dt>
        <dd className="info__content">{content}</dd>
      </dl>
      <div className="btn">
        <Button
          text="수정하기"
          onClick={() => {
            navigate(`/edit/${id}`);
          }}
        />
      </div>
    </li>
  );
}
