import type { Metadata } from 'next';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  verification: {
    other: {
      'naver-site-verification': 'naver4f66426ef39e342ddb0dcbced69b7b74',
    },
  },
};

/**
 * Since we have a `not-found.tsx` page on the root, a layout file
 * is required, even if it's just passing children through.
 *
 * https://next-intl.dev/docs/environments/error-files#catching-non-localized-requests
 */
export default function RootLayout({ children }: Props) {
  return children;
}
