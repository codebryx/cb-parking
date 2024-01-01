import React from 'react'
import Notification from './Notification'
// import logo from "../assets/images/logo.svg";

const Header: React.FC = () => {
  return (
        <div className='flex'>
            <div  className=' w-1/3 flex justify-end bg-slate-100'>
            {/* <img src={logo}/> */}
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Logo" className='w-24 md:w-36 lg:w-44 xl:w-48 h-20 md:h-24 cursor-pointer'/>
            </div>
            <div className='w-4/5 flex justify-start'>
            <Notification/>
            </div>
        </div>
  )
}
export default Header
