import { Bot } from 'lucide-react';

export default function ChatError() {
  return (
    <div className="prose mx-auto flex h-full w-full flex-col items-center justify-center dark:prose-invert">
      <Bot className="text-primary" size={120} />
      <h2>Something went wrong</h2>
      <p>
        There was an error loading the conversation, or this conversation does
        not exist.
      </p>
    </div>
  );
}
