import React from 'react';
import { useContacts } from '../../contexts/ContactsProvider';

export default function Contacts() {
  const { contacts } = useContacts();

  return (
    <ul className="list-group list-group-flush">
      {contacts.map((contact) => (
        <li key={contact.id} className="list-group-item">
          {contact.name}
        </li>
      ))}
    </ul>
  );
}
