import AccountSection from './sidebar/AccountSection';
import Branding from './sidebar/Branding';
import ChatHistory from './sidebar/ChatHistory';

export default function Sidebar() {
  return (
    <div className="z-10 flex h-dvh w-72 flex-shrink-0 flex-col overflow-hidden">
      <Branding />
      <ChatHistory />
      <AccountSection />
    </div>
  );
}
