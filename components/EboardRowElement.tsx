import { FC } from 'react';
import { EboardOfficerOptions, } from '../models/EboardOfficer.js';

interface Props {
  param: keyof EboardOfficerOptions;
  position: number;
  value: string;
  handleUpdate: (index: number, key: keyof EboardOfficerOptions, value: string) => void;
}

const EboardRowElement: FC<Props> = ({ param, position, value, handleUpdate }) => {
  function parsedValue(value: string) {
    switch (param) {
      case 'instagram': return value.slice(26);
      case 'facebook': return value.slice(25);
      case 'linkedin': return value.slice(28);
      default: return value;
    }
  }

  return (
    <td className='border border-[#1756C3] p-1'>
      <input
        className='text-[#092E6E]'
        name={param}
        onChange={(e) => handleUpdate(position, param, e.target.value)}
        placeholder={parsedValue(value)}
      />
    </td>
  );
};

export default EboardRowElement;
