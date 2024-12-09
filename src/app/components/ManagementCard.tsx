import React from 'react'
import Image from 'next/image'
import { FaRegHeart, FaHeart } from 'react-icons/fa6'

type managementProps = {
    property: {
        id: number,
        name: string,
        logo: string,
        units: number,
        communities: number,
        cities: number,
    }
}

const ManagementCard = ({property}: managementProps) => {
  return (
    <div className='w-[350px] bg-white border-2 border-gray-200 overflow-hidden group rounded-lg cursor-pointer hover:shadow-xl'>
        <div className='relative'>
            <Image width={300} height={300} src={property.logo} alt={property.name}
                className='w-full object-fit'
            />
        </div>
    </div>
  )
}

export default ManagementCard