import '../public/styles/globals.css';

import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element {
  return (
    <>
      <SessionProvider session={session}>
        <div className='fade-in'>
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </>
  );
}
