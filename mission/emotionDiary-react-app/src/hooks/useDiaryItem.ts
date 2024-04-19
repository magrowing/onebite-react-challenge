/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDiaryStateContext } from '../contexts/useContext';
import { nullDiaryItem } from '../types';


function useDiaryItem(id :string) {
  const data = useDiaryStateContext();
  const [curDiaryItem, setCurDiaryItem] = useState(nullDiaryItem);

  const navigate = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      alert('존재 하지 않는 페이지입니다. ');
      navigate('/', { replace: true });
    }
    setCurDiaryItem(currentDiaryItem ?? nullDiaryItem);
  }, [id, data]);

  return curDiaryItem
}

export default useDiaryItem;