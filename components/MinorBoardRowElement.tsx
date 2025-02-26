import { FC } from 'react';
import { MinorBoardOfficerOptions } from '../models/MinorBoardOfficer.js';

interface Props {
  param: keyof MinorBoardOfficerOptions;
  position: number;
  value: string;
  handleUpdate: (index: number, key: keyof MinorBoardOfficerOptions, value: string) => void;
}

const MinorBoardRowElement: FC<Props> = ({ param, position, value, handleUpdate }) => {
  return (
    <td className='border border-[#1756C3] p-1'>
      <input
        className='text-[#092E6E]'
        name={param}
        onChange={(e) => handleUpdate(position, param, e.target.value)}
        placeholder={value}
      />
    </td>
  );
};

export default MinorBoardRowElement;
