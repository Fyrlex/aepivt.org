import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';

const NotFound: NextPage = () => {
  return (
    <>
      {useMetaData('Page not found')}
      <Layout>
        <div className="relative h-screen">
          <div className="h-96 grid grid-cols gap-4 place-content-center text-black">
            <h1 className="text-7xl font-bold">404</h1>
            <p className="text-lg">Oops, this page doesn&apos;t exist</p>
            <Link href="/">
              <button className="h-10 px-5 w-full m-2 transition-colors duration-150 bg-orange-200 rounded-lg focus:shadow-outline">
                Home
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
