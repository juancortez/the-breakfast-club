'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

const IS_GROUP_LAUNCH_LIVE = false;

export default function GroupLaunchBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const path = usePathname();

  if (!IS_GROUP_LAUNCH_LIVE) {
    return null;
  }

  if (path !== '/') {
    return false;
  }

  if (!isVisible) return null;

  return (
    <div className="space-y-4">
      {/* Option 1: Yellow accent button */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 border-l-4 border-yellow-400 dark:border-yellow-300">
        <div className="px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center min-w-0 flex-1">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
                </svg>
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <p className="text-sm font-medium text-white sm:text-base">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-400 text-gray-900 mr-2">New</span>
                  Group Launch is now live!
                </p>
              </div>
            </div>

            <div className="flex items-center ml-4 flex-shrink-0 space-x-2">
              <a
                href="/group-launch"
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-900 bg-yellow-400 hover:bg-yellow-300 rounded-md transition-colors duration-200"
              >
                Learn More
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <button
                onClick={() => setIsVisible(false)}
                className="flex-shrink-0 p-1 text-white text-opacity-80 hover:text-opacity-100 hover:bg-white hover:bg-opacity-20 rounded-md transition-colors duration-200"
                aria-label="Dismiss banner"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 animate-pulse"></div>
      </div>
    </div>
  );
}
