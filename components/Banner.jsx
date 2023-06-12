import React from 'react'
import Image from 'next/image'
import CloudLot from '../public/assets/cloudlot.json'
import Awsrotate from '../public/assets/awsrotate.json'
import Awspartnerlogo from '../public/assets/awspartner.jpeg'
import {IoCloudUpload} from 'react-icons/io5'
import {BsCloudPlusFill, BsClipboardData} from 'react-icons/bs'
import {FaHeadSideVirus, FaDev, FaTools} from 'react-icons/fa'
import {GrVirtualMachine, GrShieldSecurity} from 'react-icons/gr'
import Lottie from 'lottie-react'
import Link from 'next/link'

const Banner = () => {
  return (
    <div>
        { /* Main Banner */ }
        <div className="bg-cream pt-20">
            <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
                { /*Left Col */ }
                <div className="flex flex-col w-full items-center text-center lg:pt-24 lg:items-start lg:text-left mb-5 md:mb-0">
                    <h1 data-aos="fade-right" data-aos-once="true" className="text-5xl font-bold leading-tight text-darken">
                        Welcome to
                    </h1>
                    <h1 data-aos="fade-right" data-aos-once="true" className="text-yellow-500 text-5xl font-bold leading-tight mb-8">
                        Regrev Technology
                    </h1>
                    <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className="leading-normal text-2xl mb-8">This is the best place for your cloud-based infrastructure and services</p>
                    <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className="font-bold leading-normal text-2xl mb-8">We are a member of AWS Partner Network</p>
                    <div data-aos="fade-up" data-aos-once="true" data-aos-delay="700" className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
                        <Link href='#services1'><button className="lg:mx-0 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                            Our Services
                        </button></Link>
                        {/* <a href='#services1'><button className="lg:mx-0 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                            Our Services
                        </button></a> */}
                        <div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                            <button className="w-14 h-14 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE"/>
                                </svg>
                            </button>
                            <Link href='#about1'><span className="cursor-pointer">About Us</span></Link>
                            {/* <a href='#about1'><span className="cursor-pointer">About Us</span></a> */}
                        </div>
                    </div>
                </div>
                { /* Right Col */ }
                <div className="w-full lg:w-6/12 pt-18">
                    <div data-aos="fade-up" data-aos-once="true">
                        <Lottie animationData={CloudLot} loop={true} />
                    </div>
                </div>
            </div>
            <div className="text-white z-40 relative">
                <svg className="xl:h-40 xl:w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor"></path>
                </svg>
                <div className="bg-white w-full h-10" id='services1'></div>
            </div>
        </div>

        { /* Container for rest of landing page */}
        <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-hidden">   
            { /* List of Services */}
            { /* All-In-One Cloud Software. */ }
            <div data-aos="flip-up" className="max-w-xl mx-auto text-center mt-14">
                <h1 className="font-bold text-darken my-3 text-3xl">One-Stop-Shop for <span className="text-yellow-500">Cloud Solutions.</span></h1>
                <p className="leading-relaxed text-gray-500">Regrev Technology provides cloud solutions to help businesses succeed in the modern world.</p>
            </div>
            { /* card 1*/ }
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-14 md:gap-5 mt-20 mb-14">
                <div data-aos="fade-up" className="bg-white shadow-xl p-6 text-center rounded-xl">
                    <div className="bg-[#00AA6D] rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-6">
                        <IoCloudUpload color='white' size={25}/>
                    </div>
                    <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">Cloud Migration</h1>
                    <p className="px-4 text-gray-500">We have a proven record of accomplishment in successfully migrating various workloads and data, including databases, servers, storage, and applications, to the Amazon Web Services Cloud. Our cloud migration services can improve the performance, flexibility, and cost-efficiency of a business.</p>
                </div>
                <div data-aos="fade-up" className="bg-white shadow-xl p-6 text-center rounded-xl">
                    <div className="bg-[#5B72EE] rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-6">
                        <BsClipboardData color='white' size={25}/>
                    </div>
                    <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">Data Lake and Analytics</h1>
                    <p className="px-4 text-gray-500">Our platform includes features such as interactive analytics, big data processing, data warehousing, real-time analytics, operational analytics, cataloging and securing, and dashboard and visualization. These features enable businesses to consolidate, transform, and analyze their data in real time, helping them to make data-driven decisions and drive growth.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="150" className="bg-white shadow-xl p-6 text-center rounded-xl">
                    <div className="bg-[#F48C06] rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-6">
                        <FaHeadSideVirus color='white' size={25}/>
                    </div>
                    <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">Data Science and Artificial Intelligence</h1>
                    <p className="px-4 text-gray-500">Our team of experienced data scientists offers services including data analysis, machine learning, predictive modeling, and data visualization to extract valuable insights from data and inform business decisions.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="bg-white shadow-xl p-6 text-center rounded-xl">
                    <div className="bg-[#29B9E7] rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-6">
                        <GrVirtualMachine color='white' size={25}/>
                    </div>
                    <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">Machine Learning Engineering</h1>
                    <p className="px-4 text-gray-500">Our machine learning engineering services cover all aspects of building and deploying machine learning models, including data selection and preprocessing, algorithm design and implementation, and model performance evaluation and improvement.</p>
                </div>
            </div>

            { /* card 2*/ }
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-14 md:gap-5 mb-8">
                <div data-aos="fade-up" className="bg-white shadow-xl p-6 text-center rounded-xl">
                    <div className="bg-[#d574b8] rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-6">
                        <BsCloudPlusFill color='white' size={25}/>
                    </div>
                    <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">MLOps</h1>
                    <p className="px-4 text-gray-500">Our MLOps services help businesses optimize the production of their machine learning models by combining machine learning and software engineering best practices.</p>
                </div>
                <div data-aos="fade-up" className="bg-white shadow-xl p-6 text-center rounded-xl">
                    <div className="bg-[#243dcb] rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-6">
                        <FaDev color='white' size={25}/>
                    </div>
                    <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">DevOps</h1>
                    <p className="px-4 text-gray-500">Our DevOps services assist with the optimization of the development and deployment of applications, covering continuous integration, continuous delivery, and infrastructure as code.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="150" className="bg-white shadow-xl p-6 text-center rounded-xl">
                    <div className="bg-[#d4c225] rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-6">
                        <GrShieldSecurity color='white' size={25}/>
                    </div>
                    <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">Cloud Security</h1>
                    <p className="px-4 text-gray-500">Our cloud security services protect applications and data in the cloud, with services including identity and access management, data protection, network security, and incident response.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="bg-white shadow-xl p-6 text-center rounded-xl">
                    <div className="bg-[#23c058] rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-6">
                        <FaTools color='white' size={25}/>
                    </div>
                    <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">Solution Architect</h1>
                    <p className="px-4 text-gray-500">Our solution architects design custom solutions to meet the specific needs and goals of each business, including solution architecture, technical design, and platform selection.</p>
                </div>
            </div>
        </div> 

        {/* About Us */}
        <div className="" id='about1'>
            <div data-aos="fade-up" data-aos-once="true" className='mx-auto flex flex-col justify-between items-center max-w-screen-sm py-6'>
                <div className='p-8'>
                    <Lottie animationData={Awsrotate} loop={true} />
                </div>
            </div>
            <div className="max-w-screen-xl px-8 mx-auto flex flex-col justify-between items-center lg:space-x-8 lg:flex-row">
                <div className='py-6'>
                    <h1 data-aos="fade-up" data-aos-once="true" className="text-5xl font-bold leading-tight text-darken text-center">
                        Our Mission
                    </h1>
                    <p className='leading-relaxed text-gray-500 text-justify'>
                        Regrev Technology is dedicated to empowering businesses of all sizes to harness the latest technology, 
                        and drive progress through advanced cloud-based solutions. Our team of expert developers, solution architects, data scientists, 
                        and cloud security professionals is committed to designing and implementing innovative, secure, and cost-effective solutions that 
                        support the migration of your company to the cloud.
                    </p>
                </div>
                <div className='py-6'>
                    <h1 data-aos="fade-up" data-aos-once="true" className="text-yellow-500 text-5xl font-bold leading-tight text-darken text-center">
                        Our Goal
                    </h1>
                    <p className='leading-relaxed text-gray-500 text-justify'>
                        Our goal is to provide businesses with the tools and strategies they need to succeed in the modern world. 
                        As a member of the Amazon Web Services Partner Network (APN), we offer advanced cloud-based solutions 
                        that support operational excellence, security, reliability, top-tier performance, sustainability, and total cost optimization.
                    </p>
                </div>
            </div>
        </div>

        {/* Contact Us small section with link to the Contact page */}
        <div></div>

        {/* Footer */}
        <div className="bg-[#FFF2E1]">
            <div className="max-w-screen-xl px-8 mx-auto flex flex-col justify-between items-center lg:flex-row py-6">
                <p className='pb-2'>&copy; 2023</p>
                <p className='pb-2'>Regrev Technology</p>
                <Image src={Awspartnerlogo} width='125' height='75' alt='/' />
            </div>
        </div>

    </div>

  )
}

export default Banner