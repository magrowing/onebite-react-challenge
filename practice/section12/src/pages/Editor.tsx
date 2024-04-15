import { useParams } from 'react-router-dom';

const Editor = () => {
  const param = useParams();
  return <div>{param.id}번 일기 입니다.</div>;
};

export default Editor;
