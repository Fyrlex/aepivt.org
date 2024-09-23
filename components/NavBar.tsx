import Image from 'next/image';
import { FC } from 'react';
import { NavBarPage } from '../typings/index';

const pages: NavBarPage[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Recruitment',
    url: '/recruitment',
  },
  {
    name: 'Officers',
    url: '/officers',
  },
  {
    name: 'Philanthropy',
    url: '/philanthropy',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
];

const Navbar: FC = () => {
  return (
    <nav className="flex flex-row justify-between py-10 px-20">
      <div className="flex flex-row space-x-5 items-center">
        <Image alt="AEPi Coat of Arms" src={'/assets/aepicofa.webp'} width={60} height={100} />
        <p className="text-[#1756C3] text-2xl font-bold">Alpha Epsilon Pi</p>
      </div>
      <div className="flex flex-row space-x-5 items-center">
        {pages.map(page => (
          <a className="text-slate-950 text-xl" href={page.url} key={page.name}>
            {page.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
