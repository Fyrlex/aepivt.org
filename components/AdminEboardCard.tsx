import Image from 'next/image.js';
import { FC, useState } from 'react';
import { SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si';
import { IEboardOfficer } from '../src/models/Officer';

interface Props {
  officer: IEboardOfficer;
}

const AdminEBoardCard: FC<Props> = ({ officer }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedOfficer, setEditedOfficer] = useState(officer);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedOfficer({ ...editedOfficer, [name]: value });
  };

  return (
    <>
      <div className="w-[30vw] bg-[#A5C3F8] flex flex-row pb-10">
        <Image className="" alt={officer.name} src={officer.image} width={300} height={300} />
        <div className="my-10 mx-5 text-[#092E6E]">
          {isEditing ? (
            <>
              <input
                className="text-lg font-light"
                name="position"
                value={editedOfficer.position}
                onChange={handleInputChange}
                placeholder={officer.position}
              />
              <input
                className="font-bold text-2xl"
                name="name"
                value={editedOfficer.name}
                onChange={handleInputChange}
                placeholder={officer.name}
              />
              <input
                className="text-lg font-light"
                name="gradYear"
                value={editedOfficer.gradYear}
                onChange={handleInputChange}
                placeholder={`Class of ${officer.gradYear}`}
              />
              <input
                className="text-lg font-light"
                name="pledgeClass"
                value={editedOfficer.pledgeClass}
                onChange={handleInputChange}
                placeholder={officer.pledgeClass}
              />
              <input
                className="text-lg font-light my-5"
                name="email"
                value={editedOfficer.email}
                onChange={handleInputChange}
                placeholder={officer.email}
              />
              <input
                className="text-lg font-light my-5"
                name="phone"
                value={editedOfficer.phone}
                onChange={handleInputChange}
                placeholder={officer.phone}
              />
            </>
          ) : (
            <>
              <h3 className="font-light text-xl">{editedOfficer.position}</h3>
              <h2 className="font-bold text-2xl">{editedOfficer.name}</h2>
              <p className="text-lg font-light">
                Class of {editedOfficer.gradYear} | {editedOfficer.pledgeClass}
              </p>
              <p className="text-lg font-light">{editedOfficer.major}</p>
              <p className="text-lg font-light my-5">{editedOfficer.email}</p>
              <p className="text-lg font-light my-5">{editedOfficer.phone}</p>
            </>
          )}
          <div className="text-black flex flex-row space-x-3">
            <SiInstagram />
            <SiFacebook />
            <SiLinkedin />
          </div>
          <div className="mt-5 flex space-x-3">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setIsEditing(true)}
              disabled={isEditing}
            >
              Edit
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => setIsEditing(false)}
              disabled={!isEditing}
            >
              Save
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminEBoardCard;
