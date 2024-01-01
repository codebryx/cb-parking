import React from 'react'
interface ChooseParkinSubSecProps {
    img:string,
    heading:string,
    text:string;
}
const ChooseParkinSubSec: React.FC <ChooseParkinSubSecProps> = ({img,heading,text}) => {
  return (
    <div className='flex flex-col items-start pb-4 w-1/2'>
      <div className='w-8 pb-2'>
        <img src={img} alt='chooseSecImg'/>
      </div>
      <h6 className='text-white font-bold text-sm pb-2'>{heading}</h6>
      <span className='w-5/6 text-left text-white text-sm'>{text}</span>
    </div>
  )
}
export default ChooseParkinSubSec
