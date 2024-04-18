import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

import { useDiaryDispatchContext } from '../contexts/useContext';

import { FormType } from '../types';

function New() {
  const navigate = useNavigate();
  const { onCreate } = useDiaryDispatchContext();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleOnCreate = (form: FormType) => {
    onCreate(form.createdDate.getTime(), form.emotionId, form.content);
    navigate('/', { replace: true });
  };

  return (
    <article>
      <Header
        title="새 일기 작성하기"
        leftChild={<Button text="< 뒤로가기" onClick={handleGoBack} />}
      />
      <Editor onSubmit={handleOnCreate} />
    </article>
  );
}

export default New;
