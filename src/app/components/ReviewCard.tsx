import React from 'react'
import { FaQuoteRight, FaStar } from "react-icons/fa"
import Image from 'next/image'

type reviewProps = {
    review: {
        id: number
        name: string
        profession: string
        image: string
        review: string
    }
}

const ReviewCard = ({review}: reviewProps) => {
  return (
    <div className='bg-gray-200 rounded-lg m-3 p-4 relative'>
        <FaQuoteRight className='w-8 h-8 absolute top-4 right-4 text-red-600 opacity-20' />
        <div className='mt-6 flex items-center'>
            <FaStar className='w-4 h-4 text-yellow-600'/>
            <FaStar className='w-4 h-4 text-yellow-600'/>
            <FaStar className='w-4 h-4 text-yellow-600'/>
            <FaStar className='w-4 h-4 text-yellow-600'/>
            <FaStar className='w-4 h-4 text-yellow-600'/>
        </div>
        <p className='mt-6 text-base text-gray-600 font-medium'>{review.review}</p>
        <div className='w-full h-[1.2px] bg-gray-600 opacity-10 mt-6 mb-6'></div>
        <div className='flex items-center gap-4'>
            <Image src={review.image} alt={review.name} width={35} height={35} className="rounded-full object-cover max-w-full h-auto" />
            <div>
                <h1 className='font-bold text-gray-800'>{review.name}</h1>
                <p className='text-sm text-gray-500'>{review.profession}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard