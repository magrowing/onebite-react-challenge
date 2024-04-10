/* eslint-disable react-refresh/only-export-components */
import { useReducer, useRef } from 'react';

import './App.scss';

import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

import { TodoItemType } from './types';

export const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    isDone: false,
    id: 1,
    content: 'TypeScript 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: 'Next.js 공부하기',
    date: new Date().getTime(),
  },
];

type actionType = {
  type: string;
  data?: TodoItemType;
  targetId?: number;
};

const reducer = (state: TodoItemType[], action: actionType): TodoItemType[] => {
  switch (action.type) {
    case 'CREATE': {
      return action.data ? [action.data, ...state] : state;
    }
    case 'UPDATE': {
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    }
    case 'DELETE': {
      return state.filter((item) => item.id !== action.targetId);
    }
    default:
      return state;
  }
};

function App() {
  const idRef = useRef(3);
  const [todoList, dispatch] = useReducer(reducer, mockData);

  const onCreate = (content: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId: number) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  };

  const onDelete = (targetId: number) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  };

  return (
    <article className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todoList={todoList} onDelete={onDelete} onUpdate={onUpdate} />
    </article>
  );
}

export default App;
