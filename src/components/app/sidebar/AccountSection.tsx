import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { BrainCircuit, LogOut } from 'lucide-react';

export default function AccountSection() {
  return (
    <div className="flex w-full flex-col gap-2 border-t p-2 ps-4 pt-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="h-auto w-full justify-start gap-3 px-4 py-2 focus-visible:ring-accent"
            variant="ghost"
          >
            <Avatar>
              <AvatarImage src="/" alt="Tara Monier" />
              <AvatarFallback>
                <BrainCircuit className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start justify-start">
              <span className="text-base">Upgrade plan</span>
              <span className="text-xs text-gray-500">
                Access all the features
              </span>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            minima sunt nemo nesciunt facilis assumenda? Consequatur, aliquid
            minima. Qui deserunt itaque possimus fugit iste enim non, dicta
            beatae vel iusto.
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* User button and dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="h-auto w-full justify-start gap-3 px-4 py-2 focus-visible:ring-accent"
            variant="ghost"
          >
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="Tara Monier"
              />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start justify-start">
              <span className="text-base">Tara Monier</span>
              <span className="text-xs text-gray-500">
                TaraMonier@dayrep.com
              </span>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72">
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
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
    </div>
  );
}
