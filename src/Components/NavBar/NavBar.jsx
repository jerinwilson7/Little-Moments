import React from 'react'

function NavBar() {
  return (
    <nav className='bg-black flex justify-between items-center m-4 rounded-md p-3 pl-6 pr-6'>
        <div className=' flex items-center '>
            <ul className='text-white flex space-x-8'>
                <li>Categories</li>
                <li>Activities Near Me</li>
                <li>Add a Place</li>
            </ul>
        </div>
        <div>
            <button className='text-white'>Start Exploring</button>
        </div>
    </nav>
  )
}

export default NavBar
