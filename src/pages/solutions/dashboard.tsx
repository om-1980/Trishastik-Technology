import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import HeaderSol from '../../components/header-sol';
import FooterSol from '../../components/footer-sol';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      fetchUserName(storedToken);
    } else {
      console.error('No token found in localStorage');
    }
  }, []);

  const fetchUserName = async (token: string) => {
    try {
      const response = await fetch('https://trishastik.com/api/user.php', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      const data = await response.json();

      if (response.ok && data.name) {
        setUserName(data.name); // Set the fetched user name
      } else {
        console.error('Failed to fetch user name:', data.message);
      }
    } catch (error) {
      console.error('Error fetching user name:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSol userName={userName || 'Guest'} /> {/* Display userName */}
      <main className="flex-grow bg-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Trishastik Technology Dashboard
          </h1>
          <div className="flex space-x-4 justify-center mb-8">
            <button onClick={() => setActiveSection('overview')}>Overview</button>
            <button onClick={() => setActiveSection('services')}>Services</button>
            <button onClick={() => setActiveSection('profile')}>Profile</button>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            {activeSection === 'overview' && <Overview />}
            {activeSection === 'services' && <Services />}
            {activeSection === 'profile' && <Profile />}
          </div>
        </div>
      </main>
      <FooterSol />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });

// Sample components for different sections
const Overview = () => <div>Overview Content</div>;
const Services = () => <div>Services Content</div>;
const Profile = () => <div>Profile Content</div>;
