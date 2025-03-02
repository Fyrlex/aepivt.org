import process from 'process';
import { GetServerSideProps, NextPage } from 'next';
import EboardCard from '../components/EboardCard';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';
import { EboardOfficerOptions } from '../models/EboardOfficer';
import { MinorBoardOfficerOptions } from '../models/MinorBoardOfficer.js';

interface Props {
  officers: EboardOfficerOptions[];
  minorOfficers: MinorBoardOfficerOptions[];
}

const Officers: NextPage<Props> = ({ officers, minorOfficers }) => {
  const getSemester = () => {
    const date = new Date();
    const month = date.getMonth();

    if (month >= 0 && month <= 4) {
      return 'Spring ' + date.getFullYear() + ' - Fall ' + date.getFullYear();
    } else if (month >= 5 && month <= 11) {
      return 'Fall  ' + date.getFullYear() + ' - Spring ' + (date.getFullYear() + 1);
    }
  };

  return (
    <>
      {useMetaData('/officers')}
      <Layout>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="my-2 text-6xl font-bold text-[#092E6E]">Executive Board</h1>
          <h2 className="my-2 text-2xl font-bold text-[#092E6E]">{getSemester()}</h2>
          <p className="my-10 max-w-lg text-xl font-light">
            Our executive board consists of the outstanding student leaders who are elected to represent their
            brotherhood. From a variety of backgrounds and majors, they are core to our success.
          </p>
          <button className="my-10 bg-[#092E6E] px-5 py-2 text-xl font-light text-white">
            Order of the Spoon
          </button>
        </div>
        <div className="my-10 flex justify-center">
          <div className="grid grid-cols-2 place-items-center gap-20">
            {officers.map((officer, i) => (
              <EboardCard officer={officer} key={i} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#092E6E] py-32 text-center text-white">
          <h2 className="my-3 text-6xl font-bold">Minor Board</h2>
          <p className='w-1/3 text-3xl font-light'>The Minor Board consists of officers that support the auxillary functions of the fraternity. Members of Minor Board are often Newly Initiated Brothers.</p>
        </div>
        <div className='flex flex-col items-center justify-center bg-[#A5C3F8] py-10 font-light text-[#092E6E]'>
          {minorOfficers.map((officer, i) => (
            <p key={i} className='text-2xl'>{officer.position} - {officer.name} &apos;{officer.gradYear}</p>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center bg-[#092E6E] py-32 text-center text-white">
          <h2 className="my-3 text-6xl font-bold">Order of The Spoon</h2>
          <p className='w-1/3 text-3xl font-light'>Order of the Spoon was created by the Founding Fathers as a way to recognize every Master of the Chapter. The name originates from the Founding Master having to use a spoon as a gavel for chapter meetings because he did not have one. Now the Master&apos;s Gavel has been engraved &quot;The Spoon of Sigma Alpha&quot; as a tribute to the original spoon.</p>
        </div>
        <div className='my-5 flex flex-col items-center text-3xl font-light text-[#092E6E]'>
          <p className='font-normal'>Masters of Sigma Alpha:</p>
          <p>Jason Rubin (Founding Master)</p>
          <p>Alex Nizhnikov (2001)</p>
          <p>Adam Waddell (2002)</p>
          <p>Mike Weinstein (2003)</p>
          <p>Sam Renaut (2004)</p>
          <p>Max Saperstone (2005)</p>
          <p>Michael Schwartz (2006)</p>
          <p>Vic Kasoff (2007)</p>
          <p>Corey Whisler (2008)</p>
          <p>Jeff Katz (2009)</p>
          <p>Ben Han (2010)</p>
          <p>Andy Griesinger (2011)</p>
          <p>David Umansky (2012)</p>
          <p>Aaron Massuda (2013)</p>
          <p>Connor Maldonato (2014)</p>
          <p>Terrence Solomon (2015)</p>
          <p>Ross Broudy (2016)</p>
          <p>Jesse Isserow (2017)</p>
          <p>Seth Finkel (2018)</p>
          <p>Jordan Birnholz (2019)</p>
          <p>Tyler Malin (2020, 2021)</p>
          <p>Alexander Golden (2022)</p>
          <p>Tal Kalderon (2023)</p>
          <p>Tomas Loureiro (2024)</p>
        </div>
      </Layout>
    </>
  );
};

export default Officers;


export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const request = await fetch(`${process.env.NEXTAUTH_URL}/api/eboard`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  const minorRequest = await fetch(`${process.env.NEXTAUTH_URL}/api/minorboard`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  return {
    props: {
      officers: (await request.json()).data,
      minorOfficers: (await minorRequest.json()).data,
    },
  };
};
