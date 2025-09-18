'use client';

import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useClientContext } from '../_context/ClientContext';
import { usePathname } from 'next/navigation';
import { Gear } from './Gear';

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
  const { translation, setTranslationHelper } = useClientContext();
  const path = usePathname();
  const [show, setShow] = useState<boolean>();

  const onClose = useCallback(() => {
    setShow(false);
  }, [setShow]);

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

  return (
    <Gear onClose={onClose} showChildren={(!!translation && path.includes('/topic')) || path.includes('/onboarding')}>
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
    </Gear>
  );
};
