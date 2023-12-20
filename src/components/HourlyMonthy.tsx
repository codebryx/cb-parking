import React, { useState,ChangeEvent } from 'react'

const HourlyMonthy = () => {
    const [zidCode, setZibCode]=useState("");

    const parkInZibCode = (e: ChangeEvent<HTMLInputElement>) => {
        setZibCode(e.target.value)
    }
  return (
    <div className='flex'>
        <div className='w-96'>
            <input placeholder='Address, Place, City or Zib Code' className='border border-gray-300 h-10 p-2 text-black w-11/12' onChange={parkInZibCode} value={zidCode}/>
        </div>
        <div>
            <input type='date'className='border border-gray-300 h-10 p-2 text-black w-11/12'/>
        </div>
        <div className='w-1/3'>
        <button className='h-10 p-2 text-white w-11/12 bg-blue-500 border rounded-md'>Search Now</button>
        </div>
    </div>
  )
}
export default HourlyMonthy;
