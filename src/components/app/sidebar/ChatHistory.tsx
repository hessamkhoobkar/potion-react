import { chatHistory } from '@/mock/chatHistory';
import ChatHistoryPeriod from './ChatHistoryPeriod';

export default function ChatHistory() {
  return (
    <div className="w-full overflow-y-hidden p-4 ps-2 hover:overflow-y-auto hover:pe-2">
      {chatHistory.map(period => (
        <ChatHistoryPeriod periodHistory={period} />
      ))}
    </div>
  );
}
