/* eslint-disable react-refresh/only-export-components */
import { useRef, useState } from 'react';

import './App.scss';

import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

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

function App() {
  const idRef = useRef(3);
  const [todoList, setTodoList] = useState(mockData);

  const onCreate = (content: string) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };
    setTodoList([newTodo, ...todoList]);
  };

  const onUpdate = (targetId: number) => {
    const targetTodoList = todoList.map((todo) =>
      todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodoList(targetTodoList);
  };

  const onDelete = (id: number) => {
    const filterTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filterTodoList);
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
