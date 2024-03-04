import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

import {
  Cloud,
  CreditCard,
  Keyboard,
  LifeBuoy,
  LogOut,
  Settings,
  User,
} from 'lucide-react';
import UserDropdownTrigger from './UserDropdownTrigger';
import UserDropdownItem from './UserDropdownItem';

const linksData = [
  {
    group: 'Account',
    items: [
      {
        label: 'Profile',
        shortcut: '⇧⌘P',
        icon: <User className="mr-2 h-4 w-4" />,
      },
      {
        label: 'Billing',
        shortcut: '⌘B',
        icon: <CreditCard className="mr-2 h-4 w-4" />,
      },
      {
        label: 'Settings',
        shortcut: '⌘S',
        icon: <Settings className="mr-2 h-4 w-4" />,
      },
      {
        label: 'Keyboard shortcuts',
        shortcut: '⌘K',
        icon: <Keyboard className="mr-2 h-4 w-4" />,
      },
    ],
  },
  {
    group: 'Support',
    items: [
      {
        label: 'Support',
        shortcut: '',
        icon: <LifeBuoy className="mr-2 h-4 w-4" />,
      },
      {
        label: 'API',
        shortcut: '',
        icon: <Cloud className="mr-2 h-4 w-4" />,
      },
    ],
  },
  {
    group: 'Log out',
    items: [
      {
        label: 'Log out',
        shortcut: '⇧⌘Q',
        icon: <LogOut className="mr-2 h-4 w-4" />,
      },
    ],
  },
];

export default function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="h-auto w-full justify-start gap-4 p-2 focus-visible:ring-accent"
          variant="ghost"
        >
          <UserDropdownTrigger />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        {linksData.map(({ group, items }, index) => (
          <>
            {index !== 0 && <DropdownMenuSeparator />}
            <DropdownMenuGroup key={group}>
              {items.map(item => (
                <UserDropdownItem
                  label={item.label}
                  shortcut={item.shortcut}
                  icon={item.icon}
                />
              ))}
            </DropdownMenuGroup>
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
{
  /* 
export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} */
}
