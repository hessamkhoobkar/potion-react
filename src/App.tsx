import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';

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

      <div className="flex h-dvh w-dvw items-stretch justify-center">
        <aside className="w-1/3 bg-gray-200 p-8">
          <Button onClick={handleLanguageCall}>Click me</Button>
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
    </>
  );
}

export default App;
