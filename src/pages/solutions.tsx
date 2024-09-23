'use client'
// import Image from 'next/image'; 
import Header from '../components/header';
import Footer from '../components/footer';
import ParticleBackground from '../components/ParticleBackground';
import Link from 'next/link';
import Head from 'next/head';

export default function Solutions() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head>
          <title>Trishastik Technology</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <ParticleBackground />
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center z-10">
        <section
          className="relative bg-cover bg-center min-h-screen w-full flex items-center justify-center text-white"
          style={{ backgroundImage: 'url(/images/solutions_bg.jpg)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay for contrast */}

          <div className="relative z-10 flex flex-col justify-center items-center px-6 text-center space-y-3 mt-4">
            <h2 className="text-4xl font-bold mb-6">
              Solutions & Consultancy
            </h2>
            <p className="text-lg mb-8 max-w-3xl">
              At Trishastik Technology, we offer tailored technology solutions to optimize business operations and ensure smooth, efficient processes. Our expert consultancy services are designed to help organizations across various sectors, from education to small businesses, adopt and manage innovative technologies that drive growth and efficiency.
            </p>
            <div className="flex justify-center mt-16">
              <Link href="/solutions/signup">
                <button className="bg-blue-500 text-white font-bold py-3 mt-5 px-10 rounded-full shadow-lg hover:bg-[#145762] transition-all transform hover:scale-105 duration-300">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </section>

        <div className=' bg-[#ffffff] bg-opacity-80 w-full h-[25px]'></div>

        <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#e9f2f7] to-[#f0f5fa] py-16 px-6">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-60" style={{ backgroundImage: 'url("/images/technology_bg.jpg")' }}></div>

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl mx-auto bg-[#1a3a49] p-10 rounded-2xl opacity-80 shadow-2xl border-t-4 border-[#123a43] text-left">
            <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight text-center">
              Salesforce Remote Database Management Service
            </h2>

            <p className="text-xl font-semibold text-[#EEEEEE] italic mb-4 text-center">
              Designed for: 
              <span className="font-normal"> Small businesses, schools, coaching centers, and libraries</span>
            </p>

            <p className="text-lg mb-8 leading-relaxed text-white text-justify">
              Our Salesforce Remote Database Management Service provides comprehensive, expert management of your Salesforce database, allowing you to focus on what matters most—running your business or institution. We take care of everything, from creating custom objects and fields to regular data updates and backups, ensuring your data is always accurate, secure, and easily accessible.
            </p>

            {/* Features, Benefits, and Perfect For Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 opacity-90 gap-8 mt-10">
              {/* Key Features Box */}
              <div className="bg-[#f0f5fa] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-[#1a3a49] mb-4 flex items-center">
                  <span className="mr-2">🛠️</span> Key Features
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2">🧾</span>
                    <p><strong>Custom Objects, Fields, and Records:</strong> Tailor your Salesforce database to your unique needs.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🚀</span>
                    <p><strong>Data Maintenance & Backups:</strong> Regular updates, maintenance, and secure backups.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">⌛</span>
                    <p><strong>Salesforce Chatter Integration:</strong> Real-time updates and seamless communication.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">⛳</span>
                    <p><strong>Remote Management:</strong> No need for in-house IT staff; we handle it remotely.</p>
                  </li>
                </ul>
              </div>

              {/* Benefits Box */}
              <div className="bg-[#f0f5fa] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-[#1a3a49] mb-4 flex items-center">
                  <span className="mr-2">🎯</span> Benefits
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <p>Streamlines data management for better organization and retrieval.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <p>Enhances collaboration and communication through real-time updates.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <p>Ensures data accuracy and security with expert management.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <p>Frees up time for core activities by eliminating the need for in-house management.</p>
                  </li>
                </ul>
              </div>

              {/* Perfect For Box */}
              <div className="bg-[#f0f5fa] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-[#1a3a49] mb-4 flex items-center">
                  <span className="mr-2">🏆</span> Perfect For
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2">🏫</span>
                    <p><strong>Schools:</strong> Improve student records management and streamline tasks.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🚸</span>
                    <p><strong>Coaching Centers:</strong> Optimize student data handling and performance metrics.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🥷</span>
                    <p><strong>Libraries:</strong> Efficiently manage inventories and member records.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🧑‍💼</span>
                    <p><strong>Small Businesses:</strong> Simplify client management without a dedicated IT team.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-16">
              <button className="bg-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#145762] transition-all transform hover:scale-105 duration-300">
                Request a Consultation
              </button>
            </div>
          </div>
        </section>

        <div className=' bg-[#ffffff] bg-opacity-80 w-full h-[25px]'></div>

        <section className="relative min-h-screen flex flex-col w-full items-center justify-center bg-gradient-to-b from-[#f5f7fa] to-[#e9eef5] py-16 px-6">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-60" style={{ backgroundImage: 'url("/images/education_bg.jpg")' }}></div>

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl mx-auto bg-[#1a3a49] p-10 opacity-80 rounded-2xl shadow-2xl border-t-4 border-[#123a43] text-center">
            <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight">
              EduManage CRM Solutions
            </h2>

            <p className="text-xl font-semibold italic text-[#EEEEEE] text-white mb-4">
              Designed for:
              <span className="font-normal"> Educational institutions</span>
            </p>

            <p className="text-lg mb-8 text-white leading-relaxed text-justify">
              Our EduManage CRM is a tailored solution for managing educational institution operations. It simplifies administrative tasks, streamlines student management, and improves communication between faculty and students. This comprehensive CRM system can be customized to meet the specific needs of schools, colleges, and coaching centers.
            </p>

            {/* Features and Benefits Section */}
            <div className="flex flex-col lg:flex-row lg:justify-center gap-8 mt-10">
              {/* Key Features Box */}
              <div className="bg-[#e9f2f7] p-6 rounded-lg shadow-lg w-full lg:w-[400px] hover:shadow-2xl transition-shadow hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-[#1a3a49] mb-4 flex items-center justify-center">
                  <span className="mr-2">🛠️</span> Key Features
                </h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <span className="mr-2">🧑‍💼</span>
                    <p><strong>Centralized Student Records Management:</strong> Keep all student data in one place for easy access.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🎟️</span>
                    <p><strong>Automated Admissions & Fee Tracking:</strong> Simplify the admissions and fee management processes.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🗨️</span>
                    <p><strong>Communication Tools:</strong> Facilitate communication between faculty, staff, and students.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">⌛</span>
                    <p><strong>Real-Time Reporting & Analytics:</strong> Access insights and data for informed decision-making.</p>
                  </li>
                </ul>
              </div>

              {/* Benefits Box */}
              <div className="bg-[#e9f2f7] p-6 rounded-lg shadow-lg w-full lg:w-[400px] hover:shadow-2xl transition-shadow hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-[#1a3a49] mb-4 flex items-center justify-center">
                  <span className="mr-2">🎯</span> Benefits
                </h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <p>Enhances the efficiency of administrative processes by automating tasks.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <p>Improves student engagement through seamless communication tools.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <p>Provides detailed insights with real-time analytics and reporting.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="bg-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#145762] transition-all transform hover:scale-105 duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <div className=' bg-[#ffffff] bg-opacity-80 w-full h-[25px]'></div>

        <section className="relative min-h-screen flex flex-col w-full items-center justify-center bg-gradient-to-b from-[#f7f9fc] to-[#e9eef5] py-16 px-6">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-60" style={{ backgroundImage: 'url("/images/tech_bg.jpg")' }}></div>

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl mx-auto bg-[#1a3a49] p-10 opacity-80 rounded-2xl shadow-2xl border-t-4 border-[#123a43] text-center">
            <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight">
              Technology Consultancy Services
            </h2>

            <p className="text-lg mb-8 text-white text-justify leading-relaxed">
              At Trishastik Technology, our consultancy services are designed to help businesses of all sizes adopt and optimize new technologies. Whether you’re looking to implement a new CRM system, integrate data management solutions, or upgrade your IT infrastructure, our team of experts will guide you every step of the way.
            </p>

            {/* Key Services and Benefits Section */}
            <div className="flex flex-col lg:flex-row lg:justify-center gap-8 mt-10">
              {/* Key Services Box */}
              <div className="bg-[#edf3f7] p-6 rounded-lg shadow-lg w-full lg:w-[400px] hover:shadow-2xl transition-shadow hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-[#1a3a49] mb-4 flex items-center justify-center">
                  <span className="mr-2">🛠️</span> Key Services
                </h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <span className="mr-2">🔧</span>
                    <p><strong>CRM Implementation & Customization:</strong> We assist in selecting, implementing, and customizing CRM systems like Salesforce.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔒</span>
                    <p><strong>Data Management Solutions:</strong> Organize, secure, and analyze business data for better decision-making.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🖥️</span>
                    <p><strong>IT Infrastructure Consulting:</strong> Get expert advice on setting up or upgrading IT infrastructure to modern standards.</p>
                  </li>
                </ul>
              </div>

              {/* Benefits Box */}
              <div className="bg-[#edf3f7] p-6 rounded-lg shadow-lg w-full lg:w-[400px] hover:shadow-2xl transition-shadow hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-[#1a3a49] mb-4 flex items-center justify-center">
                  <span className="mr-2">🎯</span> Benefits
                </h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <p>Tailored solutions that match your specific business goals.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <p>Expert guidance in selecting and implementing the right technologies.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <p>Ongoing support to ensure seamless integration and operation.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="bg-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#145762] transition-all transform hover:scale-105 duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>


        <div className=' bg-[#ffffff] bg-opacity-80 h-[25px]'></div>

        <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-16 px-6">
          {/* Background Pattern */}
          {/* <div className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10" style={{ backgroundImage: 'url("/images/partner-bg.jpg")' }}></div> */}

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-[#123a43] mb-8 tracking-tight">
              Why Partner with Us?
            </h2>

            {/* Services and Benefits Section */}
            <div className="flex flex-col lg:flex-row lg:justify-center gap-8 mt-10">
              {/* Expertise in Salesforce & CRM Solutions */}
              <div className="bg-[#edf3f7] p-6 rounded-lg shadow-lg w-full lg:w-[300px] hover:shadow-2xl transition-shadow hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-[#1a3a49] mb-4 flex items-center justify-center">
                  <span className="mr-2">💼</span> Expertise in Salesforce & CRM
                </h3>
                <p>Our team has years of experience managing complex databases and customizing CRM platforms to meet unique business needs.</p>
              </div>

              {/* Tailored Consultancy */}
              <div className="bg-[#edf3f7] p-6 rounded-lg shadow-lg w-full lg:w-[300px] hover:shadow-2xl transition-shadow hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-[#1a3a49] mb-4 flex items-center justify-center">
                  <span className="mr-2">🎯</span> Tailored Consultancy
                </h3>
                <p>We understand that no two businesses are the same. Our solutions are designed to address your specific challenges.</p>
              </div>

              {/* Cost-Effective Remote Management */}
              <div className="bg-[#edf3f7] p-6 rounded-lg shadow-lg w-full lg:w-[300px] hover:shadow-2xl transition-shadow hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-[#1a3a49] mb-4 flex items-center justify-center">
                  <span className="mr-2">💡</span> Cost-Effective Remote Management
                </h3>
                <p>Save on IT staff costs by leveraging our remote database management services.</p>
              </div>

              {/* Reliable Support */}
              <div className="bg-[#edf3f7] p-6 rounded-lg shadow-lg w-full lg:w-[300px] hover:shadow-2xl transition-shadow hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-[#1a3a49] mb-4 flex items-center justify-center">
                  <span className="mr-2">🤝</span> Reliable Support
                </h3>
                <p>Our dedicated team provides ongoing support to ensure your systems run smoothly and efficiently.</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-10">
              <Link href="/#">
                <button className="bg-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#145762] transition-all transform hover:scale-105 duration-300">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        <div className=' bg-[#ffffff] bg-opacity-80 w-full h-[25px]'></div>

        <section className="relative min-h-screen flex flex-col items-center justify-center py-16 px-6">
          {/* Background Image */}
          {/* <div className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10" style={{ backgroundImage: 'url("/images/contact-bg.jpg")' }}></div> */}

          {/* Contact Us Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-[#123a43] mb-8 tracking-tight">
              Contact Us
            </h2>
            <p className="text-lg mb-8 text-[#123a43]">
              Ready to improve your organization’s data management and streamline operations? Get in touch today to discover how our Salesforce Remote Database Management Service and other consultancy offerings can benefit you.
            </p>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 text-left mt-10">
              {/* Phone */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-[#1a3a49] mb-4 flex items-center">
                  <span className="mr-2">📞</span> Phone
                </h3>
                <p className="text-lg">
                  <a href="tel:+919572604623" className="text-blue-500 hover:underline">+91 9572604623</a>
                </p>
                <p className="text-lg">
                  <a href="tel:+919155056431" className="text-blue-500 hover:underline">+91 9155056431</a>
                </p>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-[#1a3a49] mb-4 flex items-center">
                  <span className="mr-2">📧</span> Email
                </h3>
                <p className="text-lg">
                  <a href="mailto:trishastiktechnology@gmail.com" className="text-blue-500 hover:underline">trishastiktechnology@gmail.com</a>
                </p>
              </div>

              {/* Address */}
              {/* <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-[#1a3a49] mb-4 flex items-center">
                  <span className="mr-2">🏢</span> Address
                </h3>
                <p className="text-lg">[Your Office Address]</p>
              </div> */}
            </div>


            {/* CTA Button */}
            <div className="flex justify-center mt-10">
              <Link href="/#">
                <button className="bg-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#145762] transition-all transform hover:scale-105 duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>

        <div className=' bg-[#ffffff] bg-opacity-80 w-full h-[25px]'></div>


      </main>
      <Footer />
    </div>
  );
}
