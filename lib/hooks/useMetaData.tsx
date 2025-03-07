import Head from 'next/head';

export const useMetaData = (url?: string): JSX.Element => {
  return (
    <Head>
      <title>{`AEPi VT | The Sigma Alpha Chapter of the Alpha Epsilon Pi International Fraternity`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="AEPi VT | The Sigma Alpha Chapter of the Alpha Epsilon Pi International Fraternity" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
      <meta property="og:title" content="The Sigma Alpha Chapter of the Alpha Epsilon Pi International Fraternity" />
      <meta
        property="og:description"
        content="AEPi VT | The Sigma Alpha Chapter of the Alpha Epsilon Pi International Fraternity"
      />
      <meta property="og:site_name" content="AEPi Virginia Tech" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://aepi-vt.org/${url}`} />
      <meta property="og:image" content="https://aepi-vt.org/aepicofa.png" />
      <meta content="#06B6D4" data-react-helmet="true" name="theme-color" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="AEPi Virginia Tech" />
      <meta property="twitter:image" content="https://aepi-vt.org/aepicofa.png" />
      <meta
        property="twitter:description"
        content="AEPi VT | The Sigma Alpha Chapter of the Alpha Epsilon Pi International Fraternity"
      />
    </Head>
  );
};
