import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const VerifyEmail = () => {
  const router = useRouter();
  const { token } = router.query; // Extract the token from the URL
  const [message, setMessage] = useState<string>(''); // For success or error messages
  const [loading, setLoading] = useState<boolean>(false); // To show loading state
  const [verified, setVerified] = useState<boolean>(false); // Check if verified successfully

  useEffect(() => {
    // Automatically verify email when the token exists
    if (token) {
      handleVerification();
    }
  }, [token]);

  const handleVerification = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch('/api/verify-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      if (response.ok) {
        setVerified(true);
        setMessage('Your account has been successfully verified.');
        setTimeout(() => {
          router.push('/solutions/login'); // Redirect to login page after 3 seconds
        }, 3000);
      } else {
        setVerified(false);
        setMessage(`Verification failed: ${data.message}`);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error('Verification Error:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4 text-[#1a3a49]">Verify Your Account</h1>

        {loading ? (
          <p className="text-center text-gray-600">Verifying your account, please wait...</p>
        ) : (
          <div className="text-center">
            {!verified ? (
              <button
                onClick={handleVerification}
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
              >
                Verify Your Account
              </button>
            ) : (
              <p className="text-green-500 font-semibold">{message}</p>
            )}
          </div>
        )}

        {message && !loading && (
          <p className={`text-center mt-4 ${verified ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default VerifyEmail;
