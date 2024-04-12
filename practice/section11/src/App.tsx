/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { useReducer, useRef, useCallback, useMemo } from 'react';

import './App.scss';

import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

import { TodoDispatchContext, TodoStateContext } from './context/useContext';

import { ActionType, TodoItemType } from './types';

import { mockData } from './mocks/mockDate';

const reducer = (state: TodoItemType[], action: ActionType): TodoItemType[] => {
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

  const onCreate = useCallback((content: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId: number) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId: number) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <article className="App">
      <Header />
      <TodoStateContext.Provider value={todoList}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </article>
  );
}

export default App;
