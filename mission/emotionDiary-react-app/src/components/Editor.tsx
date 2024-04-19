import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Editor.scss';

import Button from './Button';
import EmotionItem from './EmotionItem';

import getStringedDate from '../utils/getStringedDate';

import { DiaryItemType, FormType } from '../types';

import { emotionList } from '../fixtures/emotionList';

type EditorProps = {
  onSubmit: (form: FormType) => void;
  initDate?: DiaryItemType;
};

export default function Editor({ onSubmit, initDate }: EditorProps) {
  const [form, setForm] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  useEffect(() => {
    if (initDate) {
      setForm({
        ...initDate,
        createdDate: new Date(initDate.createdDate),
      });
    }
  }, [initDate]);

  const navigate = useNavigate();

  const handleOnChangeForm = (e: {
    target: {
      name: string;
      value: string | Date | number;
    };
  }) => {
    let { value } = e.target;
    const { name } = e.target;

    if (name === 'createdDate') {
      value = new Date(value);
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = () => {
    onSubmit(form);
  };

  return (
    <section className="Editor">
      <div className="Editor__date">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name="createdDate"
          value={getStringedDate(form.createdDate)}
          onChange={handleOnChangeForm}
        />
      </div>
      <div className="Editor__emotion">
        <h4>오늘의 감정</h4>
        <ul>
          {emotionList.map((item) => {
            const key = `emotionItem__${item.emotionId}`;
            return (
              <EmotionItem
                key={key}
                item={item}
                isSelected={item.emotionId === form.emotionId}
                onClick={() =>
                  handleOnChangeForm({
                    target: {
                      name: 'emotionId',
                      value: item.emotionId,
                    },
                  })
                }
              />
            );
          })}
        </ul>
      </div>
      <div className="Editor__content">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘은 어땠나요?"
          name="content"
          value={form.content}
          onChange={handleOnChangeForm}
        ></textarea>
      </div>
      <div className="Editor__button">
        <Button
          text="취소하기"
          onClick={() => {
            navigate(-1);
          }}
        />
        <Button text="등록하기" styleType="POSITIVE" onClick={handleOnSubmit} />
      </div>
    </section>
  );
}
