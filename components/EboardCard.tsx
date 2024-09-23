import Image from 'next/image.js';
import { FC } from 'react';
import { SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si';
import { EboardOfficer } from '../typings/index.js';

interface Props {
  officer: EboardOfficer;
}

const EboardCard: FC<Props> = ({ officer }) => {
  return (
    <>
      <div className="w-[30vw] bg-[#A5C3F8] flex flex-row pb-10">
        <Image className="" alt={officer.name} src={officer.image} width={300} height={300} />
        <div className="my-10 mx-5 text-[#092E6E]">
          <h3 className="font-light text-xl">{officer.position}</h3>
          <h2 className="font-bold text-2xl">{officer.name}</h2>
          <p className="text-lg font-light">
            Class of {officer.gradYear} | {officer.pledgeClass}
          </p>
          <p className="text-lg font-light">{officer.major}</p>
          <p className="text-lg font-light my-5">{officer.email}</p>
          <p className="text-lg font-light my-5">{officer.phone}</p>
          <div className="text-black flex flex-row space-x-3">
            <SiInstagram />
            <SiFacebook />
            <SiLinkedin />
          </div>
        </div>
      </div>
    </>
  );
};

export default EboardCard;
