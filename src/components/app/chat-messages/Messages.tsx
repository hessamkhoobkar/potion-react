import { useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Chat {
  id: number;
  message: string;
  type: string;
  avatar: string;
}

export default function Messages({ chat }: { chat: Chat[] }) {
  const messagesEnd = useRef<HTMLDivElement | null>(null);

  function scrollToBottom() {
    if (messagesEnd.current) {
      messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <>
      {chat.map((chat, index, { length }) => (
        <div
          key={chat.id}
          className={`${index === length - 1 ? '' : 'border-b '} bg-background p-8 text-foreground`}
        >
          <div className="mx-auto flex w-full max-w-2xl gap-4">
            <Avatar>
              <AvatarImage src={chat.avatar} alt="Tara Monier" />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <div className="flex flex-col items-start justify-start">
                <span className="text-base">
                  {chat.type === 'bot' ? 'Potion AI' : 'You'}
                </span>
              </div>

              <div
                className="prose mx-auto w-full max-w-2xl dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: chat.message }}
              />
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEnd} />
    </>
  );
}
