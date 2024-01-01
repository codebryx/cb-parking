import React from "react";
import ParkingEasyCard from "./ParkingEasyCard";

const ParkingEasySec = () => {
    const icon = [`${process.env.PUBLIC_URL}/assets/images/car.svg`,`${process.env.PUBLIC_URL}/assets/images/car.svg`]
    const heading=["Stress Free Booking","Save Money & Time"]
    const text = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit","Lorem ipsum dolor sit, amet consectetur adipisicing elit","Lorem ipsum dolor sit, amet consectetur adipisicing elit."]
  return (
    <div className="flex relative bg-slate-900">
      <div className="w-4/5 bg-slate-900 text-left h-96 flex flex-col justify-center items-center">
        <div className="w-4/5 m-auto flex flex-col text-left pl-6">
          <h6 className="font-bold text-blue-300 text-sm py-2">
            Why Choose Parkin
          </h6>
          <h1 className="text-3xl text-white font-bold pb-8">Parking Made Easy</h1>
          {icon.map((icon,index)=>(
          <ParkingEasyCard key={index} icon={icon} heading={heading[index]} text={text[index]}/>
          ))}
        </div>
      </div>
      <div className="w-full h-96 flex justify-end absolute bottom-10 right-0">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/banner.jpg`}
          className="w-ful"
          alt=""
        />
      </div>
    </div>
  );
};
export default ParkingEasySec;
