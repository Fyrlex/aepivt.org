import process from 'process';
import { GetServerSideProps, NextPage } from 'next';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';
import { IPhilanthropy } from '../src/models/Philanthropy';

interface Props {
  philanthropy: IPhilanthropy;
}

const Philanthropy: NextPage<Props> = ({ philanthropy }) => {
  return (
    <>
      {useMetaData('Philanthropy', '/philanthropy')}
      <Layout>
        <div className='flex flex-row justify-center my-16'>
          <div className='flex flex-col space-y-10 w-[40vw]'>
            <h1 className='text-[#092E6E] text-6xl font-bold my-2'>Philanthropy and Service</h1>
            <div className='flex flex-col space-y-10 font-light text-xl'>
              <p>
                The Sigma Alpha chapter commits itself to philanthropic works, and we have a rich history of great philanthropies such as our Animal House Philanthropy.
              </p>
              <p>
                We also serve the Jewish Community in many ways, including setting up the Sukkah for both Hillel and Chabad every year.
              </p>
            </div>
          </div>
        </div>
        <div className='text-[#092E6E] w-full bg-[#A5C3F8] p-10'>
          <div className='bg-white'>
            <h2 className='font-bold text-5xl'>{philanthropy.title}</h2>
          </div>
        </div>
      </Layout >
    </>
  );
};

export default Philanthropy;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const request = await fetch(`${process.env.NEXTAUTH_URL}/api/philanthropy`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  return {
    props: {
      philanthropy: await request.json(),
    },
  };
};
