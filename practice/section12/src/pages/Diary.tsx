import { useNavigate, useParams } from 'react-router-dom';

import NotFound from './NotFound';
import Header from '../components/Header';
import Button from '../components/Button';
import View from '../components/View';

import { useDiaryStateContext } from '../hooks/useContext';

import getStringedDate from '../utils/getStringedDate';
import getDiaryItem from '../utils/getDiaryItem';

const Diary = () => {
  const param = useParams();
  const navigation = useNavigate();

  const data = useDiaryStateContext();
  const diaryItem = getDiaryItem(data, param.id);

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
        title={`${getStringedDate(new Date(diaryItem.createdDate))} 기록`}
        leftChild={
          <Button text={'< 뒤로가기'} onClick={() => navigation(-1)} />
        }
        rightChild={
          <Button
            text={'수정하기'}
            onClick={() => {
              navigation(`/edit/${param.id}`);
            }}
          />
        }
      />
      <View diaryItem={diaryItem} />
    </article>
  );
};

export default Diary;
