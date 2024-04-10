import './ContactList.css';

import ContactItem from './ContactItem';

import { ContactItemType } from '../types';

type ContactListProps = {
  contactList: ContactItemType[];
  OnDelete: (targetId: number) => void;
};

export default function ContactList({
  contactList,
  OnDelete,
}: ContactListProps) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contactList.map((item) => {
        const key = `contactItem_${item.id}`;
        return <ContactItem key={key} item={item} OnDelete={OnDelete} />;
      })}
    </div>
  );
}
