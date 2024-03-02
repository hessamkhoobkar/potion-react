import AccountSection from './sidebar/AccountSection';
import ChatHistory from './sidebar/ChatHistory';

export default function Sidebar() {
  return (
    <div className="z-10 flex h-dvh w-72 flex-col overflow-hidden">
      <div className="flex h-24 w-full items-center justify-start p-4 ps-8">
        <span className="text-2xl font-black">
          <span>Potion</span>
          <span className="ms-2 inline-block bg-gradient-to-tr from-secondary via-primary to-primary bg-clip-text text-transparent">
            AI
          </span>
        </span>
      </div>
      <ChatHistory />
      <AccountSection />
    </div>
  );
}
