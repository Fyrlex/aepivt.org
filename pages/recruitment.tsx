import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';

const Recruitment: NextPage = () => {
  const [rushStatus, setRushStatus] = useState<string>('Closed');
  const [rushDescription, setRushDescription] = useState<string>(
    'Rush is currently closed. Please check back later for updates.',
  );

  useEffect(() => {
    const today = new Date();
    const rushStart = new Date('2024-08-26');
    const rushEnd = new Date('2024-09-11');

    const informalStart = new Date('2024-09-16');
    const informalEnd = new Date('2024-09-25');

    if (today >= rushStart && today <= rushEnd) {
      setRushStatus('Open');
      setRushDescription(
        'Rush is currently open. View our rush events below to see how you can get involved and meet the brothers.',
      );
    } else if (today >= informalStart && today <= informalEnd) {
      setRushStatus('Informal Rush');
      setRushDescription(
        'Informal Rush is currently open. Reach out to Rush Chair Harrison Cymbler as soon as possible to get involved.',
      );
    } else {
      setRushStatus('Closed');
    }
  }, [rushStatus]);

  return (
    <>
      {useMetaData('Recruitment', '/recruitment')}
      <Layout>
        <div className="flex flex-col items-center">
          <Image alt="Group photo" src={'/assets/aepirecruitment.webp'} width={1903} height={640} />
          <div className="text-center w-[45vw] mx-auto flex flex-col items-center space-y-4 my-10">
            <h1 className="text-[#1756C3] text-5xl font-bold my-2">Interested in Rush?</h1>
            <div className="text-xl font-light flex flex-col space-y-3">
              <p>
                Rush is a two-week period in which any undergraduate student has an opportunity to get involved with the
                fraternity in a non-committal atmosphere, to help them determine if joining is right for them.
              </p>
              <p>
                If you are interested in rushing the chapter, reach out{' '}
                <span className="font-normal">
                  Rush Chair Harrison Cymbler (<a href="mailto:harrisonc22@vt.edu">harrisonc22@vt.edu</a> /
                  516-427-2299)
                </span>{' '}
                for more information and guidance.
              </p>
              <p className="font-normal">
                Alpha Epsilon Pi is an inclusive organization that welcomes members from all backgrounds who espouse our
                values and seek brotherhood.
              </p>
            </div>
          </div>
          <Link href={'/admin'} className="text-white bg-[#1767C3] py-3 px-4 mb-10">
            Join Today
          </Link>
          <div className="text-[#1756C3] text-5xl font-bold text-center bg-[#EFEEE7] py-10 flex flex-col items-center w-full">
            <p>UCSO Affilations</p>
            <div className="flex flex-row space-x-10 my-10">
              <Image alt="VT IFC" src={'/assets/vtifc.png'} width={250} height={250} />
              <Image alt="VT JSU" src={'/assets/vtjsu.webp'} width={250} height={250} />
            </div>
          </div>
          <div className="my-10 text-center">
            <h2 className="text-[#1756C3] text-5xl font-bold">Rush Status: {rushStatus}</h2>
            <p className="my-10 text-xl">{rushDescription}</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Recruitment;
