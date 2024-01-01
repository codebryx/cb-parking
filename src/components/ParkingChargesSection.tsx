import React, { useEffect, useState } from "react";
import ParkingChargesCard from "./ParkingChargesCard";

const ParkingChargesSection = () => {
const yearObj = [
    {
        heading:"Self Parking Lots",
        list:["Available 24 Hr","Over Night Parking","Secure Lockup Garage","Park At Airport & Station","Best Seamless Experience"],
        price:"75.00"
    },
    {
        heading:"Valet Parking",
        list:["Available 24 Hr","Over Night Parking","Secure Lockup Garage","Park At Airport & Station","Best Seamless Experience"],
        price:"95.00"
    },
]
const monthObj = [
    {
        heading:"Self Parking Lots",
        list:["Available 24 Hr","Over Night Parking","Secure Lockup Garage","Park At Airport & Station","Best Seamless Experience"],
        price:"75.00"
    },
    {
        heading:"Valet Parking",
        list:["Available 24 Hr","Over Night Parking","Secure Lockup Garage","Park At Airport & Station","Best Seamless Experience"],
        price:"85.00"
    },
]
const [year,setYear]=useState(true);
const [month,setMonth]=useState(false);

const monthList = () => {
    setMonth(true);
    setYear(false);
}
const yearList = () => {
    setYear(true);
    setMonth(false);
}

useEffect(()=>{
    console.log("===yearr",year)
},[year,month])
  return (
    <div className="car-parking-bg bg-center bg-cover h-96 relative">
      <div className="w-4/5 m-auto h-96 flex items-center ">
        <div className="text-left">
          <div className="pb-2 w-9/12 text-left">
            <button className={`font-bold w-20 p-0.5 text-sm border ${month ? "bg-white text-blue-600": "bg-inherit text-white"}`} onClick={monthList}>
              Monthly
            </button>
            <button className={`font-bold w-20 p-0.5 text-sm border ${year ? "bg-white text-blue-600": "bg-inherit text-white"}`} onClick={yearList}>
              Yearly
            </button>
          </div>
          <h1 className="font-bold text-4xl text-white pb-4 w-4/5 text-left">
            Our Parking Charges
          </h1>
          <button className="p-2 border boder-white w-32 font-bold text-sm text-white">
            GET A QUOTES
          </button>
        </div>
      </div>
      <div className="absolute right-52 top-28 flex">
        {year &&
        yearObj.map((item, index) => (
          <ParkingChargesCard
            key={index}
            heading={item.heading}
            list={item.list}
            price={item.price}
          />
        ))}
        {month &&
        monthObj.map((item, index) => (
          <ParkingChargesCard
            key={index}
            heading={item.heading}
            list={item.list}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
export default ParkingChargesSection;
