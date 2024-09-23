'use client'
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import ParticleBackground from '../components/ParticleBackground';
// import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';

export default function Healthcare() {
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
          style={{ backgroundImage: 'url(/images/healthcare.jpg)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay for contrast */}

          {/* Centered content */}
          <div className="relative z-10 flex flex-col justify-center items-center px-6 text-center">
            {/* Heading */}
            <h2 className="text-4xl font-bold mb-6">
              Healthcare Solutions
            </h2>

            {/* Introduction */}
            <p className="text-lg mb-8 max-w-3xl">
              At Trishastik Technology, we are committed to revolutionizing healthcare through innovative technology. Our healthcare solutions are designed to enhance patient care, and support healthcare providers in delivering high-quality services. Discover how our cutting-edge technology can make a difference in your healthcare organization.
            </p>

            {/* Call to Action */}
            <div className="flex justify-center mt-4">
              <Link href="/healthcare-demo">
                <button className="bg-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#145762] transition-all transform hover:scale-105 duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        <div className=' bg-[#ffffff] bg-opacity-80 w-full h-[25px]'></div>

        <section className="relative min-h-screen w-full flex items-center justify-center py-16 px-6">
          {/* Background Pattern */}
          {/* <div className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-60" style={{ backgroundImage: 'url("/images/healthcare_bg.jpg")' }}></div> */}

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl mx-auto bg-[#1a3a49] p-10 rounded-2xl shadow-2xl opacity-90 border-t-4 border-[#123a43] text-center">
            <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
              AI-Powered Healthcare Chatbot
            </h2>

            {/* Description */}
            <p className="text-lg font-semibold text-white italic mb-8">
              Transform healthcare services with our AI-powered chatbot designed to assist patients and providers with real-time support.
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
                    <span className="mr-2">⏲️</span>
                    <p><strong>24/7 Availability:</strong> Always available to respond to patient inquiries and provide support.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💬</span>
                    <p><strong>Natural Language Processing:</strong> Understands and responds to queries in a human-like manner.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔗</span>
                    <p><strong>Integration:</strong> Seamlessly integrates with existing healthcare systems for a smooth user experience.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔒</span>
                    <p><strong>Data Security:</strong> Ensures patient information is handled with the highest level of security.</p>
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
                    <p>Reduces wait times and improves patient satisfaction.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <p>Frees up staff to focus on more complex tasks.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <p>Enhances overall efficiency and service delivery.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-4">
              <Link href="/request-demo">
                <button className="bg-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#145762] transition-all transform hover:scale-105 duration-300">
                  Request a Demo
                </button>
              </Link>
            </div>
          </div>
        </section>


        <div className=' bg-[#ffffff] bg-opacity-80 w-full h-[25px]'></div>

        <section className="relative min-h-screen w-full flex items-center justify-center py-16 px-6">
          {/* Background Pattern */}
          {/* <div className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-60" style={{ backgroundImage: 'url("/images/healthcare_bg_2.jpg")' }}></div> */}

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl mx-auto bg-[#1a3a49] p-10 rounded-2xl shadow-2xl opacity-90 border-t-4 border-[#123a43] text-center">
            <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
              Custom Healthcare Projects
            </h2>

            {/* Description */}
            <p className="text-lg font-semibold text-white italic mb-8">
              We create tailored technology solutions that optimize healthcare workflows, improve patient outcomes, and enhance operational efficiency.
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
                    <span className="mr-2">🔧</span>
                    <p><strong>Custom Development:</strong> Solutions built to meet the specific needs of your organization.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🔗</span>
                    <p><strong>Integration:</strong> Compatible with existing systems for a cohesive workflow.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📈</span>
                    <p><strong>Scalability:</strong> Designed to grow with your organization’s needs.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🎓</span>
                    <p><strong>User Training:</strong> Comprehensive training and support to ensure smooth adoption.</p>
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
                    <p>Streamlines processes and reduces manual workloads.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <p>Enhances patient management and care delivery.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <p>Improves data accuracy and accessibility.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Link href="/learn-more">
                <button className="bg-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#145762] transition-all transform hover:scale-105 duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>


        <div className=' bg-[#ffffff] bg-opacity-80 w-full h-[25px]'></div>

        <section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-12 px-4">
          <div className="bg-[#1a3a49] bg-opacity-80 text-white w-full max-w-7xl mx-auto py-16 px-6 sm:px-8 md:px-16 rounded-lg">
            {/* Heading */}
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
              Success Stories
            </h2>

            {/* Success Story 1 */}
            <div className="flex flex-col items-center space-y-8">
              <div className="relative group bg-transparent text-black rounded-lg p-6 shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 w-full flex flex-col md:flex-row">
                  <Image
                    src="/images/healthcare.jpg"
                    alt="Healthcare Solutions"
                    width={40} height={40}
                    className="w-full md:w-1/3 h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                  <div className="relative z-10 w-full md:w-2/3 p-4 bg-white bg-opacity-80 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
                    <h3 className="text-2xl sm:text-2xl font-semibold mb-4">MedCare Hospital</h3>
                    <p className="font-medium italic text-sm sm:text-base">
                      &#34;Implementing Trishastik&#39;s AI-powered chatbot has transformed our patient engagement. We&#39;ve seen a significant reduction in wait times and an increase in patient satisfaction. The integration with our existing systems was seamless, and the support team was exceptional.&#34;
                    </p>
                    <p className="mt-4 font-semibold text-sm sm:text-base">— Dr. Priya Singh, Chief Medical Officer, MedCare Hospital</p>
                  </div>
                </div>
            </div>

            {/* Success Story 2 */}
            <div className="flex flex-col items-center space-y-8">
              <div className="relative group bg-transparent text-black rounded-lg p-6 shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 w-full flex flex-col md:flex-row">
                  <Image
                    src="/images/healthcare.jpg"
                    alt="Healthcare Solutions"
                    width={40} height={40}
                    className="w-full md:w-1/3 h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                  <div className="relative z-10 w-full md:w-2/3 p-4 bg-white bg-opacity-80 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
                    <h3 className="text-2xl sm:text-2xl font-semibold mb-4">HealthFirst Clinic</h3>
                    <p className="font-medium italic text-sm sm:text-base">
                      &#34;Trishastik&#39;s custom EHR system has greatly improved our clinic&#39;s operations. The solution was tailored to our needs and has streamlined our patient records management, making it easier to provide top-notch care.&#34;
                    </p>
                    <p className="mt-4 font-semibold text-sm sm:text-base">— John Doe, Clinic Manager</p>
                  </div>
                </div>
            </div>
          </div>
        </section>

        <div className=' bg-[#ffffff] bg-opacity-80 w-full h-[25px]'></div>

        <section className="min-h-screen w-full flex items-center justify-center bg-opacity-80 py-10 px-6">
          <div className="max-w-6xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-[#123a43] mb-12">
              Why Choose Our Healthcare Solutions?
            </h2>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg flex items-center transform transition duration-500 hover:scale-105">
                <Image
                  src="/images/technology.jpg"
                  alt="Innovative Technology"
                  width={40} height={40}
                  className="w-1/3 h-auto object-cover rounded-l-lg mx-2"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-[#183343] mb-2">
                    Innovative Technology
                  </h3>
                  <p className="text-lg">
                    Stay ahead with the latest advancements in healthcare technology.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg flex items-center transform transition duration-500 hover:scale-105">
                <Image
                    src="/images/technology.jpg"
                    alt="Innovative Technology"
                    width={40} height={40}
                    className="w-1/3 h-auto object-cover rounded-l-lg mx-2"
                  />
                <div>
                  <h3 className="text-2xl font-semibold text-[#183343] mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-lg">
                    Tailored to fit the unique needs of your healthcare organization.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg flex items-center transform transition duration-500 hover:scale-105">
                <Image
                    src="/images/technology.jpg"
                    alt="Innovative Technology"
                    width={40} height={40}
                    className="w-1/3 h-auto object-cover rounded-l-lg mx-2"
                  />
                <div>
                  <h3 className="text-2xl font-semibold text-[#183343] mb-2">
                    Expert Support
                  </h3>
                  <p className="text-lg">
                    Dedicated support to help you every step of the way.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-8 rounded-lg shadow-lg flex items-center transform transition duration-500 hover:scale-105">
                <Image
                    src="/images/technology.jpg"
                    alt="Innovative Technology"
                    width={40} height={40}
                    className="w-1/3 h-auto object-cover rounded-l-lg mx-2"
                  />
                <div>
                  <h3 className="text-2xl font-semibold text-[#183343] mb-2">
                    Improved Efficiency
                  </h3>
                  <p className="text-lg">
                    Streamline operations and enhance patient care with our solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-12">
              <Link href="/#">
                <button className="bg-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#145762] transition-all transform hover:scale-105 duration-300">
                  Request a Consultation
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
              Get in Touch
            </h2>
            <p className="text-lg mb-8 text-[#123a43]">
              Have questions or want to learn more about our healthcare solutions? Contact us today to discuss how we can support your organization’s needs.
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
