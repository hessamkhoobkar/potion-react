import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

export default function ChatHistoryButton({
  chat,
}: {
  chat: {
    id: string;
    title: string;
  };
}) {
  return (
    <Button
      className="group relative w-full justify-start overflow-hidden text-ellipsis transition-all duration-200 ease-in-out active:scale-95"
      variant="ghost"
    >
      <span className="truncate">{chat.title}</span>
      <div className="absolute inset-y-0 end-0 flex w-1/3 items-center justify-end bg-gradient-to-l from-gray-800 via-gray-800 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100">
        <Button
          className="hover:text-red-500"
          variant="ghost"
          onClick={event => event.stopPropagation()}
        >
          <Trash size={16} />
        </Button>
      </div>
    </Button>
  );
}
