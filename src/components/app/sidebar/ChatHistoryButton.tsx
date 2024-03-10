import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function ChatHistoryButton({
  chat,
}: {
  chat: {
    id: string;
    title: string;
  };
}) {
  return (
    <>
      <NavLink to={`conversation/${chat.id}`}>
        <Button
          className="w-full justify-start overflow-hidden text-ellipsis"
          variant="ghost"
        >
          <span className="truncate">{chat.title}</span>
        </Button>
      </NavLink>
    </>
  );
}
