import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useContacts } from '../../contexts/ContactsProvider';
import { useConversations } from '../../contexts/ConversationsProvider';

export default function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();

    createConversation(selectedContactIds);
    closeModal();
  }

  function handleCheckboxChange(contactId) {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  }
  return (
    <>
      <div className="flex h-screen items-center">
        <div className="w-full border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h1 className="text-xl font-normal">Create Conversation</h1>
            <button className="bg-transparent border-0 text-black float-right" onClick={() => closeModal()}>
              <AiOutlineCloseCircle className="text-red-700 opacity-7 h-6 w-6 text-xl block py-0 rounded" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col">
            {contacts.map((contact) => (
              <div className="flex items-center" key={contact.id}>
                <input type="checkbox" className="form-checkbox" value={selectedContactIds.includes(contact.id)} id={contact.id} onChange={() => handleCheckboxChange(contact.id)} />
                <label className="ml-2" for={contact.id}>
                  {contact.name}
                </label>
              </div>
            ))}
            <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
