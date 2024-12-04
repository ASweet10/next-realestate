import React from 'react'
import SectionHeader from './SectionHeader'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <div className='py-12'>
      <div className='w-4/5 mx-auto'>
          <SectionHeader header="Client Testimonials" />
          <div className='mt-14'>
            <ReviewSlider />
          </div>
      </div>
    </div>
  )
}

export default Reviews