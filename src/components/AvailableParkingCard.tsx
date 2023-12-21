import React from 'react'
interface AvailableParkingCardProps {
    img: string,
    heading: string,
    subHeading: string,
    text: string
}
const AvailableParkingCard:React.FC<AvailableParkingCardProps> = ({img,heading,subHeading,text}) => {
  return (
    <div className='w-1/3'>
        <div className='mr-8'>
        <div className='flex items-center'>
            <div className='w-12 pr-4'><img src={img} alt='planeImg'/></div>
            <div>
                <h6 className='text-lg font-bold'>{heading}</h6>
                <h6 className='text-sm text-blue-700 font-bold text-left'>{subHeading}</h6>
            </div>
        </div>
        <hr className='border border-slate-500 my-8'/>
        <span className='pb-2 text-sm text-left block'>{text}</span>
        <button className='p-2 border border-white-900 rounded-full font-bold text-white text-sm block w-1/2'>View Pricing</button>
        </div>
    </div>
  )
}
export default AvailableParkingCard