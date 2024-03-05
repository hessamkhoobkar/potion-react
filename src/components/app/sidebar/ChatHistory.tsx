import { chatHistory } from '@/mock/chatHistory';
import ChatHistoryPeriod from './ChatHistoryPeriod';

export default function ChatHistory() {
  return (
    <div className="w-full grow overflow-y-hidden p-4 ps-2 pt-0 hover:overflow-y-auto hover:pe-2">
      {chatHistory.map(period => (
        <ChatHistoryPeriod key={period.title} periodHistory={period} />
      ))}
    </div>
  );
}
