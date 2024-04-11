import React from 'react'

function ReviewCard({review}) {
    const { username, location, title, date, review_description } = review;
  return (
    <div className='pt-16'>
      <div className="flex  items-center justify-between pb-10 ">
        <div>
        <p className='text-lg font-bold'> {username}</p>
      <p className='text-lg font-bold text-gray-300'>{location}</p>
        </div>
        <div className='flex flex-col space-y-4'>
        <h3 className='text-3xl font-bold items-center justify-center flex'>{title}</h3>

        <p className='font-bold'>{review_description}</p>

        </div>
        <div>
        <p><strong></strong> {date}</p>

        </div>
       
    </div>
    <hr className='border border-black' />

    </div>
  )
}

export default ReviewCard
