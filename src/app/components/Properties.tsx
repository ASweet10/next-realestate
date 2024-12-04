import React from 'react'
import { properties } from '../data/data'
import PropertyCard from './PropertyCard'
import SectionHeader from './SectionHeader'
import { FaArrowRight } from 'react-icons/fa6'

const Properties = () => {
  return (
    <div className='bg-gray-100'>
        <div className='w-4/5 mx-auto'>
            <SectionHeader header="Explore our Properties" />
            <div className='mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-center'>
                { properties.map((property) => {
                    return (
                        <div key={property.id}>
                            <PropertyCard property={property} />
                        </div>
                    )
                })}
            </div>
            <div className='mt-8'>
                <button className='flex items-center gap-2 px-4 py-3 border-2 border-blue-800 rounded-lg text-blue-800 text-lg'>
                    See more <FaArrowRight />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Properties