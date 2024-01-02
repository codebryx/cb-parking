import React, { useState, ChangeEvent } from "react";

const HourlyMonthy = () => {
  const [zidCode, setZibCode] = useState("");

  const parkInZibCode = (e: ChangeEvent<HTMLInputElement>) => {
    setZibCode(e.target.value);
  };
  return (
    <div className="flex">
      <div className="w-full flex border border-gray-300 mx-2 items-center">
        <div className="w-8 flex justify-center">
          <div className="w-4">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/location.svg`}
              alt="locationImg"
            />
          </div>
        </div>
        <input
          placeholder="Address, Place, City or Zib Code"
          className=" h-10 px-2 text-black w-11/12 text-sm focus:ring-0 outline-none"
          onChange={parkInZibCode}
          value={zidCode}
        />
      </div>
      <div className="w-1/3">
        <input
          type="time"
          placeholder="FROM"
          className="w-full border border-gray-300 h-10 p-2 text-slate-400 focus:ring-0 outline-none"
        />
      </div>
      <div className="w-1/3">
        <button className="h-10 p-2 text-white w-11/12 bg-blue-500 border rounded-md">
          Search Now
        </button>
      </div>
    </div>
  );
};
export default HourlyMonthy;
