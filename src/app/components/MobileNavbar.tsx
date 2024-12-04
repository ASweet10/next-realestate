import React from 'react'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

const navLinks = [
  { id: 1, url: '#', title: "Buy" },
  { id: 2, url: '#', title: "Rent" },
  { id: 3, url: '#', title: "Sell" },
  { id: 4, url: '#', title: "About" },
]

const MobileNavbar = () => {
  return (
    <div>
      <div className='transform fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen'>

      </div>
      <div className='transform transition-all duration-500 delay-200 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-red-800 text-white space-y-6 z-[10000]'>
        { navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
                <p className='text-[20px] ml-12 pb-1 w-fit underline sm:text-[30px] text-white hover:text-yellow-300'>
                    {link.title}
                </p>
            </Link>
          )
        })}
        
        <CgClose className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white1' />
      </div>
    </div>
  )
}

export default MobileNavbar