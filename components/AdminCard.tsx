import Link from 'next/link.js';
import { FC } from 'react';

export interface AdminCardProps {
  title: string;
  description: string;
  url: string;
}

const AdminCard: FC<AdminCardProps> = ({ title, description, url }) => {
  return (
    <>
      <Link href={url}>
        <div className='text-white flex flex-col  bg-[#1767C3] items-center p-2 '>
          <p className='text-3xl'>{title}</p>
          <p className='text-xl'>{description}</p>
        </div>
      </Link>
    </>
  );
};

export default AdminCard;
