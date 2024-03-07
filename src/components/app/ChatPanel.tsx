import { Outlet } from 'react-router-dom';
import ChatHeader from './chat-panel/ChatHeader';
import InputSection from './chat-panel/InputSection';

export default function ChatPanel() {
  return (
    <div className="h-dvh max-w-full grow p-2">
      <div className="flex h-full w-full flex-col gap-4 rounded-3xl border p-4">
        <ChatHeader />
        <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg border bg-card text-card-foreground shadow-sm">
          <Outlet />
        </div>
        <InputSection />
      </div>
    </div>
  );
}
