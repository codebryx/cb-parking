import React from "react";
import BookingParkingMadeEasyCard from "./BookingParkingMadeEasyCard";

const BookingParkingMadeEasySec = () => {
    const icons = [
        `${process.env.PUBLIC_URL}/assets/images/home.png`,
        `${process.env.PUBLIC_URL}/assets/images/home.png`,
        `${process.env.PUBLIC_URL}/assets/images/home.png`,
    ]
    const heading = [
        "Pre Book Your Space",
        "Quick & Easy Parking",
        "Safe & Secure Parking",
    ]
  return (
    <div>
      <div className="bg-blue-500 px-12 py-8 flex">
        <div className="w-1/4 text-left">
          <h1 className="text-2xl text-white mb-3 w-44">Parking Made Easy With Parkin</h1>
          <button className="h-10 w-36 border-2 text-white font-bold">
            Get A Quote
          </button>
        </div>
        <div className="w-3/4 flex justify-end">
          {
            icons.map((icon, index)=>(
             <BookingParkingMadeEasyCard key={index} icon={icon} heading={heading[index]}/>   
            ))
          }
        </div>
      </div>
    </div>
  );
};
export default BookingParkingMadeEasySec;
