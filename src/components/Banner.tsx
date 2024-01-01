import React from 'react'

const Banner = () => {
  return (
    <div className='bg-image bg-cover bg-center h-35 flex'>
    <div className='flex flex-col w-9/12 m-auto pl-6'>
        <h1 className='text-white text-3xl font-bold text-left w-5/12 pb-4'>Find an Amazing Parking Space Near You</h1>
        <span className='text-white text-left w-3/6 pb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas blanditiis minima nisi nihil officiis, labore eligendi. Quia expedita nobis dolore ipsa reprehenderit excepturi, et possimus repudiandae corrupti neque aliquam!</span>
        <button className='text-white bg-blue-500 w-56 h-10 rounded-lg'>Show Parking Spaces</button>
    </div>
    </div>
  )
}
export default Banner;