import ChatHistoryButton from './ChatHistoryButton';

interface ChatHistory {
  id: string;
  title: string;
}

interface ChatHistoryPeriodProps {
  title: string;
  chats: ChatHistory[];
}

export default function ChatHistoryPeriod({
  periodHistory,
}: {
  periodHistory: ChatHistoryPeriodProps;
}) {
  return (
    <div
      key={periodHistory.title}
      className="mt-4 w-full flex-col overflow-hidden"
    >
      <span className="mb-1 ms-4 text-sm opacity-45">
        {periodHistory.title}
      </span>
      <div key={periodHistory.title} className="w-full flex-col">
        {periodHistory.chats.map(item => (
          // Not using id as key because it's not unique in demo data, you should use unique id and use it as key
          <ChatHistoryButton key={item.title} chat={item} />
        ))}
      </div>
    </div>
  );
}
