import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link.js';
import { getServerSession } from 'next-auth';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import MinorBoardRowElement from '../../components/MinorBoardRowElement';
import { useMetaData } from '../../lib/hooks/useMetaData';
import { MinorBoardOfficerOptions } from '../../models/MinorBoardOfficer';
import { authOptions } from '../api/auth/[...nextauth]';

interface Props {
  officerData: MinorBoardOfficerOptions[];
}

const AdminMinorBoard: NextPage<Props> = ({ officerData }) => {
  const [data, setData] = useState(officerData);

  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [toReload, setToReload] = useState(false);

  // Handle change in input fields
  const handleChange = (index: number, field: keyof MinorBoardOfficerOptions, value: string) => {
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], [field]: value.trim() };

    setUnsavedChanges(true);

    setData(updatedData);
  };


  // Save changes (in this case, just console logging for simplicity)
  const handleSave = async () => {
    if (unsavedChanges) {
      await fetch(`/api/minorboard`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data.sort((a, b) => a.rank - b.rank)),
      }).catch(console.error);

      setUnsavedChanges(false);
      setToReload(true);
    } else {
      alert('No changes have been made');
    }
  };


  useEffect(() => {
    if (!unsavedChanges && toReload) {
      window.location.reload();
    }
  }, [unsavedChanges, toReload]);


  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);

  const getSemester = () => {
    const date = new Date();
    const month = date.getMonth();

    if (month >= 0 && month <= 4) {
      return 'Spring ' + date.getFullYear();
    } else if (month >= 5 && month <= 11) {
      return 'Fall  ' + date.getFullYear();
    }
  };

  return (
    <>
      {useMetaData('/admin/login')}
      <Layout>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="my-2 text-6xl font-bold text-[#092E6E]">Minor Board</h1>
          <h2 className="my-2 text-2xl font-bold text-[#092E6E]">{getSemester()}</h2>
        </div>
        <div className="flex flex-col items-center justify-center space-y-10">
          <table className='table-auto border-collapse border border-[#1756C3]'>
            <thead className='border border-[#1756C3]'>
              <tr>
                <th className='border border-[#1756C3]'>Position</th>
                <th className='border border-[#1756C3]'>Name</th>
                <th className='border border-[#1756C3]'>Grad Year</th>
              </tr>
            </thead>
            <tbody>
              {officerData?.map((row, index) => (
                <tr key={index} className='border border-[#1756C3]'>
                  <td className='border border-[#1756C3] p-1'>
                    {row.position.toString()}
                  </td>
                  <MinorBoardRowElement param={`name`} position={index} value={row.name} handleUpdate={handleChange} />
                  <MinorBoardRowElement param={`gradYear`} position={index} value={row.gradYear.toString()} handleUpdate={handleChange} />
                </tr>
              ))}
            </tbody>
          </table>
          <button className="bg-[#1756C3] px-8 py-4 text-2xl text-white" onClick={handleSave}>Save</button>

          <Link href={'/admin'} className='bg-[#092E6E] px-8 py-4 text-2xl text-white'>Back</Link>
        </div>
      </Layout>
    </>
  );
};

export default AdminMinorBoard;

export const getServerSideProps: GetServerSideProps<Props> = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }

  const request = await fetch(`${process.env.NEXTAUTH_URL}/api/minorboard`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  const data = await request.json();

  return {
    props: {
      officerData: data.data
    },
  };
};

