import { useState } from 'react';

import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';

import { useDiaryStateContext } from '../hooks/useContext';
import usePageTitle from '../hooks/usePageTitle';

import getMonthlyData from '../utils/getMonthlyData';

const Home = () => {
  const data = useDiaryStateContext();
  const [pivotDate, setPivotDate] = useState(new Date());
  usePageTitle(`감정일기장`);

  const MonthlyData = getMonthlyData(data, pivotDate);

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  return (
    <article className="Home">
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={MonthlyData} />
    </article>
  );
};

export default Home;
