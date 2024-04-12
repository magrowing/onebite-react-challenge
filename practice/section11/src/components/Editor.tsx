/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from 'react';

import TextField from './TextField';

import { useTodoDispatch } from '../context/useContext';

function Editor() {
  const { onCreate } = useTodoDispatch();

  const inputRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState('');

  const handelOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const handleAddItem = () => {
    if (!content.length) {
      inputRef.current?.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  const handleOnkeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <section className="Editor">
      <TextField
        ref={inputRef}
        placeholder={'새로운 Todo....'}
        value={content}
        onChange={handelOnChange}
        onKeyDown={handleOnkeyDown}
      />
      <button type="button" onClick={handleAddItem}>
        추가
      </button>
    </section>
  );
}

export default Editor;
