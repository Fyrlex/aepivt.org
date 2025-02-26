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
    <nav className="flex flex-row justify-between p-5 md:mx-10 md:px-16 lg:px-20">
      <Link href="/">
        <div className="flex flex-row items-center space-x-5">
          <Image alt="AEPi Coat of Arms" src={'/assets/aepicofa.png'} width={100} height={100} />
          <p className="text-4xl font-bold text-[#1756C3]">Alpha Epsilon Pi</p>
        </div>
      </Link>
      <div className="hidden flex-row items-center space-x-5 md:flex">
        {pages.map(page => (
          <a className="text-xl text-slate-950" href={page.url} key={page.name}>
            {page.name}
          </a>
        ))}
      </div>
      {!showMenu && (
        <div
          className={"z-20 my-auto cursor-pointer transition-all duration-300 ease-in-out hover:scale-90 md:hidden"}
          onClick={(): void => setShowMenu(!showMenu)}
        >
          <Image src="/assets/icons/hamburger.svg" width={35} height={35} alt="Navbar" />
        </div>
      )}
      {showMenu && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
          <button
            className="absolute right-5 top-5 text-3xl"
            onClick={(): void => setShowMenu(false)}
          >
            &times;
          </button>
          {pages.map(page => (
            <a className="mb-5 text-2xl text-slate-950" href={page.url} key={page.name}>
              {page.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
