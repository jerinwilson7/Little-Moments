import React from 'react'
import { AiFillPlusCircle, AiFillStar, AiOutlineArrowRight, AiOutlineHeart } from 'react-icons/ai'
import { BsShare } from 'react-icons/bs'
import Review from '../Review/Review'

function Destinations() {
    return (
        <div className='pl-20 pt-5 pr-20 flex-row'>
            <div className='flex space-x-4'>

                <div className="w-1/2 h-auto rounded-r-lg bg-cover bg-center p-4" style={{ backgroundImage: `url('https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}>
                    <div className='flex-col flex '>

                        <div className='items-center justify-end flex'>
                            <h2 className='bg-yellow-400 pl-2 pr-2 text-base border-2 border-black font-semibold rounded-xl'>Popular</h2>
                        </div>
                    
                    </div>

                </div>
                <div className='grid grid-cols-2 gap-3 w-1/2 '>
                    <img src="https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" className='w-full h-auto rounded-lg' />
                    <img src="https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" className='w-full h-auto rounded-lg' />
                    <img src="https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" className='w-full h-auto rounded-lg' />
                    <img src="https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" className='w-full h-auto rounded-lg' />

                </div>

            </div>

            <div className='mt-9 bg-white p-5  border-2 border-black rounded-md'>

                <div className='flex items-center justify-between '>
                    <div className='flex space-x-4'>
                        <h3>4.9</h3>
                        <h3>(231 Reviews)</h3>
                    </div>
                    <div className='flex space-x-4'>
                        <button className='bg-cream p-4 border-2 border-black rounded-md '>
                            <AiOutlineHeart />
                        </button>

                        <button className='bg-cream p-4 border-2 border-black rounded-md '>
                            <BsShare />
                        </button>

                    </div>
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <div className='space-y-4 flex-1'>

                        <h1 className='text-4xl font-extrabold text-black'>TSUKISHIMA MONJA STREET</h1>
                        <h3 className='font-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h3>
                        <div className='flex space-x-7'>
                            <h3>texas</h3>
                            <h3>123456789</h3>
                        </div>
                    </div>
                    <h3>october 4, 2021</h3>
                </div>

            </div>

            {/* OVERVIEW */}

            <div className='mt-10 flex'>
                <div className=' w-2/3 space-y-6'>
                    <div className='flex justify-between' >
                        <div className='space-y-4'>

                            <h1 className='text-3xl font-extrabold '>OVERVIEW</h1>
                            <h3 className='font-semibold'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                        </div>

                        <div className='pl-5'><AiFillPlusCircle size={30} /></div>
                    </div>
                    <hr className='border border-black' />
                    <div className='flex justify-between' >
                        <div className=''>

                            <h1 className='text-3xl font-extrabold'>FATURES</h1>

                        </div>

                        <div className='pl-5'><AiFillPlusCircle size={30} /></div>
                    </div>
                    <hr className='border border-black' />
                    <div className='flex justify-between' >
                        <div>

                            <h1 className='text-3xl font-extrabold'>LISTING VIDEOS</h1>

                        </div>

                        <div className='pl-5'><AiFillPlusCircle size={30} /></div>
                    </div>
                    <hr className='border border-black' />
                </div>
                <div className='ml-10 flex-col flex'>
                    <h1 className='text-3xl font-extrabold '>LOCATION</h1>
                    <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1" alt="" srcset=""
                        className='h-60 w-auto rounded-lg border-2 border-black mt-5' />
                </div>
            </div>

            {/* reviews */}

            <div className='pt-10'>
                <div className='pt-16'>
                    <div className='flex flex-col'>
                        <h1 className='text-7xl font-extrabold'>REVIEWS</h1>
                        <div className='items-center flex justify-between'>
                            <div className='flex  space-x-5 items-center justify-center pt-4'>
                                <h2 className='text-5xl font-extrabold'>5.0</h2>
                                <div className='flex-col items-center justify-center flex-1'>
                                    <div className='flex items-center justify-center'>

                                <h2><AiFillStar color='#e3f401 ' size={25}/></h2>
                                <h2><AiFillStar color='#e3f401'size={25}/></h2>
                                <h2><AiFillStar color='#e3f401'size={25}/></h2>
                                <h2><AiFillStar color='#e3f401'size={25}/></h2>
                                <h2><AiFillStar color='#e3f401'size={25}/></h2>
                                    </div>

                                <h2 className='font-extrabold text-gray-300 text-lg'>1,289 reviews</h2>
                                </div>
                            </div>
                            <button className='bg-blue-600 p-5 rounded-xl border-2 shadow-sm shadow-black border-black flex items-center justify-center text-white font-bold space-x-3'>
                                <h3>Write a review</h3>
                                <h3><AiOutlineArrowRight/></h3>
                                </button>
                        </div>
                    </div>
                </div>
                <hr className='border border-black mt-6' />
                <div>
                    <Review/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
