import React, { useState } from "react";
import BookingParkingMadeEasySec from "./BookingParkingMadeEasySec";

const BookingBanner = () => {
  const [hourDaily, setHourDaily] = useState(true);
  const [monthly, setMonthly] = useState(false);

  const hourDayFun = () => {
    setHourDaily(true);
    setMonthly(false);
  };

  const monthFun = () => {
    setHourDaily(false);
    setMonthly(true);
  };
  return (
      <div className="bg-image bg-cover bg-center h-screen flex">
        <div className="flex flex-col w-4/5 m-auto">
          <h1 className="text-white text-3xl font-bold text-left w-5/12 pb-4">
            Find Safe & Secure Parking
          </h1>
          <span className="text-white text-left w-3/6 pb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            voluptas blanditiis minima nisi nihil officiis, labore eligendi.
          </span>
          <div className="relative">
            <div className="flex mb-1">
              <button
                className={`w-36 h-10 text-white bg-blue-500 ${
                  hourDaily ? "border-b-4 border-b-blue-900" : "opacity-60"
                } text-sm font-bold`}
                onClick={hourDayFun}
              >
                Hourly/Daily
              </button>
              <button
                className={`w-36 h-10 text-white bg-blue-500 ${
                  monthly ? "border-b-4 border-b-blue-900" : "opacity-60"
                } text-sm font-bold`}
                onClick={monthFun}
              >
                Monthly
              </button>
            </div>
            {hourDaily && (
              <div>
                <div className="h-12 bg-white w-96 flex flex-col items-start justify-center pl-4 mb-1 rounded">
                  <span className="text-slate-600 text-xs">PARKING AT</span>
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    className="text-slate-900 font-bold text-sm focus:ring-0 outline-none"
                  />
                </div>
                <div className="flex w-96 mb-1 rounded">
                  <div className="h-12 bg-white w-1/2 flex flex-col items-start justify-center pl-4">
                    <span className="text-slate-600 text-xs">ARRIVING ON</span>
                    <input
                      type="datetime-local"
                      placeholder="Select Data & Time"
                      className="text-slate-900 font-bold text-sm w-40 focus:ring-0 outline-none"
                    />
                  </div>
                  <div className="h-12 bg-white w-1/2 flex flex-col items-start justify-center pl-4">
                    <span className="text-slate-600 text-xs">LEAVING ON</span>
                    <input
                      type="datetime-local"
                      placeholder="Select Data & Time"
                      className="text-slate-900 font-bold text-sm w-40 focus:ring-0 outline-none"
                    />
                  </div>
                </div>
                <div className="h-9 w-96 bg-blue-900 flex justify-center rounded">
                  <button className="text-white font-bold text-sm">
                    Show Parking Spaces
                  </button>
                </div>
              </div>
            )}
            {monthly && (
              <div>
                <div className="h-12 bg-white w-96 flex flex-col items-start justify-center pl-4 mb-1 rounded">
                  <span className="text-slate-600 text-xs">PARKING AT</span>
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    className="text-slate-900 font-bold text-sm focus:ring-0 outline-none"
                  />
                </div>
                <div className="flex w-96 mb-1 rounded">
                  <div className="h-12 bg-white w-1/2 flex flex-col items-start justify-center pl-4">
                    <span className="text-slate-600 text-xs">ARRIVING ON</span>
                    <input
                      type="datetime-local"
                      placeholder="Select Data & Time"
                      className="text-slate-900 font-bold text-sm w-40 focus:ring-0 outline-none"
                    />
                  </div>
                  <div className="h-12 bg-white w-1/2 flex flex-col items-start justify-center pl-4">
                    <span className="text-slate-600 text-xs">LEAVING ON</span>
                    <input
                      type="datetime-local"
                      placeholder="Select Data & Time"
                      className="text-slate-900 font-bold text-sm w-40 focus:ring-0 outline-none"
                    />
                  </div>
                </div>
                <div className="h-9 w-96 bg-blue-900 flex justify-center rounded">
                  <button className="text-white font-bold text-sm">
                    Show Parking Spaces
                  </button>
                </div>
              </div>
            )}
            <div className="absolute top-72 w-full">
              <BookingParkingMadeEasySec/>
            </div>
          </div>
        </div>
      </div>
  );
};
export default BookingBanner;
