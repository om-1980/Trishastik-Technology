const FooterSol = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Section: Copyright */}
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Trishastik Technology. All rights reserved.
          </p>
  
          {/* Middle Section: Links */}
          <div className="space-x-6">
            <a href="/privacy" className="hover:text-white transition duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition duration-200">
              Terms of Service
            </a>
            <a href="/support" className="hover:text-white transition duration-200">
              Support
            </a>
          </div>
  
          {/* Right Section: Contact Info */}
          <div className="flex space-x-6">
            <a href="mailto:support@trishastiktech.com" className="hover:text-white transition duration-200">
              support@trishastiktech.com
            </a>
            <a href="tel:+123456789" className="hover:text-white transition duration-200">
              +1 234 567 89
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default FooterSol;
  