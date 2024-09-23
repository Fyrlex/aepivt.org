import { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';
import { useMetaData } from '../lib/hooks/useMetaData';

const About: NextPage = () => {
  const foundingFathers = [
    'Michael Feldcher',
    'Dmitry Gurvits',
    'Abram Jackson',
    'Andy Kress',
    'Jake Lake',
    'Larry Leventhal',
    'Nick Macke',
    'Adam Morris',
    'Alex Nizhnikov',
    'Boris Pearlman',
    'Steve Tartakovsky',
    'Adam Waddell',
    'Chad Waldman',
    'Ross Weinreb',
    'Sean White',
  ];

  return (
    <>
      {useMetaData('About', '/about')}
      <Layout>
        <div>
          <Image alt="Group photo" src={'/assets/aepiaboutus.webp'} width={1903} height={640} />
          <div className="text-center w-[45vw] mx-auto flex flex-col space-y-2 my-10">
            <h1 className="text-[#1756C3] text-5xl font-bold my-2">About Us</h1>
            <div className="text-xl font-light flex flex-col space-y-3">
              <p>
                Alpha Epsilon Pi at Virginia Tech is a social fraternity based upon Jewish principles. The brothers of
                AEPi embody both the values of our fraternity: Faith, Humility, Perseverance, Mutual Helpfulness, and
                Honesty, and the values Virginia tech, along with Ut Prosim (That I May Serve).
              </p>
              <p>
                We are active within many student organizations, and are a key part of the Jewish Community of
                Blacksburg. Beyond that, our brothers maintain a high standard of academic success and professional
                development.
              </p>
              <p>
                Our fraternity is not a religious organization, rather a social one that places emphasis on shared
                identities, values, and culture.{' '}
              </p>
            </div>
          </div>
          <div className="text-[#1756C3] text-6xl font-bold text-center bg-[#EFEEE7] py-10 flex flex-col items-center">
            <p className="w-[40vw]">
              &quot;No one could tell me where my soul might be; I searched for G-d, but he eluded me; I sought my
              brother out and found all three.&quot;
            </p>
            <p>- Ernest Howard Crosby</p>
          </div>
          <div className="flex flex-row my-10 space-x-10 justify-center">
            <div className="flex flex-col">
              <h2 className="text-xl text-center my-5">Our Mission</h2>
              <div className="w-[25vw] flex flex-col space-y-5">
                <p>
                  The mission of Alpha Epsilon Pi is to provide education, resources and training to the future leaders
                  of the world’s Jewish communities. Alpha Epsilon Pi was founded to provide opportunities for Jewish
                  men seeking the best possible college and fraternity experience.
                </p>
                <p>
                  Since our founding in 1913, more than 102,000 men have worn the badge of Alpha Epsilon Pi and each
                  year, thousands of undergraduates perform the Ritual of Initiation, which remains the same ritual
                  adopted decades ago.
                </p>
                <p>
                  Our basic purpose is to provide the opportunity for a Jewish man to be able to join an organization
                  whose purpose is not specifically religious, but rather social and cultural in nature.{' '}
                  <span className="font-normal">
                    Alpha Epsilon Pi is a Jewish fraternity and brotherhood that is open to all who are willing to
                    espouse its values and mission.
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl text-center my-5">Our Vision</h2>
              <div className="w-[25vw] flex flex-col space-y-5">
                <p>
                  Alpha Epsilon Pi at Virginia Tech works to be an organization that helps its members become better
                  men, provide tzedekah (charity), support the Jewish community, and serve as an eternal brotherhood
                  that provides support for all its members.
                </p>
                <p>
                  In the past year our brothers have been active in Hillel, the Jewish Student Union, Chabad, Hokies for
                  Israel, the Undergraduate Student Senate, Club Sports, Design Teams, Scientific Research Groups, and
                  more!
                </p>
                <p>
                  The Sigma Alpha Chapter strives to maintain excellence and be a model organization for the Virginia
                  Tech Community.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#092E6E] text-white">
            <h2 className="text-6xl font-bold text-center py-32">Our History</h2>
          </div>
          <div className="text-xl font-light my-5 flex items-center justify-center">
            <div className="w-[50vw] text-center flex flex-col space-y-5">
              <p>
                The Sigma Alpha Chapter was originally chartered at the Virginia Polytechnic Institute and State
                University in 1969. Sigma Alpha was chosen as the Chapter designation as a homage to the Sigma Alpha Mu
                (Sammy) Fraternity which the founders originally intended to form a chapter of. This iteration of the
                Sigma Alpha chapter lasted at Virginia Tech until the early 80s when they were subsequently dissolved.
              </p>
              <p>
                During the 1999-2000 academic year, 11 eager Jewish students started the recolonization of the Sigma
                Alpha chapter, which has thrived until present day. After being inducted they recruited the first 5
                pledges of Sigma Alpha. These 16 founding fathers laid the groundwork for what would become a tight-knit
                brotherhood committed to Jewish values, philanthropic work, and the betterment of the campus community.
              </p>
              <p className="font-normal">Our Founding Fathers</p>
              <ul>
                {foundingFathers.map(father => (
                  <li key={father}>{father}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
