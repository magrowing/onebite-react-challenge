import { useNavigate, useParams } from 'react-router-dom';

import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';

import getStringedDate from '../utils/getStringedDate';

import useDiary from '../hooks/useDiary';
import usePageTitle from '../hooks/usePageTitle';

const Diary = () => {
  const param = useParams();
  const navigation = useNavigate();
  const curDiaryItem = useDiary(param.id ?? '');

  usePageTitle(`${param.id ?? `존재하지 않는`}번 일기`);

  if (curDiaryItem.id === -1) {
    return <div>로딩중...</div>;
  }

  return (
    <article>
      <Header
        title={`${getStringedDate(new Date(curDiaryItem.createdDate))} 기록`}
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
      <Viewer diaryItem={curDiaryItem} />
    </article>
  );
};

export default Diary;
