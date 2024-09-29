const FooterSol = () => {
    return (
      <footer className="bg-gray-900 text-white p-6 z-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="footer-section">
            <h4 className="text-xl font-bold">Trishastik Technology</h4>
            <p className="mt-2">
              We provide expert remote database management services designed to streamline operations for small businesses, schools, coaching centers, and libraries.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="/solutions/services" className="hover:text-gray-400">Our Services</a></li>
              <li><a href="/solutions/solutions" className="hover:text-gray-400">Solutions & Consultancy</a></li>
              <li><a href="/solutions/support" className="hover:text-gray-400">Support</a></li>
              <li><a href="/solutions/contact" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-xl font-bold">Contact Information</h4>
            <p className="mt-2">Have a question or need assistance?</p>
            <ul className="mt-2 space-y-2">
              <li>Email: <a href="mailto:support@trishastiktech.com" className="hover:text-gray-400">support@trishastiktech.com</a></li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Trishastik St, Tech City, 45678</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm">&copy; 2024 Trishastik Technology. All Rights Reserved.</p>
        </div>
      </footer>


    );
  };
  
  export default FooterSol;
  