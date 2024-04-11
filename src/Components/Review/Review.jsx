import React from 'react'
import reviews from '../../assets/constants/review.json'
import ReviewCard from './ReviewCard'

function Review() {
  return (
    <div className="">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  )
}

export default Review
