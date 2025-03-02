import type { FC } from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { SiFacebook, SiInstagram } from 'react-icons/si';

const Footer: FC = () => {
  return (
    <footer className="flex flex-row justify-around py-10 mx-5">
      <div>
        <div className="flex flex-row items-center justify-center space-x-2 text-xs">
          <FaRegCopyright />
          <p>2024 by Sigma Alpha Chapter - Alpha Epsilon Pi.</p>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-2 md:space-x-5 text-lg md:text-2xl">
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
