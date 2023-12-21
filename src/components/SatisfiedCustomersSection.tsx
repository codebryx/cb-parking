import React from 'react'
import SatisfiedCustomerCard from './SatisfiedCustomerCard';

const SatisfiedCustomersSection = () => {
    const textArr = [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur fugit eos voluptatibus temporibus atque consequatur, dolorem iure fuga recusandae nesciunt minima praesentium quae impedit quaerat labore aperiam, saepe, consectetur quasi?",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur fugit eos voluptatibus temporibus atque consequatur, dolorem iure fuga recusandae nesciunt minima praesentium quae impedit quaerat labore aperiam, saepe, consectetur quasi?",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur fugit eos voluptatibus temporibus atque consequatur, dolorem iure fuga recusandae nesciunt minima praesentium quae impedit quaerat labore aperiam, saepe, consectetur quasi?",
    ]
    const imgArr = [
        `${process.env.PUBLIC_URL}/assets/images/user.svg`,
        `${process.env.PUBLIC_URL}/assets/images/user.svg`,
        `${process.env.PUBLIC_URL}/assets/images/user.svg`,
    ]
    const nameArr = [
        "Rahul Dravid",
        "Williams Jones",
        "Mitchel Johnson"
    ]
    const cityArr = [
        "Sydney",
        "Sydney",
        "Sydney",
    ]
    const ratingArr = [
        `${process.env.PUBLIC_URL}/assets/images/rating.png`,
        `${process.env.PUBLIC_URL}/assets/images/rating.png`,
        `${process.env.PUBLIC_URL}/assets/images/rating.png`,
    ]
  return (
    <div className='bg-slate-100 p-16 flex justify-center items-center flex-col'>
        <div>
            <h6 className='font-bold text-sm text-blue-700 pb-2'>Satisfied Customers</h6>
            <h1 className='font-bold text-3xl pb-12'>More Than 3000+ Customers</h1>
        </div>
        <div className='flex w-4/5 m-auto'>
            {textArr.map((text,index)=>(
        <SatisfiedCustomerCard key={index} text={text} img={imgArr[index]} name={nameArr[index]} city={cityArr[index]} rating={ratingArr[index]}/>
            ))}
        </div>
    </div>
  )
}
export default SatisfiedCustomersSection;