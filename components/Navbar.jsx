import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import Navlog from '../public/assets/RTLogo1notitle.png'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav)
  }

  // useEffect(() => {
  //   if (router.asPath === '/') {
  //     document.home.classList.add('active');
  //   } 
  //   else if(router.asPath === '/about') {
  //     document.about.classList.add('active');
  //   }
  //   else if(router.asPath === '/services') {
  //     document.services.classList.add('active');
  //   }
  //   else if(router.asPath === '/casestudies') {
  //     document.casestudies.classList.add('active');
  //   }
  //   else if(router.asPath === '/contact') {
  //     document.contact.classList.add('active');
  //   }
  // }, [router]);


  return (
    <div className='fixed w-full h-16 bg-white shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link className='pt-4' href='/'>
                <Image src={Navlog} alt="/" width='120' height='120' />
            </Link>
            <div>
              <ul className='hidden md:flex'>
                <Link href='/'>
                  <li id='home' 
                  className={router.pathname == '/' 
                  ? 'active ml-10 p-0.5 text-sm uppercase hover:border-b-2 border-blue-500 hover:scale-110 duration-200 ease-in-out' 
                  : 'ml-10 p-0.5 text-sm uppercase hover:border-b-2 border-blue-500 hover:scale-110 duration-200 ease-in-out'}
                  >Home</li>
                </Link>
                <Link href='/about'>
                  <li id='about' 
                  className={router.pathname == '/about' 
                  ? 'active ml-10 p-0.5 text-sm uppercase hover:border-b-2 border-blue-500 hover:scale-110 duration-200 ease-in-out' 
                  : 'ml-10 p-0.5 text-sm uppercase hover:border-b-2 border-blue-500 hover:scale-110 duration-200 ease-in-out'}
                  >About</li>
                </Link>
                <Link href='/services'>
                  <li id='services' 
                  className={router.pathname == '/services' 
                  ? 'active ml-10 p-0.5 text-sm uppercase hover:border-b-2 border-blue-500 hover:scale-110 duration-200 ease-in-out' 
                  : 'ml-10 p-0.5 text-sm uppercase hover:border-b-2 border-blue-500 hover:scale-110 duration-200 ease-in-out'}
                  >Services</li>
                </Link>
                <Link href='/casestudies'>
                  <li id='casestudies' 
                  className={router.pathname == '/casestudies' 
                  ? 'active ml-10 p-0.5 text-sm uppercase hover:border-b-2 border-blue-500 hover:scale-110 duration-200 ease-in-out' 
                  : 'ml-10 p-0.5 text-sm uppercase hover:border-b-2 border-blue-500 hover:scale-110 duration-200 ease-in-out'}
                  >Case Studies</li>
                </Link>
                <Link href='/contact'>
                  <li id='contact' 
                  className={router.pathname == '/contact' 
                  ? 'active ml-10 p-0.5 text-sm uppercase hover:border-b-2 border-blue-500 hover:scale-110 duration-200 ease-in-out' 
                  : 'ml-10 p-0.5 text-sm uppercase hover:border-b-2 border-blue-500 hover:scale-110 duration-200 ease-in-out'}
                  >Contact</li>
                </Link>
              </ul>

              {/* Hamburger Icon */}
              <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25} />
              </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div className={nav ? 'fixed left-[] top-0 w-full h-screen bg-black/70' : ''}>

          {/* Side Drawer Menu */}
          <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
            <div>
              <div className='flex w-full items-center justify-between'>
                <Link onClick={() => setNav(false)} href='/'>
                  <Image src={Navlog} width='85' height='85' alt='/' />
                </Link>
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                  <AiOutlineClose />
                </div>
              </div>
              <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>Let's Handle Your Cloud-Based Needs</p>
              </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/'>
                  <li onClick={() => setNav(false)} id='home' className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/about'>
                  <li onClick={() => setNav(false)} id='about' className='py-4 text-sm'>About</li>
                </Link>
                <Link href='/services'>
                  <li onClick={() => setNav(false)} id='services' className='py-4 text-sm'>Services</li>
                </Link>
                <Link href='/casestudies'>
                  <li onClick={() => setNav(false)} id='casestudies' className='py-4 text-sm'>Case Studies</li>
                </Link>
                <Link href='/contact'>
                  <li onClick={() => setNav(false)} id='contact' className='py-4 text-sm'>Contact</li>
                </Link>
                  
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">Let's Handle Your Cloud-Based Needs</p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar