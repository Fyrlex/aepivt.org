import { GetServerSideProps, NextPage } from 'next';
import BlueTitleBar from '../components/BlueTitleBar';
import Layout from '../components/Layout';
import ValueCard from '../components/ValueCard';
import { useMetaData } from '../lib/hooks/useMetaData';
import { RushOptions } from '../models/Rush';
import Link from 'next/link';

interface Props {
  rush: RushOptions;
}

const Home: NextPage<Props> = ({ rush }) => {
  const values: { title: string, backgroundUrl: string; }[] = [
    { title: 'Our Values', backgroundUrl: 'ourvalues.webp' },
    { title: 'Faith', backgroundUrl: 'faith.jpg' },
    { title: 'Perserverance', backgroundUrl: 'perseverance.webp' },
    { title: 'Humility', backgroundUrl: 'humility.jpg' },
    { title: 'Mutual Helpfullness', backgroundUrl: 'mutualhelpfullness.jpg' },
    { title: 'Honesty', backgroundUrl: 'honesty.jpg' },
  ];

  // photos must fit correctly into half the height and a third of the width of the screen
  const otherPhotos = [
    'upto/1.jpg',
    'upto/2.jpg',
    'upto/3.jpg',
    'upto/4.jpg',
    'upto/5.jpg',
    'upto/6.jpg',
  ];

  return (
    <>
      {useMetaData('/')}
      <Layout>
        <div className='flex h-screen w-full flex-col items-center justify-around bg-cover bg-center text-center' style={{ backgroundImage: "url('/assets/allbrothers.jpg')" }}>
          <h1 className='text-with-border text-center text-5xl text-[#1756C3] md:text-8xl -mt-20'>Virginia Tech <br /> Alpha Epsilon Pi</h1>
          <div className='flex flex-col items-center space-y-5'>
            <h2 className='text-with-border text-xl text-[#1756C3] md:text-4xl'>Developing Leadership for the Jewish Community In Blacksburg since 2000</h2>
            <Link href={rush.interestUrl} target='_blank' rel='noreferrer noopener' className="my-10 bg-[#1767C3] px-5 py-2 text-xl font-light text-white">
              Rush Interest
            </Link>
          </div>
        </div>
        <div className='text-with-border-black grid grid-cols-1 font-bold text-gray-100 md:grid-cols-3'>
          {values.map((value, index) => <ValueCard key={index} {...value} />)}
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='my-10 flex flex-col items-center md:w-1/2'>
            <h2 className='my-5 text-center text-4xl font-bold text-[#1756C3]'>Our Mission</h2>
            <div className='flex mx-5 md:mx-20 flex-col space-y-10 text-xl font-light'>
              <p>The mission of Alpha Epsilon Pi is to provide education, resources and training to the future leaders of the world’s Jewish communities. Alpha Epsilon Pi was founded to provide opportunities for Jewish men seeking the best possible college and fraternity experience.</p>
              <p>Since our founding in 1913, more than 102,000 men have worn the badge of Alpha Epsilon Pi and each year, thousands of undergraduates perform the Ritual of Initiation, which remains the same ritual adopted decades ago.</p>
              <p>Our basic purpose is to provide the opportunity for a Jewish man to be able to join an organization whose purpose is not specifically religious, but rather social and cultural in nature. <span className='font-semibold text-[#092E6E]'>Alpha Epsilon Pi is a Jewish fraternity and brotherhood that is open to all who are willing to espouse its values and mission.</span></p>
              <a href='https://aepi.org/about/about-aepi/#our-mission' target='_blank' rel='noreferrer noopener' className='w-fit border border-[#1756C3] p-3 text-sm text-[#1756C3] duration-300 hover:bg-[#1756C3] hover:text-gray-100'>Learn More</a>
            </div>
          </div>
          <div className='flex h-[969px] items-center bg-gray-100 bg-cover bg-center md:w-1/2' style={{ backgroundImage: "url('/assets/vtwar.webp')" }}>
          </div>
        </div>
        <BlueTitleBar title='WHAT ARE WE UP TO?' />
        <div className='grid grid-cols-2 text-5xl md:grid-cols-3 h-screen'>
          {otherPhotos.map((photo, index) => (
            <div key={index}>
              <div className='flex h-full w-full items-center bg-gray-100 bg-cover bg-center' style={{ backgroundImage: `url('/assets/${photo}')` }} />
            </div>
          ))}
        </div>
      </Layout >
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const request = await fetch(`${process.env.NEXTAUTH_URL}/api/rush`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  return {
    props: {
      rush: (await request.json()).data,
    },
  };
};
