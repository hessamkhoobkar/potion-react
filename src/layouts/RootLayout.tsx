import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Sidebar from '@/components/app/Sidebar';
import ChatPanel from '@/components/app/ChatPanel';
// import { Button } from '@/components/ui/button';
// import { ModeToggle } from '@/components/mode-toggle';

export default function RootLayout({ lang }: { lang: string }) {
  const [language, setLanguage] = useState({ lang: 'en', dir: 'ltr' });

  useEffect(() => {
    if (lang === 'fa') {
      setLanguage({ lang: 'fa', dir: 'rtl' });
    } else {
      setLanguage({ lang: 'en', dir: 'ltr' });
    }
  }, [lang]);

  // function handleLanguageCall() {
  //   if (language.lang === 'en') {
  //     setLanguage({ lang: 'fa', dir: 'rtl' });
  //   } else {
  //     setLanguage({ lang: 'en', dir: 'ltr' });
  //   }
  // }

  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang: language.lang, dir: language.dir }} />
      <div className="flex">
        <Sidebar />
        <ChatPanel />
      </div>
    </HelmetProvider>
  );
}
