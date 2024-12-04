'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import ReviewCard from './ReviewCard'
import "react-multi-carousel/lib/styles.css"
import { userReviews } from '../data/data'

const ReviewSlider = () => {

  const responsiveCarousel = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }
  
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={8000}
      infinite
      responsive={responsiveCarousel}
    >
      { userReviews.map((review) => {
        return (
          <div key={review.id}>
            <ReviewCard review={review}/>
          </div>
        )
      })}
    </Carousel>
  )
}

export default ReviewSlider