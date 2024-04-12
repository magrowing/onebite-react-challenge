/* eslint-disable react-refresh/only-export-components */
import { useState, useRef, memo } from 'react';

import './ContactEditor.css';

import TextField from './TextField';

import { useContactDispatch } from '../context/ContextStore';

const nullUser = { name: '', contact: '' };

function ContactEditor() {
  const [user, setUser] = useState(nullUser);
  const { onCreate } = useContactDispatch();

  const nameInput = useRef<HTMLInputElement>(null);
  const contextInput = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUser({ ...user, [e.target.id]: value });
  };

  const handelKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!user.name) {
      nameInput.current?.focus();
      return;
    }
    if (!user.contact) {
      contextInput.current?.focus();
      return;
    }
    onCreate({ ...user });
    setUser(nullUser);
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <TextField
          ref={nameInput}
          className="name"
          placeholder="이름 ..."
          value={user.name}
          onChange={handleChange}
          onKeyDown={handelKeyDown}
        />
        <TextField
          ref={contextInput}
          className="contact"
          placeholder="연락처(이메일) ..."
          value={user.contact}
          onChange={handleChange}
          onKeyDown={handelKeyDown}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default memo(ContactEditor);
