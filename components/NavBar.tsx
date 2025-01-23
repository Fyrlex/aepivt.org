import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
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
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex flex-row justify-between py-5 md:py-10 px-10 md:px-15 lg:px-20">
      <Link href="/">
        <div className="flex flex-row space-x-5 items-center">
          <Image alt="AEPi Coat of Arms" src={'/assets/aepicofa.webp'} width={60} height={100} />
          <p className="text-[#1756C3] text-2xl font-bold">Alpha Epsilon Pi</p>
        </div>
      </Link>

      <div className="md:flex flex-row space-x-5 items-center hidden">
        {pages.map(page => (
          <a className="text-slate-950 text-xl" href={page.url} key={page.name}>
            {page.name}
          </a>
        ))}
      </div>
      <div
        className="z-20 md:hidden cursor-pointer hover:scale-90 transition-all duration-300 ease-in-out my-auto"
        onClick={(): void => setShowMenu(!showMenu)}
      >
        <Image src="/assets/icons/hamburger.svg" width={35} height={35} alt="Navbar" />
      </div>
      {showMenu && (
        <div className="flex flex-col space-y-5 items-center absolute top-20 right-10 bg-white p-5 rounded-lg shadow-lg">
          {pages.map(page => (
            <>
              {page.name}
            </>))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
