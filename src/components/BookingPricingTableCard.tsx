import React from 'react'
interface BookingPricingTableCardProps{
    heading:string,
    price:string,
    priceHeading:string,
    parkingList:string[],
}
const BookingPricingTableCard:React.FC <BookingPricingTableCardProps> = ({heading,price,priceHeading,parkingList}) => {
  return (
        <div className='py-8 flex flex-col justify-center items-center shadow-xl border-slate-100 border w-1/3 mr-2'>
            <h6 className='font-bold text-sm text-blue-500 pb-2'>{heading}</h6>
            <div className='bg-slate-300 py-1 w-full'>
                <h1 className='font-bold text-3xl'>{price}</h1>
                <span className='text-sm'>{priceHeading}</span>
            </div>
            <div className='py-4'>
                <ul className='text-sm'>
                    {parkingList.map((item)=>(
                    <li className='py-2'>{item}</li>
                    ))}
                </ul>
            </div>
            <button className='py-1 px-8 bg-blue-500 text-white font-bold rounded'>Book Now</button>
        </div>
  )
}
export default BookingPricingTableCard