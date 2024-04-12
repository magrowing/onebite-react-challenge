import { useMemo, useRef, useState } from 'react';

import TextField from './TextField';
import ListItem from './ListItem';

import { useTodoState } from '../context/useContext';

import { TodoItemType } from '../types';

import filterTodoList from '../utils/filterTodoList';

function List() {
  const todoList = useTodoState();
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handelOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  const filteredTodoList = filterTodoList(todoList, search);

  // useMemo를 통한 최적화
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todoList.length;
    const doneCount = todoList.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todoList]);

  return (
    <section className="List">
      <h4>📋 Todo List</h4>
      <div>
        <p>Total : {totalCount}</p>
        <p>Done : {doneCount}</p>
        <p>Not Done : {notDoneCount}</p>
      </div>
      <TextField
        ref={inputRef}
        placeholder={'검색어를 입력해주세요.'}
        value={search}
        onChange={handelOnChange}
      />
      <ul>
        {filteredTodoList.map((todo: TodoItemType, idx: number) => {
          const key = `TodoItem_${idx}`;
          return <ListItem key={key} todo={todo} />;
        })}
      </ul>
    </section>
  );
}

export default List;
