import { NextPage } from 'next';
import { useRouter } from 'next/router.js';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';

const NotFound: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <>
      {useMetaData(pathname)}
      <Layout>
        <p className="text-lg">Oops, this page doesn&apos;t exist</p>
      </Layout>
    </>
  );
};

export default NotFound;
