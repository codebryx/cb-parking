import React, { useEffect, useState } from "react";
import HourlyMonthy from "./HourlyMonthy";

const HourMonthSection = () => {
  const [mBtn,setMBtn]=useState(false);
  const [hBtn,setHBtn]=useState(false)

  const hourBtn = () => {
    setHBtn(true);
    setMBtn(false);
  }
  const monthBtn = () => {
    setMBtn(true)
    setHBtn(false);
  }
useEffect(()=>{
console.log("===",hBtn,mBtn)
},[mBtn,hBtn])
  return (
    <div className="w-full">
      <div className="m-auto w-full shadow-gray-600 border h-44 ml-0 bg-white">
        <div className="w-11/12 m-auto flex items-center">
          <div className="flex h-20 items-center">
            <button className={`p-2 w-24 border border-blue-400 h-10 ${hBtn? "text-white bg-blue-500" : "text-blue-400"}`} onClick={hourBtn}>
              Hourly
            </button>
            <button className={`p-2 w-24 border border-blue-400 h-10 ${mBtn?"text-white bg-blue-500":"text-blue-400"}`} onClick={monthBtn}>
              Monthly
            </button>
          </div>
          <HourlyMonthy />
        </div>
        <div className="w-11/12">
          <div className="flex justify-center items-center flex-col w-88">
            <span>OR</span>
            <button className="border bg-blue-500 p-3 rounded-full text-white font-bold h-12 w-64">
              Find Parking Near Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HourMonthSection;
