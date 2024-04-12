import './ContactList.css';

import ContactItem from './ContactItem';

import { useContactState } from '../context/ContextStore';

export default function ContactList() {
  const contactList = useContactState();

  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contactList.map((item) => {
        const key = `contactItem_${item.id}`;
        return <ContactItem key={key} item={item} />;
      })}
    </div>
  );
}
