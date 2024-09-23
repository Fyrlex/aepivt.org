import { NextPage } from 'next';
import EboardCard from '../components/EboardCard';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';
import { EboardOfficer } from '../typings/index.js';

const Officers: NextPage = () => {
  const officers: EboardOfficer[] = [
    {
      rank: 1,
      name: 'Tomas Louriero',
      email: 'tomasloureiro@vt.edu',
      facebook: 'https://www.facebook.com/tomas.loureiro.79',
      gradYear: '2025',
      image: '/assets/officers/tomas.jpg',
      instagram: 'https://www.instagram.com/_tomasloureiro_',
      linkedin: 'https://www.linkedin.com/in/tomasloureiro/',
      major: 'Management Consulting and Analytics',
      phone: '646-460-6826',
      pledgeClass: 'Alpha Rho',
      position: 'Master',
    },
    {
      rank: 2,
      name: 'Matthew Newman',
      email: 'matthewbnewman@vt.edu',
      facebook: 'https://www.facebook.com/matthew.newman.54966',
      gradYear: '2025',
      image: '/assets/officers/matthew.jpg',
      instagram: 'https://www.instagram.com/matt.newman2121/',
      linkedin: 'https://www.linkedin.com/in/matthew-newman-497503236/',
      major: 'Animal and Poultry Science',
      phone: '954-562-6673',
      pledgeClass: 'Alpha Rho',
      position: 'Lieutenant Master',
    },
  ];

  return (
    <>
      {useMetaData('Officers', '/officers')}
      <Layout>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-[#092E6E] text-6xl font-bold my-2">Executive Board</h1>
          <h2 className="text-[#092E6E] text-2xl font-bold my-2">Spring 2024 - Fall 2024</h2>
          <p className="w-[40vw] text-xl font-light my-10">
            Our executive board consists of the outstanding student leaders who are elected to represent their
            brotherhood. From a variety of backgrounds and majors, they are core to our success.
          </p>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-5 mx-72">
          {officers.map((officer, i) => (
            <EboardCard officer={officer} key={i} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Officers;
