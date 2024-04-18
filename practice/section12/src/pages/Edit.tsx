import { useParams, useNavigate } from 'react-router-dom';

import NotFound from './NotFound';

import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

import {
  useDiaryDispatchContext,
  useDiaryStateContext,
} from '../hooks/useContext';

import getDiaryItem from '../utils/getDiaryItem';

import { onCreateType } from '../types';

const Edit = () => {
  const param = useParams();
  const navigate = useNavigate();

  const data = useDiaryStateContext();
  const { onDelete, onUpdate } = useDiaryDispatchContext();

  const diaryItem = getDiaryItem(data, param.id);

  const onSubmit = (input: onCreateType) => {
    onUpdate(
      Number(param.id),
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    );
    navigate('/', { replace: true });
  };

  if (!diaryItem) {
    return (
      <article>
        <NotFound />
      </article>
    );
  }

  return (
    <article>
      <Header
        title="일기 수정하기"
        leftChild={
          <Button
            text={'< 뒤로가기'}
            onClick={() => {
              navigate(-1);
            }}
          />
        }
        rightChild={
          <Button
            text={'삭제하기'}
            styleType="NEGATIVE"
            onClick={() => {
              onDelete(Number(param.id));
              navigate('/', { replace: true });
            }}
          />
        }
      />
      <Editor onSubmit={onSubmit} diaryItem={diaryItem} />
    </article>
  );
};

export default Edit;
