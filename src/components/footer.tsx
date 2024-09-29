export default function Footer() {
  return (
    <footer className="bg-[#1a3a49] bg-opacity-90 p-6 md:py-6 flex flex-col justify-center w-full z-10">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-white text-sm text-center">
        {/* Company Section */}
        <div className="grid gap-2">
          <h3 className="font-semibold">Company</h3>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Our Team</a>
          <a href="#" className="hover:underline">Careers</a>
          <a href="#" className="hover:underline">News</a>
        </div>

        {/* Services Section */}
        <div className="grid gap-2">
          <h3 className="font-semibold">Services</h3>
          <a href="#" className="hover:underline">Healthcare</a>
          <a href="#" className="hover:underline">Job Fusion</a>
          <a href="#" className="hover:underline">EduManage</a>
          <a href="#" className="hover:underline">Consulting</a>
        </div>

        {/* Resources Section */}
        <div className="grid gap-2">
          <h3 className="font-semibold">Resources</h3>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Case Studies</a>
          <a href="#" className="hover:underline">Documentation</a>
          <a href="#" className="hover:underline">FAQs</a>
        </div>

        {/* Legal Section */}
        <div className="grid gap-2">
          <h3 className="font-semibold">Legal</h3>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>

        {/* Contact Section */}
        <div className="grid gap-2">
          <h3 className="font-semibold">Contact</h3>
          <a href="#" className="hover:underline">Support</a>
        </div>
      </div>

      <div className="mt-6 text-center">
          <p className="text-lg text-black">&copy; 2024 Trishastik Technology. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
