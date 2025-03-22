'use client';

import { createContext, ReactElement, useCallback, useContext, useState } from 'react';

type Context = {
  translation:
    | {
        identifier: 'esv';
        title: 'ESV';
      }
    | {
        identifier: 'niv';
        title: 'NIV';
      };
  setTranslationHelper: (_translation: Context['translation']) => void;
};
export const ClientContext = createContext<Context>({
  translation: {
    identifier: 'esv',
    title: 'ESV',
  },
  setTranslationHelper: () => {},
});

export const ClientProvider = ({ children }: { children: ReactElement }) => {
  const [translation, setTranslation] = useState<Context['translation']>(
    localStorage.getItem('client-translation')
      ? JSON.parse(localStorage.getItem('client-translation')!)
      : {
          identifier: 'esv',
          title: 'ESV',
        }
  );
  const setTranslationHelper = useCallback(
    (t: Context['translation']) => {
      setTranslation(t);
      localStorage.setItem('client-translation', JSON.stringify(t));
    },
    [setTranslation]
  );

  return <ClientContext.Provider value={{ translation, setTranslationHelper }}>{children}</ClientContext.Provider>;
};

export const useClientContext = () => useContext(ClientContext);
