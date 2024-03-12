import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { ChevronRight } from 'lucide-react';

export default function InitState() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <div className="flex max-w-4xl flex-col">
        <p className="text-sm text-foreground/60">Curious minds inquire:</p>
        <h2 className="text-2xl">
          Can a potion truly wield transformative powers?
        </h2>
        <p className="mt-4">
          Get instant answers, helpful recommendations, a love potion, and
          engaging conversations with Potion AI. Potion AI is here to guide you
          every step of the way.
        </p>
      </div>

      <div className="flex max-w-4xl gap-4">
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>Prompt examples</CardTitle>
            <CardDescription>
              See examples of prompts to get you started.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 pt-4">
            <Button
              className="h-auto w-full justify-between p-4"
              variant="outline"
            >
              <div className="flex flex-col items-start justify-start">
                <span className="text-lg">Come up with concepts</span>
                <span className="text-foreground/60">
                  for a retro-style arcade game
                </span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              className="h-auto w-full justify-between p-4"
              variant="outline"
            >
              <div className="flex flex-col items-start justify-start">
                <span className="text-lg">Write a thank-you note</span>
                <span className="text-foreground/60">
                  to our babysitter for the last-minute help
                </span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              className="h-auto w-full justify-between p-4"
              variant="outline"
            >
              <div className="flex flex-col items-start justify-start">
                <span className="text-lg">Create a workout plan</span>
                <span className="text-foreground/60">
                  for resistance training
                </span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        <Card className="relative w-1/2">
          <CardHeader>
            <CardTitle>Capabilities</CardTitle>
            <CardDescription>
              See what Potion AI offers and how it can help you. Learn more
              about capabilities to enhance your experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid flex-col justify-end">
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-center">
              <Button className="w-1/2 justify-between" variant="outline">
                <span>Learn more</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
