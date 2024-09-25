import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically load ThreeDBackground to avoid server-side rendering issues
const ThreeDBackground = dynamic(() => import('../3DBackground'), { ssr: false, loading: () => <div>Loading background...</div> });

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setErrorMessage('');
    
    if (email && password) {
      try {
        const response = await fetch('/api/login.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        
        if (response.ok) {
          localStorage.setItem('token', data.token);

          // Redirect based on role (fetched from backend)
          switch (data.role) {
            case "Salesforce Remote Database Management":
              router.push('/solutions/salesforce');
              break;
            case "EduManage CRM Solutions":
              router.push('/solutions/edumanage');
              break;
            case "Technology Consultancy Services":
              router.push('/solutions/techconsult');
              break;
            default:
              router.push('/solutions/dashboard/');
              break;
          }
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        setErrorMessage('Login failed. Please try again later.');
        console.error('Error:', error);
      }
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* 3D Background */}
      <ThreeDBackground />

      {/* Login Form */}
      <div className="relative z-10 max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#1a3a49] mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          {errorMessage && (
            <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
              {errorMessage}
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md shadow-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don&#39;t have an account?{' '}
          <Link href="/solutions/signup" className="text-blue-500 hover:text-blue-600">
            Sign Up
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-gray-600">
          Forgot your password?{' '}
          <Link href="/solutions/forgot-password" className="text-blue-500 hover:text-blue-600">
            Reset it here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
