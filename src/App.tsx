import { useState } from 'react';
import { Helmet } from 'react-helmet';

import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './components/mode-toggle';

function App() {
  const [language, setLanguage] = useState({ lang: 'en', dir: 'ltr' });
  function handleLanguageCall() {
    if (language.lang === 'en') {
      setLanguage({ lang: 'fa', dir: 'rtl' });
      return;
    } else {
      setLanguage({ lang: 'en', dir: 'ltr' });
    }
  }
  return (
    <>
      <Helmet htmlAttributes={{ lang: language.lang, dir: language.dir }} />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex h-dvh w-dvw items-stretch justify-center">
          <aside className="w-1/3 bg-gray-100 p-8 dark:bg-gray-900">
            <div className="flex w-full gap-2">
              <Button onClick={handleLanguageCall}>Click me</Button>
              <ModeToggle />
            </div>
          </aside>
          <section className="w-2/3 p-8">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              iusto corrupti vero error, dolorem tempora totam fugiat quis
              voluptates quod quo exercitationem ea inventore ullam, assumenda
              omnis amet accusantium numquam.
            </p>
          </section>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
