import { useRef, useState } from 'react';

import TextField from './TextField';
import ListItem from './ListItem';

import { TodoItemType } from '../types';

import filterTodoList from '../utils/filterTodoList';

type ListProps = {
  todoList: TodoItemType[];
  onDelete: (id: number) => void;
  onUpdate: (targetId: number) => void;
};

function List({ todoList, onDelete, onUpdate }: ListProps) {
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handelOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  const filteredTodoList = filterTodoList(todoList, search);

  return (
    <section className="List">
      <h4>📋 Todo List</h4>
      <TextField
        ref={inputRef}
        placeholder={'검색어를 입력해주세요.'}
        value={search}
        onChange={handelOnChange}
      />
      <ul>
        {filteredTodoList.map((todo: TodoItemType, idx: number) => {
          const key = `TodoItem_${idx}`;
          return (
            <ListItem
              key={key}
              todo={todo}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default List;
