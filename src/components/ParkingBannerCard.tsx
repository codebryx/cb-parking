import React from 'react'
interface ParkingBannerCardProps{
    img:string,
    imgNum:string,
    heading:string,
    text:string
}
const ParkingBannerCard:React.FC <ParkingBannerCardProps> = ({img,imgNum,heading,text}) => {
  return (
    <div className='bg-slate-100 py-3 px-6 text-left mr-4 w-1/3'>
        <div className='flex justify-between items-center'>
            <div className='w-20'><img src={img} alt='laptop'/></div>
            <span className='text-slate-300 text-4xl font-bold'>{imgNum}</span>
        </div>
        <h6 className='font-bold text-sm py-2'>{heading}</h6>
        <span className='text-sm w-60 block'>{text}</span>
    </div>
  )
}
export default ParkingBannerCard