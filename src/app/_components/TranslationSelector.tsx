'use client';

import { Ref, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useClientContext } from '../_context/ClientContext';

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

export const TranslationSelector = () => {
  const { translation, setTranslationHelper } = useClientContext();
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

  if (!translation) {
    return null;
  }

  return (
    <div ref={wrapperRef}>
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
            <span>{translation?.title || 'Translation'}</span>
            <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
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
              <button
                onClick={() => {
                  setShow(false);
                  setTranslationHelper({
                    identifier: 'esv',
                    title: 'ESV',
                  });
                }}
                tabIndex={0}
                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                role="menuitem"
              >
                ESV
              </button>
              <button
                onClick={() => {
                  setShow(false);
                  setTranslationHelper({
                    identifier: 'niv',
                    title: 'NIV',
                  });
                }}
                tabIndex={1}
                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                role="menuitem"
              >
                NIV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
