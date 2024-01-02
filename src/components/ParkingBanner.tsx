import React, { ChangeEvent, useState } from "react";
import ParkingBannerCard from "./ParkingBannerCard";

const ParkingBanner = () => {
  const [hour, setHour] = useState(true);
  const [month, setMonth] = useState(false);
  const [zidCode, setZibCode] = useState("");

  const img = [
    `${process.env.PUBLIC_URL}/assets/images/laptop.svg`,
    `${process.env.PUBLIC_URL}/assets/images/laptop.svg`,
    `${process.env.PUBLIC_URL}/assets/images/laptop.svg`,
  ];

  const imgNum = ["01", "02", "03"];
  const heading = ["Search For Spaces", "Book Your Space", "Arrive And Park"];
  const text = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero, natus vero, reprehenderit",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero, natus vero, reprehenderit",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero, natus vero, reprehenderit",
  ];

  const parkInZibCode = (e: ChangeEvent<HTMLInputElement>) => {
    setZibCode(e.target.value);
  };

  const HourFun = () => {
    setHour(true);
    setMonth(false);
  };
  const monthFun = () => {
    setHour(false);
    setMonth(true);
  };
  return (
    <div className="bg-image bg-cover bg-center h-screen flex flex-col">
      <div className="flex flex-col w-4/5 m-auto justify-center items-center my-60">
        <div className="flex justify-center items-center">
          <hr className="border-1 border-white w-20 mr-2" />
          <h6 className="text-white font-bold">Online Parking</h6>
          <hr className="border-1 border-white w-20 ml-2" />
        </div>
        <h1 className="font-bold text-white text-4xl py-4 w-1/2">
          Best Parking Spaces For Your Vechicles
        </h1>
        <div className="flex bg-blue-500 py-2 px-5 rounded-full justify-center items-center">
          <div className="w-4 mr-1">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/send.svg`}
              alt="sendIcon"
            />
          </div>
          <button className="text-white font-bold text-sm">
            Find Parking Near Me
          </button>
        </div>
      </div>
      <div className="bg-blue-500 h-64 w-full">
        <div className="w-4/5 m-auto relative">
          <div className="absolute bottom-44 w-full">
            <div className="flex w-full">
              {img.map((img, index) => (
                <ParkingBannerCard
                  key={index}
                  img={img}
                  imgNum={imgNum[index]}
                  heading={heading[index]}
                  text={text[index]}
                />
              ))}
            </div>
          </div>
          <div className="text-left h-64 flex flex-col justify-end">
            <h1 className="font-bold text-3xl py-4 text-white">
              Find Your Parking Space
            </h1>
            <div className="flex items-center">
              <div className="flex h-20 items-center mr-4">
                <button
                  className={`text-white font-bold text-sm py-2 px-5 ${
                    hour
                      ? "bg-blue-500 border-blue-900 border-1 border"
                      : "bg-blue-900 border-blue-900 border-1 border"
                  }`}
                  onClick={HourFun}
                >
                  Hourly
                </button>
                <button
                  className={`text-white font-bold text-sm py-2 px-5 ${
                    month
                      ? "bg-blue-500 border-blue-900 border-1 border"
                      : "bg-blue-900 border-blue-900 border-1 border"
                  }`}
                  onClick={monthFun}
                >
                  Monthly
                </button>
              </div>
              <div className="w-1/3 flex bg-white py-2 mr-4">
                <div className="w-4 mx-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/location.svg`}
                    alt="location"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address, Place, City or Zib Code"
                  className="px-2 text-black text-sm focus:right-0 outline-none"
                  onChange={parkInZibCode}
                  value={zidCode}
                />
              </div>
              <div className="flex w-1/4 bg-white py-1 mr-4 justify-between px-4 items-center">
                <span className="block text-sm">From</span>
                <input type="time" className="focus:right-0 outline-none"/>
              </div>
              <button className="py-2 bg-blue-900 px-8 text-white font-bold text-sm w-1/5">
                Search Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ParkingBanner;
