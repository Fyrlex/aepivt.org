import { FC } from 'react';

interface Props {
  title: string;
}

const BlueTitleBar: FC<Props> = ({ title }) => {
  return (
    <div className='bg-[#092E6E]'>
      <h2 className='py-20 text-center text-5xl md:text-8xl font-bold text-white'>{title}</h2>
    </div>
  );
};

export default BlueTitleBar;
