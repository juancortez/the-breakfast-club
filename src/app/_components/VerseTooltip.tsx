'use client';

import { useCallback, useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import { useClientContext } from '../_context/ClientContext';
import type { AvailableTranslations } from '../_models/Translations.models';

interface VerseTooltipProps {
  verse: string;
  identifier: string;
}

interface VerseModalProps extends VerseTooltipProps {
  onClose: () => void;
}

class ApiClient {
  static async getVerse(identifier: string, options?: { translation: AvailableTranslations }): Promise<string> {
    const translation = options?.translation || 'esv';
    const cacheKey = translation + '__' + identifier;
    const cache = localStorage.getItem(cacheKey);
    if (cache) {
      return Promise.resolve(cache);
    }
    const response = await fetch(`/api/bible?translationId=${identifier}&translation=${translation}`);
    if (!response.ok) {
      throw new Error();
    }
    const { content } = await response.json();
    localStorage.setItem(cacheKey, content);
    return content;
  }
}

const VerseModal = ({ verse, identifier, onClose }: VerseModalProps) => {
  const { translation } = useClientContext();

  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState<string>();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const request = useCallback(async () => {
    const selectedTranslation = translation?.identifier || 'esv';

    try {
      setIsLoading(true);
      const content = await ApiClient.getVerse(identifier, {
        translation: selectedTranslation,
      });
      setContent(content);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError((e as Error)?.message || `Unable to find ${verse}.`);
    }
  }, [setIsLoading, setContent, setError, identifier, verse, translation]);

  useEffect(() => {
    request();
  }, [request]);

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={(evt) => {
        if ((evt.target as Element).closest("[data-testid='modal']")) {
          return;
        }
        onClose();
      }}
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            data-testid="modal"
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="flex items-start flex-col align">
                <div className="mt-3 justify-start sm:mt-0 sm:self-start">
                  <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                    {verse}
                    {translation?.title ? ` (${translation.title})` : ''}
                  </h3>
                </div>
                <div className="mt-2 self-center min-h-12">{isLoading ? <Spinner /> : <p className="text-sm text-gray-500">{error ?? content}</p>}</div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function VerseTooltip(props: VerseTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const onClose = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  return (
    <div>
      <span role="button" className="cursor-pointer  text-blue-600 hover:text-blue-800 visited:text-purple-600" onClick={() => setIsVisible((e) => !e)}>
        <svg className="h-4 w-4 text-stone-500 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>{' '}
        {props.verse}
      </span>
      {isVisible && <VerseModal {...props} onClose={onClose} />}
    </div>
  );
}
