import { GetServerSideProps, NextPage } from 'next';
import { getServerSession } from 'next-auth';
import AdminCard, { AdminCardProps } from '../../components/AdminCard';
import Layout from '../../components/Layout';
import { useMetaData } from '../../lib/hooks/useMetaData';
import { authOptions } from '../api/auth/[...nextauth].js';

const Admin: NextPage = () => {
  const adminPages: AdminCardProps[] = [
    {
      title: 'EBoard',
      description: 'Manage EBoard brothers',
      image: '/assets/officers/tomas.jpg',
      url: '/eboard',
    },
    {
      title: 'Minor Board',
      description: 'Manage Minor Board brothers',
      image: '/images/adminminorboard.jpg',
      url: '/minorboard',
    },
    {
      title: 'Philanthropy',
      description: 'Manage Philanthropy content',
      image: '/images/adminphilanthropy.jpg',
      url: '/philanthropy',
    },
    {
      title: 'Rush',
      description: 'Manage rush events',
      image: '/images/adminrush.jpg',
      url: '/rush',
    },
  ];

  return (
    <>
      {useMetaData('Admin', '/admin')}
      <Layout>
        <h1 className="text-center text-6xl">Admin</h1>
        <div className='flex justify-center'>
          <div className='grid grid-cols-4 gap-5 place-items-center'>
            {adminPages.map((page, i) => (
              <AdminCard key={i} {...page} />
            ))}
          </div>
        </div>
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
