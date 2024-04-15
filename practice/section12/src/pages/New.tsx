import { useSearchParams } from 'react-router-dom';

const New = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get('index'));
  return <div>New : {params.get('index')}</div>;
};

export default New;
