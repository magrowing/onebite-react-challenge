/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react';

import './ContactItem.css';

import { useContactDispatch } from '../context/ContextStore';

import { ContactItemType } from '../types';

function ContactItem({ item }: { item: ContactItemType }) {
  const { id, name, contact } = item;
  const { OnDelete } = useContactDispatch();

  const handleDelete = () => {
    OnDelete(id);
  };
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button type="button" onClick={handleDelete}>
        🗑️ Remove
      </button>
    </div>
  );
}

export default memo(ContactItem);
