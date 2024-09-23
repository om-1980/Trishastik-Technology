'use client'
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import ParticleBackground from '../components/ParticleBackground';
// import Link from 'next/link';
import Head from 'next/head';



export default function GetStartedPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
        <Head>
            <title>Trishastik Technology</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <ParticleBackground />
        <Header />

        <main className="flex-1 flex flex-col items-center justify-center z-10">
            {/* Main Content Section */}
            <section className="flex-grow">
                <div className="w-full mx-0 flex flex-col md:flex-row items-center md:items-stretch relative h-screen">
                    
                    {/* Right side - Image with torn effect */}
                    <div className="md:w-1/2 w-full h-[0vh] md:h-full relative z-10 bg-[#1a3a49] bg-opacity-90">
                        <div className="absolute top-0 left-0 w-full h-full image-container">
                        <Image
                            src="/images/technology.jpg"
                            alt="Trishastik Technology"
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-lg shadow-lg"
                        />
                        </div>
                    </div>

                    {/* Left side - Text Content */}
                    <div className="md:w-1/2 flex justify-center items-center p-8 md:text-[#ffffff] text-black md:bg-[#1a3a49] bg-transparent bg-cover rounded-lg shadow-lg md:bg-opacity-90 w-full z-0 h-full px-[20px] md:px-[100px]">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                                Get Started with Trishastik Technology
                            </h2>
                            <p className="text-base md:text-lg mb-4 md:mb-6">
                                At Trishastik Technology, were dedicated to providing innovative, tailored solutions to meet your specific needs. Whether you&#39;re looking to enhance patient care, streamline recruitment, or optimize your business operations with expert consultancy, we&#39;ve got you covered.
                            </p>
                            <p className="text-base md:text-lg">
                                Let us help you take the next step in leveraging technology for success. Choose your area of interest below to get started!
                            </p>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .image-container {
                        clip-path: url(#mountains);
                    }
                `}</style>
                <svg width="0" height="0">
                    <clipPath id="mountains" clipPathUnits="objectBoundingBox">
                    <path d="M1,0c0,0-0.1,0.3-0.1,0.5S1,0.7,0.9,1H0V0h1z" />
                    </clipPath>
                </svg>
            </section>

            <div className=' bg-[#ffffff] bg-opacity-80 w-full h-[25px]'></div>

            <section className="min-h-screen w-full flex-grow bg-[#edf2f8] py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
                {/* Left Section: Healthcare Solutions Content */}
                <div className="lg:w-1/2 text-center lg:text-left lg:pr-12">
                    <h2 className="text-4xl font-bold text-[#123a43] mb-6">
                    Healthcare Solutions
                    </h2>
                    <p className="text-lg mb-6 text-justify">
                    Improve patient care and streamline healthcare operations with our advanced technology solutions. From AI-powered chatbots to custom healthcare projects, we provide tools that help healthcare providers improve service delivery and operational efficiency.
                    </p>
                    <p className="text-lg font-semibold mb-4">
                    Request a Demo:
                    </p>
                    <p className="text-lg mb-8 text-justify">
                    Fill out the form below to schedule a demo of our healthcare chatbot or to learn more about our custom healthcare projects.
                    </p>
                </div>

                {/* Right Section: Demo Request Form */}
                <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-6 text-[#183343]">
                    Request a Demo
                    </h3>
                    <form>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="name">
                        Name
                        </label>
                        <input
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="email">
                        Email
                        </label>
                        <input
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="organization">
                        Healthcare Organization (Optional)
                        </label>
                        <input
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        type="text"
                        id="organization"
                        placeholder="Enter your organization (optional)"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="role">
                        Role (e.g., Doctor, Administrator, IT Manager)
                        </label>
                        <input
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        type="text"
                        id="role"
                        placeholder="Enter your role"
                        required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="serviceInterest">
                        Service Interest
                        </label>
                        <select
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        id="serviceInterest"
                        required
                        >
                        <option value="">Select a service</option>
                        <option value="Healthcare Chatbot Demo">Healthcare Chatbot Demo</option>
                        <option value="Custom Healthcare Projects">Custom Healthcare Projects</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="message">
                        Message/Inquiry
                        </label>
                        <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        id="message"
                        placeholder="Enter your message or inquiry"
                        // rows="4"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#183343] text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-[#145762] transition-colors w-full"
                    >
                        Request a Demo
                    </button>
                    </form>
                </div>
                </div>
            </section>

            <div className=' bg-[#ffffff] bg-opacity-80 w-full h-[25px]'></div>

            <section className="min-h-screen w-full flex-grow bg-[#edf2f8] py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                    
                    {/* Left Section: Employers */}
                    <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg mb-12 lg:mb-0 lg:mr-8">
                    <h2 className="text-4xl font-bold text-[#123a43] mb-6">JobFusion for Employers</h2>
                    <p className="text-lg mb-6 text-justify">
                        Streamline your recruitment process with JobFusion. Our next-gen job portal helps you efficiently match the best candidates with your open positions, offering powerful filters, applicant tracking, and automation features that save you time.
                    </p>
                    <h3 className="text-2xl font-bold mb-4">Schedule a Demo</h3>
                    <form>
                        <div className="mb-4">
                        <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            required
                        />
                        </div>

                        <div className="mb-4">
                        <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                        />
                        </div>

                        <div className="mb-4">
                        <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="company">
                            Company Name
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            type="text"
                            id="company"
                            placeholder="Enter your company name"
                            required
                        />
                        </div>

                        <div className="mb-4">
                        <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="industry">
                            Industry (Optional)
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            type="text"
                            id="industry"
                            placeholder="Enter your industry (optional)"
                        />
                        </div>

                        <div className="mb-4">
                        <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="positions">
                            Number of Open Positions
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            type="number"
                            id="positions"
                            placeholder="Enter the number of open positions"
                            required
                        />
                        </div>

                        <div className="mb-6">
                        <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="message">
                            Message/Inquiry
                        </label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            id="message"
                            placeholder="Enter your message or inquiry"
                            rows={4}
                        ></textarea>
                        </div>

                        <button
                        type="submit"
                        className="bg-[#183343] text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-[#145762] transition-colors w-full"
                        >
                        Schedule a Demo
                        </button>
                    </form>
                    </div>

                    {/* Right Section: Job Seekers */}
                    <div className="lg:w-1/2 bg-[#f7fafc] p-8 rounded-lg shadow-lg">
                    <h2 className="text-4xl font-bold text-[#123a43] mb-6">JobFusion for Job Seekers</h2>
                    <p className="text-lg mb-6 text-justify">
                        Ready to find your next job? Create an account on JobFusion to access personalized job recommendations and apply to positions that fit your skillset.
                    </p>
                    <button
                        type="button"
                        className="bg-[#183343] text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-[#145762] transition-colors w-full"
                    >
                        Sign Up Now
                    </button>
                    </div>
                </div>
            </section>

            <div className=' bg-[#ffffff] bg-opacity-80 w-full h-[25px]'></div>

            <section className="min-h-screen w-full flex-grow bg-[#edf2f8] py-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                        
                    {/* Left Section: Solutions & Consultancy Content */}
                    <div className="lg:w-1/2 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
                        <h2 className="text-4xl font-bold text-[#123a43] mb-6">Solutions & Consultancy</h2>
                        <p className="text-lg mb-6 text-justify">
                            Optimize your business operations with our CRM solutions and consultancy services. Whether you need a robust CRM like EduManage or expert advice on how to adopt new technology, we can help you drive business growth.
                        </p>
                        <h3 className="text-2xl font-bold mb-4">Request a Consultation</h3>
                        <p className="text-lg mb-8 tet-justify">
                            Complete the form to request a consultation. Our team will reach out to discuss your unique needs and offer tailored solutions for your business.
                        </p>
                    </div>

                    {/* Right Section: Consultation Request Form */}
                    <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-[#183343]">Request a Consultation</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="business">
                                    Business Name
                                </label>
                                <input
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    type="text"
                                    id="business"
                                    placeholder="Enter your business name"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="role">
                                    Role
                                </label>
                                <input
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    type="text"
                                    id="role"
                                    placeholder="Enter your role"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="serviceInterest">
                                    Service Interest
                                </label>
                                <select
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    id="serviceInterest"
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="EduManage CRM Demo">EduManage CRM Demo</option>
                                    <option value="CRM Customization">CRM Customization</option>
                                    <option value="Tech Consultancy">Tech Consultancy</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label className="block text-lg font-semibold text-[#183343] mb-2" htmlFor="message">
                                    Message/Inquiry
                                </label>
                                <textarea
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    id="message"
                                    placeholder="Enter your message or inquiry"
                                    rows={4}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#183343] text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-[#145762] transition-colors w-full">
                                Request a Consultation
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <div className=' bg-[#ffffff] bg-opacity-80 w-full h-[25px]'></div>

            <section className="bg-[#123a43] w-full py-16 px-6">
                <div className="max-w-7xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">Ready to take the next step?</h2>
                    <p className="text-lg mb-8">
                        Select the service that best fits your needs or contact us directly if you’re unsure. We’re here to help!
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <a
                            href="/demo"
                            className="bg-[#284369] text-white text-lg font-bold py-3 px-8 rounded-lg hover:bg-[#145762] transition-colors">
                            Request a Demo
                        </a>
                        <a
                            href="/signup"
                            className="bg-[#ff6b35] text-white text-lg font-bold py-3 px-8 rounded-lg hover:bg-[#e65b29] transition-colors">
                            Sign Up Now
                        </a>
                        <a
                            href="/consultation"
                            className="bg-[#007d8f] text-white text-lg font-bold py-3 px-8 rounded-lg hover:bg-[#006a77] transition-colors">
                            Schedule a Consultation
                        </a>
                    </div>
                </div>
            </section>

            <div className=' bg-[#ffffff] bg-opacity-80 w-full h-[25px]'></div>


        </main>


      {/* Footer */}
      <Footer />
    </div>
  );
}
