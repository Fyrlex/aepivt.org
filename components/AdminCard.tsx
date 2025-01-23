import Image from 'next/image';
import Link from 'next/link.js';
import { FC } from 'react';

export interface AdminCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const AdminCard: FC<AdminCardProps> = ({ title, description, image, url }) => {
  return (
    <>
      <Link href={`/admin/${url}`}>
        <div className='px-2 bg-[#A5C3F8] flex flex-col items-center'>
          <Image src={image} alt={title} height={400} width={200} />
          <h1 className='text-3xl'>{title}</h1>
          <p className='text-xl'>{description}</p>
        </div>
      </Link>
    </>
  );
};

export default AdminCard;
