import React from 'react'
import Image from 'next/image'
import { FaRegHeart, FaHeart } from 'react-icons/fa6'

type cardProps = {
    property: {
        id: number,
        propertyName: string,
        realtor: string,
        address: string,
        bedrooms: number,
        bathrooms: number,
        size: number,
        price: number,
        listingActive: boolean,
        imageUrl: string
    }
}

const PropertyCard = ({property}: cardProps) => {
  return (
    <div className='w-[350px] bg-white border-2 border-gray-200 overflow-hidden group rounded-lg cursor-pointer hover:shadow-xl'>
        <div className='relative'>
            <Image width={300} height={300} src={property.imageUrl} alt={property.propertyName}
                className='w-full object-fit'
            /> {/* group-hover:scale-110 transition-all duration-300 */}
                <div className='mx-3 my-3 flex flex-col'>
                    <h1 className='text-2xl font-bold'>
                        {property.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </h1>
                    <div className='flex gap-1 items-center'>
                        <p className='font-bold'>{property.bedrooms} <span className='font-normal text-sm'>bds</span></p>
                        <p className='text-xl text-gray-500'> | </p>
                        <p className='font-bold'>{property.bathrooms} <span className='font-normal text-sm'>ba</span></p>
                        <p className='text-xl text-gray-500'> | </p>
                        <p className='font-bold'>{property.size} <span className='font-normal text-sm'>sqft</span></p>
                        <p className='text-xl text-gray-500'> | </p>
                        <p>{property.listingActive ? 'Active' : 'Sold'}</p>
                    </div>
                    <p className='text-lg'>{property.address}</p>
                    <h2 className='text-sm text-gray-500'>{property.realtor}</h2>
                </div>

        </div>
    </div>
  )
}

export default PropertyCard