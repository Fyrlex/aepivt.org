import process from 'process';
import { GetServerSideProps, NextPage } from 'next';
import EboardCard from '../components/EboardCard';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';
import { IEboardOfficer } from '../src/models/Officer.js';

interface Props {
  officers: IEboardOfficer[];
}


const Officers: NextPage<Props> = ({ officers }) => {
  return (
    <>
      {useMetaData('Officers', '/officers')}
      <Layout>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-[#092E6E] text-6xl font-bold my-2">Executive Board</h1>
          <h2 className="text-[#092E6E] text-2xl font-bold my-2">Spring 2024 - Fall 2024</h2>
          <p className="w-[40vw] text-xl font-light my-10">
            Our executive board consists of the outstanding student leaders who are elected to represent their
            brotherhood. From a variety of backgrounds and majors, they are core to our success.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center gap-20">
            {officers.map((officer, i) => (
              <EboardCard officer={officer} key={i} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Officers;


export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const request = await fetch(`${process.env.NEXTAUTH_URL}/api/eboard`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  return {
    props: {
      officers: (await request.json()).data,
    },
  };
};
