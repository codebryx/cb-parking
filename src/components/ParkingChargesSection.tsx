import React from "react";
import ParkingChargesCard from "./ParkingChargesCard";

const ParkingChargesSection = () => {
  const headingArr = ["Self Parking Lots", "Valet Parking"];
  const list = ["listtt", "list2"];
  const price = ["75.00", "95.00"];
  return (
    <div className="car-parking-bg bg-center bg-cover h-96 relative">
      <div className="w-4/5 m-auto h-96 flex items-center ">
        <div>
          <div className="pb-2">
            <button className="font-bold w-20 p-0.5 text-sm bg-inherit text-white border">
              Monthly
            </button>
            <button className="font-bold w-20 p-0.5 text-sm bg-inherit text-white border">
              Yearly
            </button>
          </div>
          <h1 className="font-bold text-4xl text-white pb-4 w-4/5">
            Our Parking Charges
          </h1>
          <button className="p-2 border boder-white w-32 font-bold text-sm text-white">
            GET A QUOTES
          </button>
        </div>
      </div>
      <div className="absolute right-52 top-28 flex">
        {headingArr.map((heading, index) => (
          <ParkingChargesCard
            key={index}
            heading={heading}
            list={list[index]}
            price={price[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default ParkingChargesSection;
