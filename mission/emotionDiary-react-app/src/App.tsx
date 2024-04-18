import { useReducer, useRef } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { DiaryDispatchContext, DiaryStateContext } from './contexts/useContext';

import routes from './routes';

import './App.css';

import { reduce } from './utils/reduce';

import { mockDate } from './mocks/mockDate';

const router = createBrowserRouter(routes);

function App() {
  const [diaryList, dispatch] = useReducer(reduce, mockDate);
  const idRef = useRef(3);

  const onCreate = (
    createdDate: number,
    emotionId: number,
    content: string
  ) => {
    dispatch({
      type: 'CREATE',
      date: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (
    id: number,
    createdDate: number,
    emotionId: number,
    content: string
  ) => {
    dispatch({
      type: 'UPDATE',
      date: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id: number) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  return (
    <div>
      <DiaryStateContext.Provider value={diaryList}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <RouterProvider router={router} />
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </div>
  );
}

export default App;
