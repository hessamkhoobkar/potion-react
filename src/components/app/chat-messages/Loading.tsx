import { RefreshCcw } from 'lucide-react';

export default function ChatLoading() {
  return (
    <div className="prose mx-auto flex h-full w-full flex-col items-center justify-center dark:prose-invert">
      <RefreshCcw className="animate-spin text-primary" size={120} />
      <h2 className="text-4xl font-black">
        <span>Potion</span>
        <span className="ms-2 inline-block bg-gradient-to-tr from-secondary via-primary to-primary bg-clip-text text-transparent">
          AI
        </span>
      </h2>
    </div>
  );
}
