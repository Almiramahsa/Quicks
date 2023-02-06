import React, { useState } from 'react';
import Conversations from './Conversations';
import Contacts from './Contacts';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activeKey === CONVERSATIONS_KEY;

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div id="sibedar-container" className="w-1/2 h-full shadow-md bg-white px-1 absolute">
      <ul id="sidebar-list" className="relative mt-10 flex flex-row">
        <li className="relative">
          <a
            className={`flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out ${
              activeKey === CONVERSATIONS_KEY ? 'text-blue-500' : ''
            }`}
            href="#!"
            onClick={() => setActiveKey(CONVERSATIONS_KEY)}
          >
            Conversations
          </a>
        </li>
        <li className="relative">
          <a
            className={`flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out ${
              activeKey === CONTACTS_KEY ? 'text-blue-500' : ''
            }`}
            href="#!"
            onClick={() => setActiveKey(CONTACTS_KEY)}
          >
            Contacts
          </a>
        </li>
      </ul>
      <div className="mx-6 mt-10 font-normal text-sm border-right overflow-auto flex-grow-1">
        <div className={`${activeKey === CONVERSATIONS_KEY ? '' : 'hidden'}`}>
          <Conversations />
        </div>
        <div className={`${activeKey === CONTACTS_KEY ? '' : 'hidden'}`}>
          <Contacts />
        </div>
      </div>
      <div className="w-full pb-2 border-t border-r text-sm bottom-0 absolute inset-x-0">
        <div id="bottom-section" className="p-2 text-sm">
          Your ID : <span className="text-gray-600">{id}</span>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          type="button"
          className="w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          New {conversationsOpen ? 'Conversation' : 'Contact'}{' '}
        </button>
        {modalOpen && (
          <div id="modal" show={modalOpen} onClose={closeModal}>
            {conversationsOpen ? <NewConversationModal closeModal={closeModal} /> : <NewContactModal closeModal={closeModal} />}
          </div>
        )}
      </div>
    </div>
  );
}
