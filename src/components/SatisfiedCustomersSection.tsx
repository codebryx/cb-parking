import React from 'react'
import SatisfiedCustomerCard from './SatisfiedCustomerCard';

const SatisfiedCustomersSection = () => {
    const satisfiedCustObj = [
        {
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur fugit eos voluptatibus temporibus atque consequatur, dolorem iure fuga recusandae nesciunt minima praesentium quae impedit quaerat labore aperiam, saepe, consectetur quasi?",
            img:`${process.env.PUBLIC_URL}/assets/images/user.svg`,
            name:"Rahul Dravid",
            city:"Sydney",
            rating:[`${process.env.PUBLIC_URL}/assets/images/rating.png`,`${process.env.PUBLIC_URL}/assets/images/rating.png`,`${process.env.PUBLIC_URL}/assets/images/rating.png`]
        },
        {
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur fugit eos voluptatibus temporibus atque consequatur, dolorem iure fuga recusandae nesciunt minima praesentium quae impedit quaerat labore aperiam, saepe, consectetur quasi?",
            img:`${process.env.PUBLIC_URL}/assets/images/user.svg`,
            name:"Williams Jones",
            city:"Sydney",
            rating:[`${process.env.PUBLIC_URL}/assets/images/rating.png`,`${process.env.PUBLIC_URL}/assets/images/rating.png`]
        },
        {
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur fugit eos voluptatibus temporibus atque consequatur, dolorem iure fuga recusandae nesciunt minima praesentium quae impedit quaerat labore aperiam, saepe, consectetur quasi?",
            img:`${process.env.PUBLIC_URL}/assets/images/user.svg`,
            name:"Mitchel Johnson",
            city:"Sydney",
            rating:[`${process.env.PUBLIC_URL}/assets/images/rating.png`,`${process.env.PUBLIC_URL}/assets/images/rating.png`,`${process.env.PUBLIC_URL}/assets/images/rating.png`,`${process.env.PUBLIC_URL}/assets/images/rating.png`]
        }
    ]

  return (
    <div className='bg-slate-100 p-16 flex justify-center items-center flex-col'>
        <div>
            <h6 className='font-bold text-sm text-blue-700 pb-2'>Satisfied Customers</h6>
            <h1 className='font-bold text-3xl pb-12'>More Than 3000+ Customers</h1>
        </div>
        <div className='flex w-4/5 m-auto'>
            {satisfiedCustObj.map((item,index)=>(
        <SatisfiedCustomerCard key={index} text={item.text} img={item.img} name={item.name} city={item.city} rating={item.rating}/>
            ))}
        </div>
    </div>
  )
}
export default SatisfiedCustomersSection;