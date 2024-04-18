import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

import { useDiaryDispatchContext } from '../hooks/useContext';

import { onCreateType } from '../types';

const New = () => {
  const { onCreate } = useDiaryDispatchContext();
  const navigate = useNavigate();

  const onSubmit = (input: onCreateType) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    navigate('/', { replace: true });
  };

  return (
    <article className="New">
      <Header
        title={'새 일기 쓰기'}
        leftChild={
          <Button
            text="< 뒤로 가기"
            onClick={() => {
              navigate(-1);
            }}
          />
        }
      />
      <Editor onSubmit={onSubmit} />
    </article>
  );
};

export default New;
