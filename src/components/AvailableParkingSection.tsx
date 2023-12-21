import React from "react";
import AvailableParkingCard from "./AvailableParkingCard";

const AvailableParkingSection = () => {
  const imgArr = [
    `${process.env.PUBLIC_URL}/assets/images/plane.svg`,
    `${process.env.PUBLIC_URL}/assets/images/plane.svg`,
    `${process.env.PUBLIC_URL}/assets/images/plane.svg`,
  ];
  const headingArr = ["Airport Parking", "Overnight Parking", "Events Parking"];
  const subHeadingArr = [
    "Safe and Secure",
    "With more Freedom",
    "Close to the Venue",
  ];
  const textArr = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, in non! Vitae, veritatis optio facilis expedita quae nisi magnam itaque tenetur cupiditate tempore. Veritatis nisi fugiat ab. Tempora, amet quibusdam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, in non! Vitae, veritatis optio facilis expedita quae nisi magnam itaque tenetur cupiditate tempore. Veritatis nisi fugiat ab. Tempora, amet quibusdam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, in non! Vitae, veritatis optio facilis expedita quae nisi magnam itaque tenetur cupiditate tempore. Veritatis nisi fugiat ab. Tempora, amet quibusdam.",
  ];
  return (
    <div className="people-bg-img bg-cover bg-center h-screen">
      <div>
        <div className="h-64 flex flex-col justify-end">
          <span className="font-bold text-sm text-blue-500">
            Available Parking Space
          </span>
          <h1 className="font-bold text-4xl">We Have Over 250,000 Spaces</h1>
        </div>
      </div>
      <div className="flex h-96 items-center w-3/4 m-auto">
        {imgArr.map((icon,index)=>(
      <AvailableParkingCard key={index} img={icon} heading={headingArr[index]} subHeading={subHeadingArr[index]} text={textArr[index]}/>
        ))}
      </div>
    </div>
  );
};
export default AvailableParkingSection;
