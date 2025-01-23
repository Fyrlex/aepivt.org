import process from 'process';
import { GetServerSideProps, NextPage } from 'next';
import { getServerSession } from 'next-auth';
import AdminEBoardCard from '../../components/AdminEboardCard';
import Layout from '../../components/Layout';
import { useMetaData } from '../../lib/hooks/useMetaData';
import { IEboardOfficer } from '../../src/models/Officer';
import { authOptions } from '../api/auth/[...nextauth]';

interface Props {
  officers: IEboardOfficer[];
}

const AdminEboard: NextPage<Props> = ({ officers }) => {
  return (
    <>
      {useMetaData('Admin EBoard', '/admin/eboard')}
      <Layout>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-[#092E6E] text-6xl font-bold my-2">Executive Board</h1>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 place-items-center gap-20">
            {officers.map((officer, i) => (
              <AdminEBoardCard officer={officer} key={i} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminEboard;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }

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
