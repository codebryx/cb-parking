import React, { useState } from "react";
import BookingPricingTableCard from "./BookingPricingTableCard";

const BookingPricingTable = () => {
  const [monthly, setMonthly] = useState(true);
  const [yearly, setYearly] = useState(false);
  const pricingParkingObj= [
    {
        pricingHeading:"Self Parking",
        pricingPrice:"$25",
        pricingPriceHeading:"Monthly Parking",
        pricingParkingList: ["Airport Parking","Over NIght Parking","Parking Mangement System"]
    },
    {
        pricingHeading:"Valet Parking",
        pricingPrice:"$45",
        pricingPriceHeading:"Monthly Parking",
        pricingParkingList: ["Airport Parking","Over NIght Parking","Parking Mangement System"]
    },
    {
        pricingHeading:"Transport Vechicles",
        pricingPrice:"$75",
        pricingPriceHeading:"Monthly Parking",
        pricingParkingList: ["Airport Parking","Over NIght Parking","Parking Mangement System"]
    },
  ]

  const monthFun = () => {
    setMonthly(true);
    setYearly(false);
  };
  const yearFun = () => {
    setYearly(true);
    setMonthly(false);
  };
  return (
    <div className="p-12 w-4/5 m-auto flex flex-col justify-center items-center">
        <h6 className="font-bold text-blue-500 text-sm">Pricing Table</h6>
        <h1 className="text-2xl font-bold">Parking Pricing</h1>
      <div className="flex py-12">
        <button
          className={`${
            monthly
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border border-blue-500"
          } text-sm font bold py-1 px-4`}
          onClick={monthFun}
        >
          Monthly
        </button>
        <button
          className={`${
            yearly
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border border-blue-500"
          } text-sm font bold py-1 px-4`}
          onClick={yearFun}
        >
          Yearly
        </button>
      </div>
      <div className="flex w-full">
      {monthly &&
      pricingParkingObj.map((item,index)=>(
        <BookingPricingTableCard key={index} heading={item.pricingHeading} price={item.pricingPrice} priceHeading={item.pricingPriceHeading} parkingList={item.pricingParkingList}/>
      ))}
      </div>
    </div>
  );
};
export default BookingPricingTable;
