import { GetServerSideProps, NextPage } from 'next';
import { getServerSession } from 'next-auth';
import Layout from '../../components/Layout';
import { useMetaData } from '../../lib/hooks/useMetaData';
import { authOptions } from '../api/auth/[...nextauth].js';

const Admin: NextPage = () => {
  return (
    <>
      {useMetaData('Admin', '/admin')}
      <Layout>
        <h1 className="text-center text-6xl">Admin</h1>
      </Layout>
    </>
  );
};

export default Admin;

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

  return {
    props: {
      session: {
        user: {
          name: session.user?.name,
          email: session.user?.email,
          image: session.user?.image ?? null,
        },
      },
    },
  };
};
