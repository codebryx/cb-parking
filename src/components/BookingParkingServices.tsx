import React from "react";
import BookingParkingServiceCard from "./BookingParkingServiceCard";

const BookingParkingServices = () => {
  const icons = [
    `${process.env.PUBLIC_URL}/assets/images/car.svg`,
    `${process.env.PUBLIC_URL}/assets/images/car.svg`,
    `${process.env.PUBLIC_URL}/assets/images/car.svg`,
    `${process.env.PUBLIC_URL}/assets/images/car.svg`,
    `${process.env.PUBLIC_URL}/assets/images/car.svg`,
    `${process.env.PUBLIC_URL}/assets/images/car.svg`,
  ];
  const heading = [
    "Self Parking",
    "Self Parking",
    "Valet Parking",
    "Garage Parking",
    "Airport Parking",
    "Event Parking",
  ];

  const text = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur eveniet quae laudantium? Commodi perferendis.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur eveniet quae laudantium? Commodi perferendis.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur eveniet quae laudantium? Commodi perferendis.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur eveniet quae laudantium? Commodi perferendis.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur eveniet quae laudantium? Commodi perferendis.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur eveniet quae laudantium? Commodi perferendis.",
  ];
  return (
    <div className="w-4/5 m-auto">
      <div className="h-64 flex justify-end items-center flex-col mb-12">
        <div className="mt-12">
          <span className="text-sky-500 font-bold">Our Services</span>
          <h1 className="text-4xl font-bold">Our Parking Services</h1>
        </div>
      </div>
      <div className="flex flex-wrap">
        {icons.map((icon, index) => (
          <BookingParkingServiceCard
            key={index}
            heading={heading[index]}
            text={text[index]}
            icon={icon}
          />
        ))}
      </div>
      <div className="h-48">
      </div>
    </div>
  );
};
export default BookingParkingServices;
