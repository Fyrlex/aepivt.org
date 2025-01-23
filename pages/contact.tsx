import { NextPage } from 'next';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';

const Contact: NextPage = () => {
  return (
    <>
      {useMetaData('Contact', '/contact')}
      <Layout>
        <div className='flex flex-row justify-center my-16'>
          <div className='flex flex-col space-y-10 w-[40vw]'>
            <h1 className="text-[#092E6E] text-6xl font-bold my-2">Contact</h1>
            <p>Feel free to contact us with any questions, rush interest, concerns, etc.</p>
          </div>
        </div>
        <div className='bg-[#A5C3F8] mx-10 flex flex-row justify-center'>
          <div className='w-[40vw] my-10'>
            <h2 className='text-[#092E6E] font-bold text-4xl text-left'>Let&apos;s Chat</h2>
            <div className='text-[#092E6E] text-lg flex flex-row justify-start space-x-20 my-10'>
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
