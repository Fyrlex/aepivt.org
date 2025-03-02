import { GetServerSideProps, NextPage } from 'next';
import { getServerSession } from 'next-auth';
import { signOut } from 'next-auth/react';
import AdminCard, { AdminCardProps } from '../../components/AdminCard';
import Layout from '../../components/Layout';
import { useMetaData } from '../../lib/hooks/useMetaData';
import { authOptions } from '../api/auth/[...nextauth]';

const Admin: NextPage = () => {
  const adminPages: AdminCardProps[] = [
    {
      title: 'EBoard',
      description: 'Manage EBoard brothers',
      url: '/eboard',
    },
    {
      title: 'Minor Board',
      description: 'Manage Minor Board brothers',
      url: '/minorboard',
    },
    {
      title: 'Philanthropy',
      description: 'Manage Philanthropy content',
      url: '/philanthropy',
    },
    {
      title: 'Rush',
      description: 'Manage rush events',
      url: '/rush',
    },
  ];

  return (
    <>
      {useMetaData('/admin/login')}
      <Layout>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="my-2 text-6xl font-bold text-[#092E6E]">Executive Board</h1>
          <h2 className="my-2 text-2xl font-bold text-[#092E6E]">Welcome to the Admin Portal</h2>
          <div className='my-10 flex justify-center'>
            <div className='flex flex-row space-x-10'>
              {adminPages.map((page, i) => (
                <AdminCard key={i} {...page} />
              ))}
            </div>
          </div>
          <button className='bg-[#092E6E] px-8 py-4 text-2xl text-white' onClick={() => signOut()}>Log Out</button>
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
