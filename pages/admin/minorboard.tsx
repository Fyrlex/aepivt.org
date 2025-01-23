import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth].js';

export default AdminMinorBoard;

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
