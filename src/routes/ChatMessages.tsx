import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { chatData } from '@/mock/chatData';

import ChatError from '@/components/app/chat-messages/Error';
import ChatLoading from '@/components/app/chat-messages/Loading';
import Messages from '@/components/app/chat-messages/Messages';

interface Chat {
  id: number;
  message: string;
  type: string;
  avatar: string;
}

export default function ChatMessages() {
  const location = useLocation();
  const { pathname } = location;

  const [chat, setChat] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const currentPath: string | undefined = pathname.split('/').pop();
    setLoading(false);

    if (
      currentPath &&
      Object.prototype.hasOwnProperty.call(chatData, currentPath)
    ) {
      setChat(chatData[currentPath]);
      setError(false);
    } else {
      setError(true);
    }
  }, [pathname]);

  return (
    <>
      {loading ? (
        <ChatLoading />
      ) : error ? (
        <ChatError />
      ) : (
        <Messages chat={chat} />
      )}
    </>
  );
}
