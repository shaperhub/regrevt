import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Navlog from '../public/assets/RTLogo1notitle.png'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed w-full h-16 bg-white shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link className='pt-4' href='/'>
                <Image src={Navlog} alt="/" width='120' height='120' />
            </Link>
            <div>
              <ul className='hidden md:flex pr-4'>
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
                {/* <Link href='/casestudies'>
                  <li id='casestudies' 
                  className={router.pathname == '/casestudies' 
                  ? 'active ml-10 p-0.5 text-sm uppercase hover:border-b-2 border-blue-500 hover:scale-110 duration-200 ease-in-out' 
                  : 'ml-10 p-0.5 text-sm uppercase hover:border-b-2 border-blue-500 hover:scale-110 duration-200 ease-in-out'}
                  >Case Studies</li>
                </Link> */}
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
          <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-105%] top-0 p-10 ease-in duration-500'}>
            <div>
              <div className='flex w-full items-center justify-between'>
                <Link onClick={() => setNav(false)} href='/' className='pt-4 -ml-8'>
                  <Image src={Navlog} width='105' height='105' alt='/' />
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
                {/* <Link href='/casestudies'>
                  <li onClick={() => setNav(false)} id='casestudies' className='py-4 text-sm'>Case Studies</li>
                </Link> */}
                <Link href='/contact'>
                  <li onClick={() => setNav(false)} id='contact' className='py-4 text-sm'>Contact</li>
                </Link>
                  
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar