import process from 'process';
import { NextPage } from 'next';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

import Layout from '../../components/Layout';
import { useMetaData } from '../../lib/hooks/useMetaData';

interface Props {
  redirect: string;
}

const AdminLogin: NextPage<Props> = () => {
  const { data: session } = useSession();

  return (
    <>
      {useMetaData('Admin Login', '/admin/login')}
      <Layout>
        <div className="flex flex-col items-center justify-center w-full h-full">
          {session ? (
            <>
              <h1 className="text-center text-4xl mb-4">You are already logged in to admin</h1>
              <div className="flex flex-col space-y-5 my-10">
                <Link href={'/admin'} className="text-white bg-[#1767C3] py-2 px-4">
                  Admin Home
                </Link>
                <button onClick={() => signOut()} className="text-white bg-[#1767C3] py-2">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-center text-3xl mb-4">Please login to access the admin portal.</h1>
              <button
                className="text-white bg-[#1756C3] py-2 px-6"
                onClick={(): Promise<unknown> =>
                  signIn('google', {
                    redirect: true,
                    callbackUrl: process.env.NEXT_PUBLIC_URL,
                  })
                }
              >
                Login
              </button>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default AdminLogin;
