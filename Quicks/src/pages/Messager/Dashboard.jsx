import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/chat/Sidebar';
import OpenConversation from '../../components/chat/OpenConversation';
import { useConversations } from '../../contexts/ConversationsProvider';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations();

  return (
    <div className="flex h-screen">
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
      <Link to="/TodoHomepage">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Go to To Do Page</button>
      </Link>
    </div>
  );
}
