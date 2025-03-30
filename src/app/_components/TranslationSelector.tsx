'use client';

import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useClientContext } from '../_context/ClientContext';
import { usePathname } from 'next/navigation';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: RefObject<HTMLElement>, cb: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        cb();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, cb]);
}

export type Variant = 'ESV' | 'NIV' | 'KJV' | 'Message';
const ALL_VARIANTS: Variant[] = ['ESV', 'KJV', 'NIV', 'Message'];
const Translation = ({ onSetTranslation, variant }: { onSetTranslation: (translation: Variant) => void; variant: Variant }) => {
  return (
    <button
      onClick={() => onSetTranslation(variant)}
      tabIndex={0}
      className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
      role="menuitem"
    >
      {variant}
    </button>
  );
};

export const TranslationSelector = () => {
  const [showCog, setShowCog] = useState<boolean>(true);
  const { translation, setTranslationHelper } = useClientContext();
  const path = usePathname();
  const [show, setShow] = useState<boolean>();
  const wrapperRef = useRef(null);
  const onOutsideClick = useCallback(() => {
    setShow(false);
  }, []);
  useOutsideAlerter(wrapperRef, onOutsideClick);

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShow(false);
      }
    },
    [setShow]
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  const onSetTranslation = useCallback(
    (variant: Variant) => {
      setShow(false);

      switch (variant) {
        case 'ESV':
          return setTranslationHelper({
            identifier: 'esv',
            title: 'ESV',
          });
        case 'NIV':
          return setTranslationHelper({
            identifier: 'niv',
            title: 'NIV',
          });
        case 'KJV':
          return setTranslationHelper({
            identifier: 'kjv',
            title: 'KJV',
          });
        case 'Message':
          return setTranslationHelper({
            identifier: 'msg',
            title: 'Message',
          });
        default:
          setTranslationHelper({
            identifier: 'esv',
            title: 'ESV',
          });
      }
    },
    [setShow, setTranslationHelper]
  );

  if (!translation) {
    return null;
  }

  if (path === '/') {
    return null;
  }

  return (
    <div ref={wrapperRef}>
      {showCog && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 inline text-gray-900 dark:text-white cursor-pointer"
          onClick={() => setShowCog(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
          />
        </svg>
      )}

      {!showCog && (
        <div className="relative inline-block text-left dropdown">
          <span className="rounded-md shadow-sm">
            <button
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 text-black dark:text-white bg-sky-800 hover:bg-sky-700 text-white rounded-md"
              type="button"
              aria-haspopup="true"
              aria-expanded="true"
              aria-controls="headlessui-menu-items-117"
              onClick={() => setShow((s) => !s)}
            >
              <span className="w-16">{translation?.title || 'Translation'}</span>
              <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </span>
          <div className={`${show ? 'visible' : 'invisible'} dropdown-menu`}>
            <div
              className="absolute right-0 w-fit pr-3 pl-3 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              aria-labelledby="headlessui-menu-button-1"
              id="headlessui-menu-items-117"
              role="menu"
            >
              <div className="py-1">
                {ALL_VARIANTS.map((option) => (
                  <React.Fragment key={option}>
                    <Translation variant={option} onSetTranslation={onSetTranslation} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
