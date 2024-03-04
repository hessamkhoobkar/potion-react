import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu';

export default function UserDropdownItem({
  label,
  shortcut,
  icon,
}: {
  label: string;
  shortcut: string;
  icon: JSX.Element;
}) {
  return (
    <DropdownMenuItem className="cursor-pointer p-2">
      {icon}
      <span>{label}</span>
      {shortcut && <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>}
    </DropdownMenuItem>
  );
}
