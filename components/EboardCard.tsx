import Image from 'next/image.js';
import { FC } from 'react';
import { SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si';
import { EboardOfficerOptions } from '../models/EboardOfficer';

interface Props {
  officer: EboardOfficerOptions;
}

const EboardCard: FC<Props> = ({ officer }) => {
  return (
    <>
      <div className="flex w-full flex-row bg-[#A5C3F8] pb-10">
        <Image className="" alt={officer.name} src={`/assets/officers/${officer.rank}.jpg`} width={300} height={300} />
        <div className="mx-5 my-10 text-[#092E6E]">
          <h3 className="text-xl font-light">{officer.position}</h3>
          <h2 className="text-3xl font-bold">{officer.name}</h2>
          <p className="text-lg font-light">
            Class of {officer.gradYear} | {officer.pledgeClass}
          </p>
          <p className="text-lg font-light">{officer.major}</p>
          <p className="my-5 text-lg font-light">{officer.email}</p>
          <p className="my-5 text-lg font-light">{officer.phone}</p>
          <div className="flex flex-row space-x-3 text-black">
            <a href={'https://www.instagram.com/' + officer.instagram} target='_blank' rel='noreferrer noopener'><SiInstagram /></a>
            <a href={'https://www.facebook.com/' + officer.facebook} target='_blank' rel='noreferrer noopener'><SiFacebook /></a>
            <a href={'https://www.linkedin.com/' + officer.linkedin} target='_blank' rel='noreferrer noopener'><SiLinkedin /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EboardCard;
