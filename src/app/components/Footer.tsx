import React from 'react'
import Link from 'next/link'
import { PiWarehouse } from 'react-icons/pi'
import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  const footerSocials = [
    { id: 1, symbol: FaFacebookF},
    { id: 2, symbol: FaXTwitter},
    { id: 3, symbol: FaYoutube},
    { id: 4, symbol: FaInstagram},
    { id: 5, symbol: FaLinkedin},
  ]
  const footerRenterLinks = [
    { id: 1, link: "Advertisers"},
    { id: 2, link: "List a Property"},
    { id: 3, link: "Seller Portal"},
    { id: 4, link: "Customer Portal"},
    { id: 5, link: "Offices For Rent"},
  ]
  const footerAboutLinks = [
    { id: 1, link: "About Us"},
    { id: 2, link: "Careers"},
    { id: 3, link: "Contact"},
    { id: 4, link: "Privacy Notice"},
    { id: 5, link: "Sitemap"},
    { id: 6, link: "Accessibility"},
  ]
  const footerNeighborhoods = [
    { id: 1, link: "Brooklyn"},
    { id: 2, link: "Los Angeles"},
    { id: 3, link: "Chicago"},
    { id: 4, link: "Milwaukee"},
    { id: 5, link: "Minneapoolis"},
    { id: 6, link: "Dallas"},
    { id: 7, link: "Columbus"},
  ]

  return (
    <div className='pt-20 pb-12 bg-blue-950'>
      <div className='w-4/5 mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8
      border-b-2 border-white border-opacity-20'>
        <div className='flex flex-col md:flex-row gap-28'>
          <div className='flex flex-col'>
            <Link href="/" className='flex items-center space-x-2'>
              <PiWarehouse className='text-2xl text-white' />
              <h1 className='text-white font-bold text-sm sm:text-base'>HomeHub</h1>
            </Link>
            <p className='text-gray-400 mt-6 text-sm'>The best place to buy, sell, and rent properties from all over the U.S.</p>
            <div className='flex items-center space-x-4 mt-6'>
              { footerSocials.map((social) => {
                return (
                  <div key={social.id} className='w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer'>
                    <social.symbol className='text-xl text-white' />
                  </div>
                )
              })}
            </div>
          </div>

          <div className=''>
            <h1 className='text-lg text-white font-bold mb-6'>Popular Shortcuts</h1>
            { footerRenterLinks.map((link) => {
              return (
                <p key={link.id} className='text-white hover:text-yellow-500 hover:underline cursor-pointer mb-1'>{link.link}</p>
              )
            })}
          </div>

          <div className=''>
            <h1 className='text-lg text-white font-bold mb-6'>Neighborhoods</h1>
            { footerNeighborhoods.map((link) => {
              return (
                <p key={link.id} className='text-white hover:text-yellow-500 hover:underline cursor-pointer mb-1'>{link.link}</p>
              )
            })}
          </div>

          <div className=''>
            <h1 className='text-lg text-white font-bold mb-6'>About Us</h1>
            { footerAboutLinks.map((link) => {
              return (
                <p key={link.id} className='text-white hover:text-yellow-500 hover:underline cursor-pointer mb-1'>{link.link}</p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer