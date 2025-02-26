import process from 'process';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link.js';
import { getServerSession } from 'next-auth';
import { useEffect, useState } from 'react';
import EboardRowElement from '../../components/EboardRowElement';
import Layout from '../../components/Layout';
import { useMetaData } from '../../lib/hooks/useMetaData';
import { EboardOfficerOptions } from '../../models/EboardOfficer';
import { authOptions } from '../api/auth/[...nextauth]';

interface Props {
  officerData: EboardOfficerOptions[];
}

const AdminEboard: NextPage<Props> = ({ officerData }) => {
  const [data, setData] = useState(officerData);

  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [toReload, setToReload] = useState(false);

  // Handle change in input fields
  const handleChange = (index: number, field: keyof EboardOfficerOptions, value: string) => {
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], [field]: value.trim() };

    setUnsavedChanges(true);

    setData(updatedData);
  };


  // Save changes (in this case, just console logging for simplicity)
  const handleSave = async () => {
    if (unsavedChanges) {
      await fetch(`/api/eboard`, {
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
      return 'Spring ' + date.getFullYear() + ' - Fall ' + date.getFullYear();
    } else if (month >= 5 && month <= 11) {
      return 'Fall  ' + date.getFullYear() + ' - Spring ' + (date.getFullYear() + 1);
    }
  };

  return (
    <>
      {useMetaData('/admin/login')}
      <Layout>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="my-2 text-6xl font-bold text-[#092E6E]">Executive Board</h1>
          <h2 className="my-2 text-2xl font-bold text-[#092E6E]">{getSemester()}</h2>
        </div>
        <div className="flex flex-col items-center justify-center space-y-10">
          <table className='table-auto border-collapse border border-[#1756C3]'>
            <thead className='border border-[#1756C3]'>
              <tr>
                <th className='border border-[#1756C3]'>Position</th>
                <th className='border border-[#1756C3]'>Name</th>
                <th className='border border-[#1756C3]'>Grad Year</th>
                <th className='border border-[#1756C3]'>Pledge Class</th>
                <th className='border border-[#1756C3]'>Major</th>
                <th className='border border-[#1756C3]'>Email</th>
                <th className='border border-[#1756C3]'>Phone</th>
                <th className='border border-[#1756C3]'>Instagram</th>
                <th className='border border-[#1756C3]'>LinkedIn</th>
                <th className='border border-[#1756C3]'>Facebook</th>
                <th className='border border-[#1756C3]'>Image</th>
              </tr>
            </thead>
            <tbody>
              {officerData?.map((row, index) => (
                <tr key={index} className='border border-[#1756C3]'>
                  <td className='border border-[#1756C3] p-1'>
                    {row.position.toString()}
                  </td>
                  <EboardRowElement param={`name`} position={index} value={row.name} handleUpdate={handleChange} />
                  <EboardRowElement param={`gradYear`} position={index} value={row.gradYear.toString()} handleUpdate={handleChange} />
                  <EboardRowElement param={`pledgeClass`} position={index} value={row.pledgeClass} handleUpdate={handleChange} />
                  <EboardRowElement param={`major`} position={index} value={row.major} handleUpdate={handleChange} />
                  <EboardRowElement param={`email`} position={index} value={row.email} handleUpdate={handleChange} />
                  <EboardRowElement param={`phone`} position={index} value={row.phone} handleUpdate={handleChange} />
                  <EboardRowElement param={`instagram`} position={index} value={row.instagram} handleUpdate={handleChange} />
                  <EboardRowElement param={`linkedin`} position={index} value={row.linkedin} handleUpdate={handleChange} />
                  <EboardRowElement param={`facebook`} position={index} value={row.facebook} handleUpdate={handleChange} />
                  <td className='border border-[#1756C3] p-1'>
                    <input
                      disabled={true}
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const formData = new FormData();
                          formData.append('file', file);
                          formData.append('filename', `${row.position.toString()}.jpg`);

                          await fetch('/api/eboard/photo', {
                            method: 'POST',
                            body: formData,
                          }).catch(console.error);
                        }
                      }}
                    />
                  </td>
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

export default AdminEboard;

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

  const request = await fetch(`${process.env.NEXTAUTH_URL}/api/eboard`,
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
