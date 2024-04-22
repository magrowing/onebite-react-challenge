/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

import { useDiaryDispatchContext } from '../hooks/useContext';
import useDiary from '../hooks/useDiary';

import { onCreateType } from '../types';

const Edit = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { onDelete, onUpdate } = useDiaryDispatchContext();

  const curDiaryItem = useDiary(param.id ?? '');

  if (curDiaryItem.id === -1) {
    return <div>로딩중...</div>;
  }

  // 일기 삭제 로직
  const onClickDelete = () => {
    if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
      onDelete(Number(param.id));
      navigate('/', { replace: true });
    }
  };

  const onSubmit = (input: onCreateType) => {
    if (window.confirm('일기를 수정하시겠습니다까?')) {
      onUpdate(
        Number(param.id),
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      navigate('/', { replace: true });
    }
  };

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
            onClick={onClickDelete}
          />
        }
      />
      <Editor onSubmit={onSubmit} initData={curDiaryItem} />
    </article>
  );
};

export default Edit;
