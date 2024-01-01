import React from "react";
import RentParkingSpaceCard from "./RentParkingSpaceCard";

const RentParkingSpaceSec = () => {
  const rentImg = [
    `${process.env.PUBLIC_URL}/assets/images/car.svg`,
    `${process.env.PUBLIC_URL}/assets/images/car.svg`,
    `${process.env.PUBLIC_URL}/assets/images/car.svg`
  ]
  const rentHeading = [
    "Create Your Listing",
    "Manage Your Motorists",
    "Get Paid For Your Service"
  ]
  const rentText = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto cupiditate consequuntur deleniti",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto cupiditate consequuntur deleniti",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto cupiditate consequuntur deleniti",
  ]
  return (
    <div>
      <div className="parking-img bg-cover bg-center h-screen flex items-end">
        <div className="w-1/2 flex justify-center items-center h-16 bg-blue-900">
          <div className="w-4/5 m-auto flex justify-around items-center">
            <h6 className="font-bold text-sm text-white">
              Rent Out Your Driveways & Parking Space
            </h6>
            <button className="bg-blue-500 font-bold text-sm text-white rounded py-2 px-4">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-1/2 bg-blue-500 p-16 text-left h-98">
            <h4 className="text-white font-bold text-xl pb-1">Rent Out Your Parking Space</h4>
            <span className="text-white text-sm pb-4 block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est repellat deleniti, quod delectus ad quam dolorum modi molestiae unde minus illo a, voluptate reprehenderit cum saepe quisquam. Adipisci, sed et?</span>
            {rentImg.map((icon,index)=>(
            <RentParkingSpaceCard key={index} img={icon} heading={rentHeading[index]} text={rentText[index]}/>
            ))}
        </div>
      </div>
    </div>
  );
};
export default RentParkingSpaceSec;
