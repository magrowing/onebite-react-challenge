import { useNavigate, useParams } from 'react-router-dom';

import Button from '../components/Button';
import Header from '../components/Header';

import useDiaryItem from '../hooks/useDiaryItem';

import getStringedDate from '../utils/getStringedDate';
import Viewer from '../components/Viewer';

function Diary() {
  const param = useParams();
  const navigate = useNavigate();

  const currentItem = useDiaryItem(param.id ?? '');

  if (!currentItem.id) {
    return <p>Loading....</p>;
  }

  return (
    <article>
      <Header
        title={`${getStringedDate(new Date(currentItem.createdDate))} 기록`}
        leftChild={<Button text="< 뒤로가기" onClick={() => navigate(-1)} />}
        rightChild={
          <Button
            text="수정하기"
            onClick={() => navigate(`/edit/${param.id}`)}
          />
        }
      />
      <Viewer diaryItem={currentItem} />
    </article>
  );
}

export default Diary;
