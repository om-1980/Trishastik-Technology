import { useEffect, useState } from 'react';
import Link from 'next/link';

const HeaderSol = ({ userName }: { userName: string }) => {
  const [clientSideUserName, setClientSideUserName] = useState(userName);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure client-side rendering of dynamic content
      setClientSideUserName(userName);
    }
  }, [userName]);

  return (
    <header className="bg-blue-600 text-white shadow-lg py-4 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-blue-200 transition duration-200">
            Trishastik Technology
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:block">
          <Link href="/solutions/salesforce" className="hover:text-blue-200 transition duration-200">
            Dashboard
          </Link>
          <Link href="/solutions/report" className="hover:text-blue-200 transition duration-200">
            Report
          </Link>
          <Link href="/solutions/settings" className="hover:text-blue-200 transition duration-200">
            Settings
          </Link>
          <Link href="solutions/profile" className="hover:text-blue-200 transition duration-200">
            Profile
          </Link>
        </nav>

        {/* User Profile/Logout */}
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline-block">Welcome, {clientSideUserName}</span>
          <Link href="/solutions/login">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-200">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderSol;
