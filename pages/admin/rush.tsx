import { GetServerSideProps, NextPage } from 'next';
import { getServerSession } from 'next-auth';
import Layout from '../../components/Layout';
import { useMetaData } from '../../lib/hooks/useMetaData';
import { authOptions } from '../api/auth/[...nextauth]';

const AdminRush: NextPage = () => {
  const getSemester = () => {
    const date = new Date();
    const month = date.getMonth();

    if (month >= 0 && month <= 4) {
      return 'Spring ' + date.getFullYear();
    } else if (month >= 5 && month <= 11) {
      return 'Fall  ' + date.getFullYear();
    }
  };

  return (
    <>
      {useMetaData('/admin/login')}
      <Layout>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="my-2 text-6xl font-bold text-[#092E6E]">Rush Events</h1>
          <h2 className="my-2 text-2xl font-bold text-[#092E6E]">{getSemester()}</h2>
        </div>
      </Layout>
    </>
  );
};

export default AdminRush;

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
