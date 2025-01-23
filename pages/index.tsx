import { NextPage } from 'next';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';

const Home: NextPage = () => {
  return (
    <>
      {useMetaData('Home', '/')}
      <Layout>
        <h1 className='text-8xl text-[#1756C3] text-with-border text-center'>Virginia Tech <br /> Alpha Epsilon Pi</h1>
        <div className='grid grid-rows-2 grid-cols-3 text-5xl font-bold text-with-border-black text-gray-100'>
          <div className='w-full h-[540px] bg-gray-100 flex items-center bg-cover bg-center' style={{ backgroundImage: "url('/assets/ourvalues.webp')" }}>
            <h3 className='mx-auto text-center mt-10'>Our<br />Values</h3>
          </div>
          <div className='w-max bg-gray-100 flex items-center'>
            <h3>Faith</h3>
          </div>
          <div className='w-full h-[540px] bg-gray-100 flex items-center bg-cover bg-center' style={{ backgroundImage: "url('/assets/perseverance.webp')" }}>
            <h3 className='mx-auto text-center mt-10'>Perseverance</h3>
          </div>
          <div className='w-max bg-gray-100 flex items-center'>
            <h3>Humility</h3>
          </div>
          <div className='w-max bg-gray-100 flex items-center'>
            <h3>Mutual Helpfullness</h3>
          </div>
          <div className='w-max bg-gray-100 flex items-center'>
            <h3>Honesty</h3>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='w-1/2 flex flex-col items-center my-10 mb-20'>
            <h2 className='text-4xl text-[#1756C3] font-bold my-5 text-center'>Our Mission</h2>
            <div className='flex flex-col w-3/5 text-xl font-light space-y-10'>
              <p>The mission of Alpha Epsilon Pi is to provide education, resources and training to the future leaders of the world’s Jewish communities. Alpha Epsilon Pi was founded to provide opportunities for Jewish men seeking the best possible college and fraternity experience.</p>
              <p>Since our founding in 1913, more than 102,000 men have worn the badge of Alpha Epsilon Pi and each year, thousands of undergraduates perform the Ritual of Initiation, which remains the same ritual adopted decades ago.</p>
              <p>Our basic purpose is to provide the opportunity for a Jewish man to be able to join an organization whose purpose is not specifically religious, but rather social and cultural in nature. <span className='font-semibold text-[#092E6E]'>Alpha Epsilon Pi is a Jewish fraternity and brotherhood that is open to all who are willing to espouse its values and mission.</span></p>
              <a href='https://aepi.org/about/about-aepi/#our-mission' target='_blank' rel='noreferrer noopener' className='p-3 w-fit text-sm text-[#1756C3] border border-[#1756C3] hover:bg-[#1756C3] hover:text-gray-100 duration-300'>Learn More</a>
            </div>
          </div>
          <div className='w-1/2 h-[969px] bg-gray-100 flex items-center bg-cover bg-center' style={{ backgroundImage: "url('/assets/vtwar.webp')" }}>
            <h3 className='mx-auto text-center mt-10 text-4xl text-white'>Half Screen Image</h3>
          </div>
        </div>
        <div className='bg-[#092E6E]'>
          <h2 className='text-white text-8xl font-bold py-20 text-center'>WHAT ARE WE UP TO?</h2>
        </div>
      </Layout>
    </>
  );
};

export default Home;
