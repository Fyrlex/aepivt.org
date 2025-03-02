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
      {useMetaData('/admin/login')}
      <Layout>
        <div className="flex size-full flex-col items-center justify-center">
          {session ? (
            <>
              <h1 className="mb-4 text-center text-4xl">You are already logged in to admin</h1>
              <div className="my-10 flex flex-col space-y-5">
                <Link href={'/admin'} className="bg-[#1767C3] px-4 py-2 text-white">
                  Admin Home
                </Link>
                <button onClick={() => signOut()} className="bg-[#1767C3] py-2 text-white">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="mb-4 text-center text-3xl">Please login to access the admin portal.</h1>
              <button
                className="bg-[#1756C3] px-6 py-2 text-white"
                onClick={(): Promise<unknown> =>
                  signIn('google', {
                    redirect: true,
                    callbackUrl: `${process.env.NEXT_PUBLIC_URL}/admin`,
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
