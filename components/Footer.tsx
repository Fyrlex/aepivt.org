import type { FC } from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { SiFacebook, SiInstagram } from 'react-icons/si';

const Footer: FC = () => {
  return (
    <footer className="flex flex-row justify-around py-10">
      <div>
        <div className="flex flex-row space-x-2 items-center justify-center">
          <FaRegCopyright />
          <p>2024 by Sigma Alpha Chapter - Alpha Epsilon Pi.</p>
        </div>

        <p className="text-xs">
          Web design by{' '}
          <a
            className="hover:text-[#1767C3] duration-300"
            href="https://jaren.me"
            target="_blank"
            rel="noreferrer noopener"
          >
            Jaren G.
          </a>
        </p>
      </div>
      <div className="flex flex-row items-center space-x-5 text-2xl">
        <a href="https://www.facebook.com/VTAEPi/" target="_blank" rel="noreferrer noopner">
          <SiFacebook />
        </a>
        <a href="https://www.instagram.com/vt.aepi/" target="_blank" rel="noreferrer noopner">
          <SiInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
