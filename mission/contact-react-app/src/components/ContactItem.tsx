import './ContactItem.css';

import { ContactItemType } from '../types';

type ContactItemProps = {
  item: ContactItemType;
  OnDelete: (targetId: number) => void;
};

export default function ContactItem({ item, OnDelete }: ContactItemProps) {
  const { id, name, contact } = item;

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
