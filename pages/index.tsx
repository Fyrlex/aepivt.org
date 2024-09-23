import { NextPage } from 'next';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';

const Home: NextPage = () => {
  return (
    <>
      {useMetaData('Home', '/')}
      <Layout>
        <div>
          <h1 className="text-center text-[#1756C3] text-7xl font-bold">Virginia Tech Alpha Epsilon Pi</h1>
        </div>
      </Layout>
    </>
  );
};

export default Home;
