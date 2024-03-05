import { Button } from '@/components/ui/button';
import ModelSelect from './ModelSelect';

export default function ChatHeader() {
  return (
    <div className="flex justify-between">
      <div>
        <ModelSelect />
      </div>
      <div>
        <Button className="items-center justify-center gap-4">
          <span>New Chat</span>
        </Button>
      </div>
    </div>
  );
}
