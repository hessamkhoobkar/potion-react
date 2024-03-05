import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowUp, Mic, Paperclip } from 'lucide-react';

export default function InputSection() {
  const autoSizing = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const numberOfLineBreaks = (event.target.value.match(/\n/g) || []).length;

    event.target.style.height = `${numberOfLineBreaks * 20 + 54}px`;
  };

  return (
    <div className="flex gap-2">
      <div className="relative grow">
        <Textarea
          placeholder="What do have you in your mind?"
          className="min-h-1 overflow-y-auto rounded-3xl p-4 pe-14"
          spellCheck="true"
          rows={1}
          onInput={autoSizing}
        />
        <Button
          size="icon"
          className="absolute end-2 top-2 rounded-full text-foreground/50 hover:text-foreground/100"
          variant="ghost"
        >
          <Paperclip />
        </Button>
      </div>
      <Button
        size="icon"
        className="h-[54px] w-[54px] rounded-full text-foreground/50 hover:text-foreground/100"
        variant="secondary"
      >
        <Mic />
      </Button>
      <Button size="icon" className="h-[54px] w-[54px] rounded-full">
        <ArrowUp />
      </Button>
    </div>
  );
}
