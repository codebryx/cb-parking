import React from 'react'
interface ServiceCardProps {
    icon:string,
    heading:string,
    text:string,
}
const ServiceCard:React.FC<ServiceCardProps> = ({icon,heading,text}) => {
  return (
    <div className='flex items-center flex-col border bg-white border-slate-300 h-72 justify-center w-1/2'>
        <div>
            <div className='w-8 pb-3'><img src={icon} alt='serviceCardIcon'/></div>
        </div>
        <h6 className='font-bold text-sm pb-3'>{heading}</h6>
        <span className='text-sm text-gray-800 pb-3 w-11/12'>{text}</span>
        <button className='border border-slate-300 p-2 w-1/3'>Learn More</button>
    </div>
  )
}
export default ServiceCard;
