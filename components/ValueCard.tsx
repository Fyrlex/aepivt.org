import { FC } from 'react';

interface Props {
  title: string;
  backgroundUrl: string;
}

const ValueCard: FC<Props> = ({ backgroundUrl, title }) => {
  return <>
    <div className='flex h-[540px] w-full items-center bg-gray-100 bg-cover bg-center' style={{ backgroundImage: `url('/assets/values/${backgroundUrl}')` }}>
      <h3 className='mx-auto mt-10 text-center text-3xl md:text-5xl break-all'>{title}</h3>
    </div>
  </>;
};

export default ValueCard;
