import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { BrainCircuit } from 'lucide-react';
import UpgradePlanContent from './UpgradePlanContent';

export default function UpgradePlan() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="h-auto w-full justify-start gap-4 p-2 focus-visible:ring-accent"
          variant="ghost"
        >
          <Avatar>
            <AvatarImage src="/" alt="Brain Circuit Icon" />
            <AvatarFallback className="h-10 w-10 border border-border bg-background">
              <BrainCircuit className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start justify-start">
            <span className="text-base">Upgrade your plan</span>
            <span className="text-xs text-gray-500">
              Access all the features
            </span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-7xl">
        <DialogHeader>
          <DialogTitle>Upgrade your plan</DialogTitle>
          <DialogDescription>
            Access all the features and unlock the full potential of Potion AI.
          </DialogDescription>
        </DialogHeader>
        <UpgradePlanContent />
      </DialogContent>
    </Dialog>
  );
}
