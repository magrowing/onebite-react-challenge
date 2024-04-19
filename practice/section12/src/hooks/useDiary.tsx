/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDiaryStateContext } from './useContext';

import { TodoItemType, nullCurDiaryItem } from '../types';

export default function useDiary(id: string) {
  const data = useDiaryStateContext();
  const [curDiaryItem, setCurDiaryItem] =
    useState<TodoItemType>(nullCurDiaryItem);
  const navigation = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      navigation('/', { replace: true });
    }

    setCurDiaryItem(currentDiaryItem ?? nullCurDiaryItem);
  }, [id, data]);

  return curDiaryItem;
}
