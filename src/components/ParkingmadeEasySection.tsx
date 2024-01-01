import React from "react";
import ParkingmadeeasyCard from "./ParkingmadeeasyCard";

const ParkingmadeEasySection = () => {
  const cardImage = [
    `${process.env.PUBLIC_URL}/assets/images/banner.jpg`,
    `${process.env.PUBLIC_URL}/assets/images/banner.jpg`,
    `${process.env.PUBLIC_URL}/assets/images/banner.jpg`,
  ];
  const cHeading = [
    "Pre Book Your Space",
    "Quick & Easy Parking",
    "Safe & Secure",
  ];
  const cText = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nihil aliquam veniam possimus iste, magni quod natus minus accusamus, odit vero doloremque ullam laudantium dolorem perspiciatis, eaque explicabo exercitationem suscipit!",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nihil aliquam veniam possimus iste, magni quod natus minus accusamus, odit vero doloremque ullam laudantium dolorem perspiciatis, eaque explicabo exercitationem suscipit!",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nihil aliquam veniam possimus iste, magni quod natus minus accusamus, odit vero doloremque ullam laudantium dolorem perspiciatis, eaque explicabo exercitationem suscipit!",
  ];
  return (
    <div>
      <div className="h-44 flex justify-center items-center flex-col">
        <span className="text-sky-800 font-bold">Why choose Parkin</span>
        <h1 className="text-4xl">Parking Made Easy</h1>
      </div>
      <div className="flex h-96 justify-center">
        {cardImage.map((cImg, index) => (
          <ParkingmadeeasyCard
            key={index}
            cardImg={cImg}
            cardHeading={cHeading[index]}
            cardText={cText[index]}
          />
        ))}
      </div>
    </div>
  );
}
export default ParkingmadeEasySection