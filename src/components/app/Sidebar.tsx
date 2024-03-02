import ChatHistory from './sidebar/ChatHistory';

export default function Sidebar() {
  return (
    <div className="z-10 flex h-dvh w-72 flex-col overflow-hidden">
      <div className="flex h-24 w-full items-center justify-start p-4 ps-8">
        <span>Sidebar Logo</span>
      </div>
      <ChatHistory />
      <div className="w-full flex-col border-t p-4 pe-2 pt-3">
        <span>Sidebar user card</span>
      </div>
    </div>
  );
}
