import { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Link from 'next/link'; // Import Link component

// Dynamically load ThreeDBackground to avoid server-side rendering issues
const ThreeDBackground = dynamic(() => import('../3DBackground'), { ssr: false });

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [organizationName, setOrganizationName] = useState(''); // Organization name
  const [location, setLocation] = useState('');
  const [role, setRole] = useState(''); // Default to empty string (means no role selected yet)
  const [passwordError, setPasswordError] = useState(''); // For displaying password errors
  const router = useRouter();

  // Password validation function
  const validatePassword = (password: string) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  // Define the business type options for each role
  const getBusinessTypeOptions = () => {
    if (role === 'Salesforce Remote Database Management') {
      return [
        { value: 'small_businesses', label: 'Small Businesses' },
        { value: 'schools', label: 'Schools' },
        { value: 'coaching_centers', label: 'Coaching Centers' },
        { value: 'libraries', label: 'Libraries' },
        { value: 'others', label: 'Others' }, // Added "Others" option
      ];
    } else if (role === 'EduManage CRM Solutions') {
      return [{ value: 'educational_institutions', label: 'Educational Institutions' }];
    } else if (role === 'Technology Consultancy Services') {
      return [{ value: 'business', label: 'Business' }];
    }
    return [];
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the password before proceeding
    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.'
      );
      return;
    } else {
      setPasswordError(''); // Clear error if password is valid
    }

    if (name && email && password && businessType && organizationName && location && role) {
      try {
        const response = await fetch('/api/signup.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
            businessType,
            organizationName,
            location,
            role,
          }),
        });

        if (response.ok) {
          alert('Signup successful! Please check your email to verify your account.');
          router.push('/solutions/login');
        } else {
          const data = await response.json();
          alert(`Error: ${data.message}`);
        }
      } catch (error) {
        alert('Something went wrong. Please try again.');
        console.log('Error: ', error);
      }
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* 3D Background */}
      <ThreeDBackground />

      {/* Signup Form */}
      <div className="relative z-10 max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#1a3a49] mb-6">
          Create Your Account
        </h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
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
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              required
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
                setBusinessType(''); // Clear business type when role changes
              }}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Role</option> {/* Default empty option */}
              <option value="Salesforce Remote Database Management">Salesforce Remote Database Management</option>
              <option value="EduManage CRM Solutions">EduManage CRM Solutions</option>
              <option value="Technology Consultancy Services">Technology Consultancy Services</option>
            </select>
          </div>
          <div>
            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
              Business Type
            </label>
            <select
              id="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              required
              disabled={!role} // Disable the dropdown if role is not selected
            >
              <option value="">Select your business type</option>
              {getBusinessTypeOptions().map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">
              Organization Name
            </label>
            <input
              type="text"
              id="organizationName"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your organization name"
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your location"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md shadow-lg hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/solutions/login" className="text-blue-500 hover:text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
