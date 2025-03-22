'use client';

import { createContext, ReactElement, useCallback, useContext, useEffect, useState } from 'react';

type Context = {
  translation:
    | {
        identifier: 'esv';
        title: 'ESV';
      }
    | {
        identifier: 'niv';
        title: 'NIV';
      }
    | null;

  setTranslationHelper: (_translation: Context['translation']) => void;
};
export const ClientContext = createContext<Context>({
  translation: null,
  setTranslationHelper: () => {},
});

export const ClientProvider = ({ children }: { children: ReactElement }) => {
  const [translation, setTranslation] = useState<Context['translation']>(null);

  useEffect(() => {
    if (!window) {
      return;
    }
    if (window.localStorage.getItem('client-translation')) {
      setTranslation(JSON.parse(window.localStorage.getItem('client-translation')!));
    } else {
      setTranslation({
        identifier: 'esv',
        title: 'ESV',
      });
    }
  }, []);
  const setTranslationHelper = useCallback(
    (t: Context['translation']) => {
      setTranslation(t);
      window.localStorage.setItem('client-translation', JSON.stringify(t));
    },
    [setTranslation]
  );

  return <ClientContext.Provider value={{ translation, setTranslationHelper }}>{children}</ClientContext.Provider>;
};

export const useClientContext = () => useContext(ClientContext);
