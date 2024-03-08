import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useState, useRef } from 'react';

const AIChatData = [
  {
    id: 1,
    message: 'Hello, how can I help you today?',
    type: 'bot',
    avatar: '/potion.ai.avatar.jpg',
  },
  {
    id: 2,
    message: 'I am looking for a book',
    type: 'user',
    avatar: '/profile.png',
  },
  {
    id: 3,
    message:
      "<p>Certainly! I'd be happy to help you find a book. Could you please provide more details about your preferences? What genre are you interested in, or do you have any specific themes or authors in mind? The more information you provide, the better I can tailor my recommendations to your preferences.</p>",
    type: 'bot',
    avatar: '/potion.ai.avatar.jpg',
  },
  {
    id: 4,
    message: 'I am interested in mystery novels',
    type: 'user',
    avatar: '/profile.png',
  },
  {
    id: 5,
    message:
      '<p>Great choice! Mystery novels offer suspense, intrigue, and often a compelling plot that keeps readers engaged. Here are some classic and popular mystery novels that you might enjoy:</p><ol><li><p><strong>"The Hound of the Baskervilles" by Arthur Conan Doyle</strong></p><ul><li>A classic Sherlock Holmes mystery set on the moody moors of Devon.</li></ul></li><li><p><strong>"Gone Girl" by Gillian Flynn</strong></p><ul><li>A psychological thriller about a woman\'s sudden disappearance and the secrets that unravel in its wake.</li></ul></li><li><p><strong>"The Girl with the Dragon Tattoo" by Stieg Larsson</strong></p><ul><li>A gripping modern mystery involving a journalist and a hacker as they investigate a wealthy family\'s dark secrets.</li></ul></li><li><p><strong>"The Da Vinci Code" by Dan Brown</strong></p><ul><li>A fast-paced mystery that combines art, history, and religion as Harvard symbologist Robert Langdon tries to solve a murder and unravel a larger conspiracy.</li></ul></li><li><p><strong>"In the Woods" by Tana French</strong></p><ul><li>The first book in the Dublin Murder Squad series, this novel follows Detective Rob Ryan as he investigates a young girl\'s murder that may be linked to his own troubled past.</li></ul></li><li><p><strong>"Big Little Lies" by Liane Moriarty</strong></p><ul><li>Although more of a suspenseful drama, this novel revolves around a mysterious death at a school trivia night and explores the secrets of three women.</li></ul></li><li><p><strong>"The Girl on the Train" by Paula Hawkins</strong></p><ul><li>A psychological thriller about a woman who becomes entangled in a missing person\'s investigation after witnessing something suspicious during her daily train commute.</li></ul></li><li><p><strong>"And Then There Were None" by Agatha Christie</strong></p><ul><li>A classic Agatha Christie mystery where ten strangers are invited to an island and one by one, they are accused of murder.</li></ul></li><li><p><strong>"The Silent Patient" by Alex Michaelides</strong></p><ul><li>A psychological mystery about a woman who shoots her husband and then stops speaking, leading to a therapist\'s attempt to unravel the mystery behind her silence.</li></ul></li><li><p><strong>"The No. 1 Ladies\' Detective Agency" by Alexander McCall Smith</strong></p><ul><li>The first book in a charming series set in Botswana, featuring the adventures of Precious Ramotswe, the country\'s first female private detective.</li></ul></li></ol><p>These novels cover a range of sub-genres within mystery, so you might find something that suits your specific tastes. Happy reading!</p>',
    type: 'bot',
    avatar: '/potion.ai.avatar.jpg',
  },
  {
    id: 6,
    message: 'I am interested in mystery novels',
    type: 'user',
    avatar: '/profile.png',
  },
];

export default function ChatMessages() {
  const [chat, setChat] = useState<
    { id: number; message: string; type: string }[]
  >([]);
  const messagesEnd = useRef<HTMLDivElement | null>(null);

  function scrollToBottom() {
    if (messagesEnd.current) {
      messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    setChat(AIChatData);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <>
      {AIChatData.map(chat => (
        <div
          key={chat.id}
          className="border-b bg-background p-8 text-foreground"
        >
          <div className="mx-auto flex w-full max-w-2xl gap-4">
            <Avatar>
              <AvatarImage src={chat.avatar} alt="Tara Monier" />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <div className="flex flex-col items-start justify-start">
                <span className="text-base">
                  {chat.type === 'bot' ? 'Potion AI' : 'You'}
                </span>
              </div>

              <div
                className="prose dark:prose-invert mx-auto w-full max-w-2xl"
                dangerouslySetInnerHTML={{ __html: chat.message }}
              />
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEnd} />
    </>
  );
}
