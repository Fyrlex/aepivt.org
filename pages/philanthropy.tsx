import process from 'process';
import { GetServerSideProps, NextPage } from 'next';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';
import { PhilanthropyOptions } from '../models/Philanthropy';
import Image from 'next/image.js';

interface Props {
  philanthropy: PhilanthropyOptions;
}

const Philanthropy: NextPage<Props> = ({ philanthropy }) => {
  return (
    <>
      {useMetaData('/philanthropy')}
      <Layout>
        <div className='my-10 flex justify-center text-[#092E6E] mx-5'>
          <div className='flex flex-col space-y-10 md:my-0'>
            <h1 className='my-2 text-5xl md:text-6xl font-bold'>Philanthropy and Service</h1>
            <div className='flex flex-col space-y-10 text-xl font-light'>
              <p>
                The Sigma Alpha chapter commits itself to philanthropic works, and we have a rich history of great philanthropies such as our Animal House Philanthropy.
              </p>
              <p>
                We also serve the Jewish Community in many ways, including setting up the Sukkah for both Hillel and Chabad every year.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full bg-[#A5C3F8] p-8 md:p-16 text-[#092E6E]'>
          <div className='flex flex-col md:flex-row items-center justify-between bg-white'>
            <div className='flex flex-col space-y-5 m-10 md:mx-20 md:my-0'>
              <h2 className='text-4xl md:text-6xl font-bold'>{philanthropy.title}</h2>
              <h3 className='font-bold text-2xl md:text-3xl'>{philanthropy.subtitle}</h3>
              <p className='font-light'>{philanthropy.description}</p>
              <a className="my-10 w-fit bg-[#092E6E] px-5 py-2 text-xl font-light text-white" href='https://aepi.crowdchange.co/30247'>
                Donate Here
              </a>
            </div>
            <Image alt='Philanthropy' src="/assets/philanthropy/title.png" width={500} height={100} />
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
      philanthropy: (await request.json()).data,
    },
  };
};
