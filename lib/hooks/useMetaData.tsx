import process from 'process';
import Head from 'next/head';

export const useMetaData = (page: string, url?: string): JSX.Element => {
  return (
    <Head>
      <title>{`AEPi VT | The Sigma Alpha Chapter of the Alpha Epsilon Pi International Fraternity`}</title>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/assets/aepicofa.webp" type="image/png" />
      <meta property="og:title" content={page} />
      <meta
        property="og:description"
        content="The official website for Clishae with the latest updates for shows, media and more."
      />
      <meta property="og:type" content="website" />
      <meta
        name="description"
        content="The official website for Clishae with the latest updates for shows, media and more."
      />
      <meta name="keywords" content=" clishae Clishae" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + url} />
      <meta property="og:image" content="/assets/aepicofa.webp" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta content="#1756C3" data-react-helmet="true" name="theme-color" />
    </Head>
  );
};
