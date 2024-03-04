import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function UserDropdownTrigger() {
  return (
    <>
      <Avatar>
        <AvatarImage src="/profile.png" alt="Tara Monier" />
        <AvatarFallback>TM</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start justify-start">
        <span className="text-base">Tara Monier</span>
        <span className="text-xs text-gray-500">TaraMonier@dayrep.com</span>
      </div>
    </>
  );
}
