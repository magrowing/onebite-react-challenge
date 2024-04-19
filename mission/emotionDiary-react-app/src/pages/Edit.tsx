/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import AlertPopup from '../components/AlertPopup';

import { useDiaryDispatchContext } from '../contexts/useContext';

import useDiaryItem from '../hooks/useDiaryItem';

import { FormType, nullForm } from '../types';

const Edit = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { onUpdate, onDelete } = useDiaryDispatchContext();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupMsg, setIsPopupMsg] = useState('');
  const [input, setInput] = useState(nullForm);

  const currentDiaryItem = useDiaryItem(param.id ?? '');

  if (!currentDiaryItem) {
    return <p>Loading....</p>;
  }

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handlePopComplete = () => {
    if (isPopupMsg === '일기를 정말로 삭제하시겠습니까? 복구할 수 없습니다.') {
      onDelete(Number(param.id));
    } else if (isPopupMsg === '일기를 수정하시겠습니까?') {
      onUpdate(
        Number(param.id),
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
    }
    navigate('/', { replace: true });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    setIsPopupOpen(!isPopupOpen);
    setIsPopupMsg('일기를 정말로 삭제하시겠습니까? 복구할 수 없습니다.');
  };

  const handelSubmit = (form: FormType) => {
    setIsPopupOpen(!isPopupOpen);
    setIsPopupMsg('일기를 수정하시겠습니까?');
    setInput(form);
  };

  return (
    <article>
      <Header
        title={'일기 수정하기'}
        leftChild={<Button text="< 뒤로가기" onClick={handleGoBack} />}
        rightChild={
          <Button text="삭제하기" styleType="NEGATIVE" onClick={handleDelete} />
        }
      />
      <Editor onSubmit={handelSubmit} initDate={currentDiaryItem} />
      {isPopupOpen && (
        <AlertPopup
          message={isPopupMsg}
          handlePopupClose={handlePopupClose}
          onComplete={handlePopComplete}
        />
      )}
    </article>
  );
};

export default Edit;
