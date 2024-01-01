import React from 'react'
import ParkingConsultation from './ParkingConsultation'

const ParkingDriveway = () => {
  return (
    <div className='bg-blue-500 h-80'>
        <div className='w-4/5 m-auto flex justify-center relative'>
        <div className='py-10 h-56'>
            <h1 className='text-white font-bold text-2xl w-96 py-4'>Rent Out Your Driveway, Parking Space or Grage</h1>
            <button className='bg-blue-900 text-white font-bold py-2 px-4 w-42 text-sm rounded'>Get Started Now</button>
        </div>
        <div className='absolute h-96 top-56 bg-white w-full'>
        <ParkingConsultation/>
        </div>
        </div>
    </div>
  )
}
export default ParkingDriveway