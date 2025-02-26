import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';
import { EboardOfficerOptions } from '../models/EboardOfficer.js';
import { RushOptions } from '../models/Rush.js';

interface Props {
  rush: RushOptions;
  rushChair: EboardOfficerOptions;
}

const Recruitment: NextPage<Props> = ({ rush, rushChair }) => {
  const [rushDescription, setRushDescription] = useState<string>(
    'Rush is currently closed. Reach out to us and we will let you know when the next rush period is.',
  );

  useEffect(() => {
    if (rush.status === 'Open') {
      setRushDescription(
        'Rush is currently open. View our rush events below to see how you can get involved and meet the brothers.',
      );
    } else if (rush.status === 'Informal') {
      setRushDescription(
        'Informal Rush is currently open. Reach out to Rush Chair Harrison Cymbler as soon as possible to get involved.',
      );
    }
  }, [rush.status]);

  return (
    <>
      {useMetaData('/recruitment')}
      <Layout>
        <div className="flex flex-col items-center">
          <Image alt="Group photo" src={'/assets/aepirecruitment.webp'} width={1903} height={640} className='w-full' />
          <div className="mx-auto my-10 flex w-[45vw] flex-col items-center space-y-4 text-center">
            <h1 className="my-2 font-bold text-5xl text-[#1756C3]">Interested in Rush?</h1>
            <div className="flex flex-col space-y-3 text-xl font-light">
              <p>
                Rush is a two-week period in which any undergraduate student has an opportunity to get involved with the
                fraternity in a non-committal atmosphere, to help them determine if joining is right for them.
              </p>
              <p>
                If you are interested in rushing the chapter, reach out{' '}
                <span className="font-normal">
                  Rush Chair {rushChair.name} (<a href={`mailto:${rushChair.email}`}>{rushChair.email}</a> /{' '}
                  {rushChair.phone})
                </span>{' '}
                for more information and guidance.
              </p>
              <p className="font-normal">
                Alpha Epsilon Pi is an inclusive organization that welcomes members from all backgrounds who espouse our
                values and seek brotherhood.
              </p>
            </div>
          </div>
          <Link href={'https://docs.google.com/forms/d/1sk40dWAIxu_RCOqHHAY1tPEEu61WfvJD8uMqNTl7RCw/viewform?edit_requested=true'} className="mb-10 bg-[#1767C3] px-4 py-3 text-white">
            Join Today
          </Link>
          <div className="flex w-full flex-col items-center bg-[#EFEEE7] py-10 text-center text-5xl font-bold text-[#1756C3]">
            <p>UCSO Affilations</p>
            <div className="my-10 flex flex-row space-x-10">
              <Image alt="VT IFC" src={'/assets/vtifc.png'} width={250} height={250} />
              <Image alt="VT JSU" src={'/assets/vtjsu.webp'} width={250} height={250} />
            </div>
          </div>
          <div className="my-10 text-center">
            <h2 className="text-5xl font-bold text-[#1756C3]">Rush Status: {rush.status}</h2>
            <p className="my-10 text-xl">{rushDescription}</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Recruitment;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const request = await fetch(`${process.env.NEXTAUTH_URL}/api/rush`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  const requestRushChair = await fetch(`${process.env.NEXTAUTH_URL}/api/eboard/9`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );


  return {
    props: {
      rush: (await request.json()).data,
      rushChair: (await requestRushChair.json()).data
    },
  };
};
