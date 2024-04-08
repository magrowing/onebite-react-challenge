/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import './App.css';

import Viewer from './components/Viewer';
import Controller from './components/Controller';

function App() {
  const [count, setCount] = useState(0);

  const handelOnClick = (number: number) => {
    setCount(count + number);
    //console.log(`이벤트 핸들러의 함수내의 count : ${count}`);
  };

  useEffect(() => {
    console.log('Update');

    return () => {
      console.log('클린업');
    };
  }, [count]);

  return (
    <article className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handelOnClick={handelOnClick} />
      </section>
    </article>
  );
}

export default App;
