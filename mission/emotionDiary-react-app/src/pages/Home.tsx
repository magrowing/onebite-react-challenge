import { useState } from 'react';

import { useDiaryStateContext } from '../contexts/useContext';

import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';

import getMonthlyList from '../utils/getMonthlyList';

function Home() {
  const [pivotDate, setPivotDate] = useState(new Date());
  const diaryList = useDiaryStateContext();
  const MonthlyList = getMonthlyList(diaryList, pivotDate);

  const DeCreaseDate = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const InCreaseDate = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  return (
    <article>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={'<'} onClick={DeCreaseDate} />}
        rightChild={<Button text={'>'} onClick={InCreaseDate} />}
      />
      <DiaryList data={MonthlyList} />
    </article>
  );
}

export default Home;
