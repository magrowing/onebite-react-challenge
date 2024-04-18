/* eslint-disable prefer-const */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Editor.scss';

import EmotionItem from './EmotionItem';
import Button from './Button';

import getStringedDate from '../utils/getStringedDate';

import { onCreateType } from '../types';

const EmotionList = [
  { emotionId: 1, emotionName: '완전좋음' },
  { emotionId: 2, emotionName: '좋음' },
  { emotionId: 3, emotionName: '그럭저럭' },
  { emotionId: 4, emotionName: '나쁨' },
  { emotionId: 5, emotionName: '끔찍함' },
];

type EditorProps = {
  onSubmit: (input: onCreateType) => void;
};

export default function Editor({ onSubmit }: EditorProps) {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });
  const navigator = useNavigate();

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { value }: { value: string | Date | number } = event.target;
    let { name } = event.target;

    if (name === 'createdDate') {
      value = new Date(value);
    }

    if (name === 'emotionId') {
      value = Number(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  // const onClickInput = (emotionId: number) => {
  //   setInput({
  //     ...input,
  //     emotionId,
  //   });
  // };

  const onClickOnSubmit = () => {
    onSubmit(input);
  };

  const onClickCancel = () => {
    navigator(-1);
  };

  return (
    <section className="Editor">
      <div className="Editor__date">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name={'createdDate'}
          value={getStringedDate(input.createdDate)}
          onChange={onChangeInput}
        />
      </div>
      <div className="Editor__emotion">
        <h4>오늘의 감정</h4>
        <ul>
          {EmotionList.map((item) => {
            const key = `emotion${item.emotionId}`;
            return (
              <EmotionItem
                key={key}
                item={item}
                isSelected={item.emotionId === input.emotionId}
                onClick={() =>
                  onChangeInput({
                    target: {
                      name: 'emotionId',
                      value: String(item.emotionId),
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
          placeholder="오늘의 어땠나요?"
          name="content"
          value={input.content}
          onChange={onChangeInput}
        ></textarea>
      </div>
      <div className="Editor__button">
        <Button text={'취소하기'} onClick={onClickCancel} />
        <Button
          text={'작성완료'}
          styleType="POSITIVE"
          onClick={onClickOnSubmit}
        />
      </div>
    </section>
  );
}
