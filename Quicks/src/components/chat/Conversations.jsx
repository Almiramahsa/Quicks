import React from 'react';
import { useConversations } from '../../contexts/ConversationsProvider';
export default function Conversatios() {
  const { conversations, selectConversationIndex } = useConversations();

  return (
    <ul className="list-conversation">
      {conversations.map((conversation, index) => (
        <li key={index} onClick={() => selectConversationIndex(index)} active={conversation.selected}>
          {conversation.recipients.map((r) => r.name).join(', ')}
        </li>
      ))}
    </ul>
  );
}
