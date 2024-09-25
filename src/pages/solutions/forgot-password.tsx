import { useState } from 'react';
// import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically load ThreeDBackground to avoid server-side rendering issues
const ThreeDBackground = dynamic(() => import('../3DBackground'), { ssr: false, loading: () => <div>Loading background...</div> });

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
//   const router = useRouter();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setMessage('');

    if (email) {
      try {
        const response = await fetch('/api/forgot-password.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage('A password reset link has been sent to your email.');
        } else {
          setErrorMessage(data.message || 'Failed to send password reset email.');
        }
      } catch (error) {
        setErrorMessage('Failed to send password reset email. Please try again.');
        console.error('Error:', error);
      }
    } else {
      alert('Please enter your email.');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* 3D Background */}
      <ThreeDBackground />

      {/* Forgot Password Form */}
      <div className="relative z-10 max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#1a3a49] mb-6">
          Forgot Your Password?
        </h2>
        <form onSubmit={handleForgotPassword} className="space-y-6">
          {message && (
            <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
              {message}
            </div>
          )}
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md shadow-lg hover:bg-blue-600 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Remember your password?{' '}
          <Link href="/solutions/login" className="text-blue-500 hover:text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ForgotPassword;
