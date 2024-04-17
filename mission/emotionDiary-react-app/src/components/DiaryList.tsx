import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/DiaryList.scss';

import Button from './Button';
import DiaryItem from './DiaryItem';

import getSortedDate from '../utils/getSortedDate';

import { DiaryItemType } from '../types';

type DiaryListProps = {
  data: DiaryItemType[];
};

export default function DiaryList({ data }: DiaryListProps) {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState('latest');
  const sortedData = getSortedDate(data, sortType);

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSortType(value);
  };

  return (
    <section className="DiaryList">
      <div className="MenuBar">
        <select value={sortType} onChange={handleOnChange}>
          <option value={'latest'}>최신순</option>
          <option value={'oldest'}>오래된 순</option>
        </select>
        <Button
          text="새 일기 쓰기"
          styleType="POSITIVE"
          onClick={() => {
            navigate('/new');
          }}
        />
      </div>
      <ul className="DiaryList__wrap">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
