import { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';
import HeaderSol from '../../components/header-sol';
import FooterSol from '../../components/footer-sol';
import ParticleBackground from '../../components/ParticleBackground';
import SchoolManagement from './SchoolManagement';
import SmallBusinessManagement from './SmallBusinessManagement';
import CoachingCenterManagement from './CoachingCenterManagement';
import LibraryManagement from './LibraryManagement';
import Head from 'next/head';

const formatBusinessType = (type: string) => {
  return type
    .replace(/_/g, ' ') // Replace underscores with spaces
    .split(' ') // Split into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' '); // Join the words back together with spaces
};

const Salesforce = () => {
  const [activeTab, setActiveTab] = useState('');
  const [userName, setUserName] = useState('');
  const [businessType, setBusinessType] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      fetchUserInfo(storedToken);
    } else {
      console.error('No token found in localStorage');
    }
  }, []);

  const fetchUserInfo = async (token: string) => {
    try {
      const response = await fetch('https://trishastik.com/api/user.php', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      const data = await response.json();

      if (response.ok && data.name && data.role) {
        setUserName(data.name); // Set the fetched user name
        setBusinessType(data.business_type);
        setActiveTab(data.business_type); // Set active tab based on business type
      } else {
        console.error('Failed to fetch user info:', data.message);
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <Head>
        <title>{`${businessType ? formatBusinessType(businessType) + ' Management' : 'Salesforce'}`}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <ParticleBackground />
      <HeaderSol userName={userName || 'Guest'} />

      <main className="flex-1 flex flex-col items-center justify-center z-10">
        {/* Dashboard Section */}
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-8">
          <div className="w-full max-w-6xl">
            <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
              {`${formatBusinessType(businessType)} Management Dashboard`}
            </h2>

            {/* Active Tab Content */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              {activeTab === 'school' && <SchoolManagement />}
              {activeTab === 'small_business' && <SmallBusinessManagement />}
              {activeTab === 'coaching_center' && <CoachingCenterManagement />}
              {activeTab === 'library' && <LibraryManagement />}
            </div>
          </div>
        </section>
      </main>

      <FooterSol />
    </div>
  );
};
  
export default Salesforce;
  