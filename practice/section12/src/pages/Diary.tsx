import { useParams } from 'react-router-dom';

const Diary = () => {
  const param = useParams();
  console.log(param);
  return <div>Diary : {param.id}</div>;
};

export default Diary;
