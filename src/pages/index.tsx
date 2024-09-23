'use client';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import ParticleBackground from '../components/ParticleBackground';
import Link from 'next/link';
import Head from 'next/head';
// import styles from '../styles/styles.module.css';


export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head>
        <title>Trishastik Technology</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <ParticleBackground />
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center z-10">
        {/* Main Section */}
        <section
          className="relative bg-cover bg-center min-h-screen w-full flex items-center justify-center text-white"
          style={{ backgroundImage: 'url(/images/background0.jpg)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center px-6 text-center space-y-3 mt-4">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
              Welcome to Trishastik Technology.
            </h2>
            <h3
              className="text-xl sm:text-2xl tracking-tighter mt-6"
            >
              Innovative Technology Solutions for Healthcare, Recruitment, and Business Consultancy
            </h3>
            <p className="text-base sm:text-lg mb-8 max-w-3xl">
              Empowering businesses and individuals with cutting-edge solutions in healthcare, recruitment, and CRM technology.
            </p>
            <div className="flex justify-center mt-16">
              <Link href="/get-started">
                <button className="bg-blue-500 text-white font-bold py-3 mt-5 px-10 rounded-full shadow-lg hover:bg-[#145762] transition-all transform hover:scale-105 duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </section>

        <div className="bg-[#ffffff] bg-opacity-80 w-full h-6 sm:h-8"></div>

        {/* Healthcare Solutions Section */}
        <section
          className="relative bg-cover bg-center min-h-screen w-full flex items-center justify-center text-white"
          style={{ backgroundImage: 'url(/images/background1.jpg)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center bg-[#1a3a49] text-white bg-opacity-80 rounded-lg p-6 sm:p-12 md:p-16 lg:p-20 max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-center">
              Healthcare Solutions
            </h3>
            <p className="text-base sm:text-lg text-foreground mb-6 text-justify">
              We leverage advanced technology to create innovative healthcare solutions that improve patient care and streamline operations. Our healthcare chatbot provides quick, reliable responses to patient inquiries, while our custom projects focus on enhancing healthcare delivery through automation and integration of modern systems.
            </p>
            <ul className="list-none text-base sm:text-xl md:text-2xl space-y-2 mb-6">
              <li className="flex items-start">
                <Image src="/images/icon1.png" alt="Icon 1" width={30} height={30} className="w-8 h-8 mr-2" />
                <span>AI-powered healthcare chatbot for real-time assistance</span>
              </li>
              <li className="flex items-start">
                <Image src="/images/icon2.png" alt="Icon 2" width={30} height={30} className="w-8 h-8 mr-2" />
                <span>Custom solutions tailored to hospitals, clinics, and healthcare providers</span>
              </li>
              <li className="flex items-start">
                <Image src="/images/icon3.png" alt="Icon 3" width={30} height={30} className="w-8 h-8 mr-2" />
                <span>Project management for healthcare system integration and automation</span>
              </li>
            </ul>

            <div className="flex justify-center mt-4">
              <Link href="/healthcare">
                <button className="bg-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#145762] transition-all transform hover:scale-105 duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        <div className="bg-[#ffffff] bg-opacity-80 w-full h-6 sm:h-8"></div>

        {/* JobFusion Section */}
        <section
          className="relative bg-cover bg-center min-h-screen w-full flex items-center justify-center text-white"
          style={{ backgroundImage: 'url(/images/background2.jpg)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="relative z-10 flex flex-col items-center bg-[#57b2ad] bg-opacity-80 text-white rounded-lg p-6 sm:p-12 md:p-16 lg:p-20 max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-5 text-center">
              JobFusion
            </h3>
            <p className="text-base sm:text-lg text-foreground mb-6 text-justify">
              JobFusion is a next-generation job portal that bridges the gap between employees and employers. Our platform simplifies the recruitment process by offering advanced search and matching capabilities, streamlining hiring with automated workflows, and providing tools for both job seekers and employers to connect efficiently.
            </p>
            <ul className="list-none text-base sm:text-xl md:text-2xl space-y-2 mb-6">
              <li className="flex items-start">
                <Image src="/images/icon4.png" alt="Icon 4" width={30} height={30} className="w-8 h-8 mr-2" />
                <span>Efficient matchmaking between employers and candidates</span>
              </li>
              <li className="flex items-start">
                <Image src="/images/icon5.png" alt="Icon 5" width={30} height={30} className="w-8 h-8 mr-2" />
                <span>Advanced filters for precise job search and applicant tracking</span>
              </li>
              <li className="flex items-start">
                <Image src="/images/icon6.png" alt="Icon 6" width={30} height={30} className="w-8 h-8 mr-2" />
                <span>Custom dashboards for managing job postings and applications</span>
              </li>
            </ul>

            <div className="flex justify-center mt-4">
              <Link href="/jobfusion">
                <button className="bg-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#145762] transition-all transform hover:scale-105 duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        <div className="bg-[#ffffff] bg-opacity-80 w-full h-6 sm:h-8"></div>

        {/* Solutions & Consultancy Section */}
        <section
          className="relative bg-cover bg-center min-h-screen w-full flex items-center justify-center text-white"
          style={{ backgroundImage: 'url(/images/background3.jpg)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center bg-[#1789ae] text-white bg-opacity-80 rounded-lg p-6 sm:p-12 md:p-16 lg:p-20 max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-5 text-center">
              Solutions & Consultancy
            </h3>
            <p className="text-base sm:text-lg text-foreground mb-6 text-justify">
              Our Solutions & Consultancy services are designed to help businesses optimize their operations through tailored CRM solutions and expert consulting. We offer platforms like EduManage CRM, specifically created for educational institutions, as well as consultation on technology-driven business improvements.
            </p>
            <ul className="list-none text-base sm:text-xl md:text-2xl space-y-2 mb-6">
              <li className="flex items-start">
                <Image src="/images/icon7.png" alt="Icon 7" width={30} height={30} className="w-8 h-8 mr-2" />
                <span>EduManage CRM for streamlining educational institution operations</span>
              </li>
              <li className="flex items-start">
                <Image src="/images/icon8.png" alt="Icon 8" width={30} height={30} className="w-8 h-8 mr-2" />
                <span>Custom CRM solutions tailored to specific business needs</span>
              </li>
              <li className="flex items-start">
                <Image src="/images/icon9.png" alt="Icon 9" width={30} height={30} className="w-8 h-8 mr-2" />
                <span>Consulting services to optimize technology adoption and business processes</span>
              </li>
            </ul>

            <div className="flex justify-center mt-4">
              <Link href="/solutions">
                <button className="bg-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#145762] transition-all transform hover:scale-105 duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        <div className="bg-[#ffffff] bg-opacity-80 w-full h-6 sm:h-8"></div>

        {/* Why Choose Trishastik Technology? */}
        <section className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat py-16 px-4">
          <div className="bg-[#1a3a49] text-white bg-opacity-80 rounded-lg p-6 sm:p-12 md:p-16 lg:p-20 max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
              Why Choose Trishastik Technology?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Box 1 */}
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-20">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  Innovative Technology
                </h3>
                <p className="text-justify sm:text-lg">
                  We stay ahead of the curve by incorporating cutting-edge technologies like AI, automation, and data-driven solutions into every project. Whether it&#39;s healthcare systems, recruitment platforms, or CRM tools, our solutions are built to drive innovation.
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-20">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  User-Friendly Platforms
                </h3>
                <p className="text-justify sm:text-lg">
                  Our platforms are designed with ease of use in mind. With intuitive interfaces and seamless navigation, both businesses and individuals can easily access the features they need, whether on desktop or mobile.
                </p>
              </div>

              {/* Box 3 */}
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-20">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  Customizable Solutions
                </h3>
                <p className="text-justify sm:text-lg">
                  At Trishastik, we understand that every business is unique. That&#39;s why our solutions are fully customizable to meet your specific requirements. From healthcare chatbots to CRM platforms, we tailor our services to fit your needs.
                </p>
              </div>

              {/* Box 4 */}
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-20">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  Dedicated Customer Support
                </h3>
                <p className="text-justify sm:text-lg">
                  We provide unmatched customer support with a team of experts ready to assist you at every stage. From implementation to troubleshooting, we ensure you have the guidance you need to succeed.
                </p>
              </div>

              {/* Box 5 */}
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-20 md:col-span-2 mx-auto">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  Modern Design & Interactivity
                </h3>
                <p className="text-justify sm:text-lg">
                  Our focus on modern, responsive design ensures your experience is both visually engaging and highly functional. Features like interactive particle backgrounds not only enhance aesthetics but also create an immersive user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-[#ffffff] bg-opacity-80 w-full h-6 sm:h-8"></div>

        {/* What Our Clients Say Section */}
        <section
          className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-12 px-4"
          style={{ backgroundImage: "url('/images/background.jpg')" }}
        >
          <div className="bg-[#1a3a49] bg-opacity-80 text-white w-full max-w-7xl mx-auto py-16 px-6 sm:px-8 md:px-16 rounded-lg">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
              What Our Clients Say
            </h2>

            <div className="flex flex-col items-center space-y-8">
              {/* Testimonial 1 */}
              <div className="relative group bg-transparent text-black rounded-lg p-6 shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 w-full flex flex-col md:flex-row">
                <Image
                  src="/images/healthcare.jpg"
                  alt="Healthcare Solutions"
                  width={400}
                  height={300}
                  className="w-full md:w-1/3 h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
                <div className="relative z-10 w-full md:w-2/3 p-4 bg-white bg-opacity-80 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    Healthcare Solutions
                  </h3>
                  <p className="font-medium italic text-sm text-justify">
                    &#34;Trishastik Technology has transformed our patient care with their AI-powered healthcare chatbot. We&#39;ve seen a significant reduction in wait times and improved patient satisfaction. Their team&#39;s dedication to customization and support has made them invaluable to our operations.&#34;
                  </p>
                  <p className="mt-4 font-semibold text-sm sm:text-base">
                    — Dr. Priya Singh, Chief Medical Officer, MedCare Hospital
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="relative group bg-transparent text-black rounded-lg p-6 shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 w-full flex flex-col md:flex-row">
                <Image
                  src="/images/jobfusion.jpg"
                  alt="JobFusion"
                  width={400}
                  height={300}
                  className="w-full md:w-1/3 h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
                <div className="relative z-10 w-full md:w-2/3 p-4 bg-white bg-opacity-80 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    JobFusion
                  </h3>
                  <p className="font-medium italic text-sm text-justify">
                    &#34;JobFusion by Trishastik Technology has streamlined our entire hiring process. With its intuitive platform, we can now quickly match the right candidates with the right job openings. The automation features have saved us countless hours, allowing us to focus on what matters most—finding the best talent.&#34;
                  </p>
                  <p className="mt-4 font-semibold text-sm sm:text-base">
                    — John Miller, CEO, TalentHub
                  </p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="relative group bg-transparent text-black rounded-lg p-6 shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 w-full flex flex-col md:flex-row">
                <Image
                  src="/images/solutions.jpg"
                  alt="Solutions & Consultancy"
                  width={400}
                  height={300}
                  className="w-full md:w-1/3 h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
                <div className="relative z-10 w-full md:w-2/3 p-4 bg-white bg-opacity-80 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    Solutions & Consultancy
                  </h3>
                  <p className="font-medium italic text-sm text-justify">
                    &#34;Implementing EduManage CRM through Trishastik Technology has been a game changer for us. The system has greatly simplified student and faculty management, and their consulting services helped us optimize the CRM to suit our unique needs. Their commitment to quality is unmatched.&#34;
                  </p>
                  <p className="mt-4 font-semibold text-sm sm:text-base">
                    — Prof. Anjali Verma, Dean of Operations, ABC University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-[#ffffff] bg-opacity-80 w-full h-6 sm:h-8"></div>

        {/* Success Stories Section */}
        <section
          className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-12 px-4"
          style={{ backgroundImage: "url('/images/background.jpg')" }}
        >
          <div className="bg-[#123a43] bg-opacity-80 text-white w-full max-w-7xl mx-auto py-16 px-6 sm:px-8 md:px-16 rounded-lg">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
              Success Stories
            </h2>

            <div className="flex flex-col items-center space-y-8">
              {/* Success Story 1 */}
              <div className="relative group bg-transparent text-black rounded-lg p-6 shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 w-full flex flex-col md:flex-row">
                <Image
                  src="/images/healthcare_success.jpg"
                  alt="Healthcare Transformation"
                  width={400}
                  height={300}
                  className="w-full md:w-1/3 h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
                <div className="relative z-10 w-full md:w-2/3 p-4 bg-white bg-opacity-80 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    Healthcare Transformation
                  </h3>
                  <p className="text-justify">
                    We partnered with a mid-sized hospital to implement an AI chatbot, resulting in a 40% reduction in patient wait times and a 25% increase in patient satisfaction scores within the first three months.
                  </p>
                </div>
              </div>

              {/* Success Story 2 */}
              <div className="relative group bg-transparent text-black rounded-lg p-6 shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 w-full flex flex-col md:flex-row">
                <Image
                  src="/images/jobfusion_success.jpg"
                  alt="Recruitment Efficiency Boost"
                  width={400}
                  height={300}
                  className="w-full md:w-1/3 h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
                <div className="relative z-10 w-full md:w-2/3 p-4 bg-white bg-opacity-80 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    Recruitment Efficiency Boost
                  </h3>
                  <p className="text-justify">
                    Our JobFusion platform helped a recruitment agency reduce their time-to-hire by 30%, thanks to advanced filtering and automated workflows, enabling them to place candidates faster and more efficiently.
                  </p>
                </div>
              </div>

              {/* Success Story 3 */}
              <div className="relative group bg-transparent text-black rounded-lg p-6 shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 w-full flex flex-col md:flex-row">
                <Image
                  src="/images/edu_success.jpg"
                  alt="CRM Customization for Education"
                  width={400}
                  height={300}
                  className="w-full md:w-1/3 h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
                <div className="relative z-10 w-full md:w-2/3 p-4 bg-white bg-opacity-80 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    CRM Customization for Education
                  </h3>
                  <p className="text-justify">
                    An educational institution adopted our EduManage CRM, leading to a 50% improvement in administrative efficiency. The tailored CRM solution helped streamline student admissions, faculty management, and reporting, contributing to overall operational success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-[#ffffff] bg-opacity-80 w-full h-6 sm:h-8"></div>

        {/* Call to Action Section */}
        <section className="bg-[#123a43] w-full py-16 px-6">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to take the next step?
            </h2>
            <p className="text-base sm:text-lg mb-8">
              Select the service that best fits your needs or contact us directly if you’re unsure. We’re here to help!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
              <Link
                href="/demo"
                className="bg-[#284369] text-white text-base sm:text-lg font-bold py-3 px-6 sm:py-3 sm:px-8 rounded-lg hover:bg-[#145762] transition-colors"
              >
                Request a Demo
              </Link>
              <Link
                href="/signup"
                className="bg-[#ff6b35] text-white text-base sm:text-lg font-bold py-3 px-6 sm:py-3 sm:px-8 rounded-lg hover:bg-[#e65b29] transition-colors"
              >
                Sign Up Now
              </Link>
              <Link
                href="/consultation"
                className="bg-[#007d8f] text-white text-base sm:text-lg font-bold py-3 px-6 sm:py-3 sm:px-8 rounded-lg hover:bg-[#006a77] transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>

        
        <div className="bg-[#ffffff] bg-opacity-80 w-full h-6 sm:h-8"></div>
      </main>

      <Footer />
    </div>
  );
}
