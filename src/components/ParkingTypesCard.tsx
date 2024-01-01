import React from 'react'
interface parkingTypesCardProps {
    img: string;
    subHeading:string,
    heading:string
  }
const ParkingTypesCard:React.FC<parkingTypesCardProps>= ({img,subHeading,heading}) => {
  return (
    <div>
      <div className="flex flex-col justify-center mr-2 relative items-center">
          <div>
            <img src={img} alt="hotelParkingImg" />
          </div>
        <div className='flex bg-slate-100 p-6 flex-col text-left mx-4 absolute top-44 w-72'>
            <h6 className='font-bold text-blue-500 text-xs'>{subHeading}</h6>
            <div className='flex justify-between'>
            <h6 className='text-lg font-bold'>{heading}</h6>
            <div className='w-8'><img src={`${process.env.PUBLIC_URL}/assets/images/arrow.svg`} alt='arrow' className='cursor-pointer'/></div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default ParkingTypesCard