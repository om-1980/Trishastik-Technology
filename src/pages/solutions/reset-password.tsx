import { useState } from 'react';
import { useRouter } from 'next/router';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { token } = router.query; // Retrieve the token from the URL

  const validatePasswordStrength = (password: string) => {
    // Ensure password is at least 8 characters, contains an uppercase letter and a number
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /\d/.test(password)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!validatePasswordStrength(password)) {
      setErrorMessage('Password must be at least 8 characters long, contain an uppercase letter and a number.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (!token) {
      setErrorMessage('Invalid or missing token.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/reset-password.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Password reset successfully. You can now log in.');
        setTimeout(() => router.push('/solutions/login'), 2000); // Redirect after a short delay
      } else {
        setErrorMessage(data.message || 'Failed to reset password. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#1a3a49]">
          Reset Your Password
        </h2>
        {errorMessage && <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">{errorMessage}</div>}
        {successMessage && <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">{successMessage}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter new password"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirm new password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md shadow-lg hover:bg-blue-600 transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
