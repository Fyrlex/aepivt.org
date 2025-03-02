import { NextPage } from 'next';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';

const Contact: NextPage = () => {
  return (
    <>
      {useMetaData('/contact')}
      <Layout>
        <div className='my-10 flex flex-row justify-center'>
          <div className='flex w-[40vw] flex-col space-y-10'>
            <h1 className="my-2 text-6xl font-bold text-[#092E6E]">Contact</h1>
            <p>Feel free to contact us with any questions, rush interest, concerns, etc.</p>
          </div>
        </div>
        <div className='mx-10 flex flex-row justify-center bg-[#A5C3F8]'>
          <div className='my-10 w-[40vw]'>
            <h2 className='text-left text-4xl font-bold text-[#092E6E]'>Let&apos;s Chat</h2>
            <div className='my-10 flex flex-row justify-start space-x-20 text-lg text-[#092E6E]'>
              <div>
                <p className='font-bold'>Phone</p>
                <p className='font-light'>571-535-8951</p>
              </div>
              <div>
                <p className='font-bold'>Email</p>
                <a className='font-light' href='mailto:aepisa.vt@gmail.com'>aepisa.vt@gmail.com</a>
              </div>
            </div>

          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
