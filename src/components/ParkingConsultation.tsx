import React, { ChangeEvent, useState } from "react";

const ParkingConsultation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [year, setYear] = useState("");
  const yearList = ["2000", "2001", "2002", "2003", "2004"];
  const fNameFun = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("name", e.target.value);
    setFirstName(e.target.value);
  };

  const lNameFun = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("name", e.target.value);
    setLastName(e.target.value);
  };

  const yearFun = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("name", e.target.value);
    setYear(e.target.value);
  };

  const messageFun = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  return (
    <div className="flex h-full">
      <div className="w-3/5 p-8 flex flex-col text-left">
        <h6 className="font-bold text-blue-500 text-sm">Free Consultation</h6>
        <h1 className="font-bold text-2xl py-3">Get A Free Quote</h1>
        <div className="flex pt-2">
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Full Name"
              className="text-sm text-slate-400 px-3 flex justify-start items-center border-slate-400 border py-2 shadow-md focus:border-none target:border-none"
              value={firstName}
              onChange={fNameFun}
            />
          </div>
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Last Name"
              className="text-sm text-slate-400 px-3 flex justify-start items-center border-slate-400 border py-2 shadow-md"
              value={lastName}
              onChange={lNameFun}
            />
          </div>
        </div>
        <div className="flex py-6">
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Full Name"
              className="text-sm text-slate-400 px-3 flex justify-start items-center border-slate-400 border py-2 shadow-md"
            />
          </div>
          <div className="w-1/2">
            <input
              type="yearList"
              placeholder="Year"
              className="text-sm text-slate-400 px-3 flex justify-start items-center border-slate-400 border py-2 shadow-md"
              value={year}
              onChange={yearFun}
            />
          </div>
        </div>
        <div className="w-93 h-96">
          <input
            type="text"
            placeholder="Message"
            className="w-full h-full text-sm text-slate-400 border-slate-400 border px-3 py-2 shadow-md"
            value={message}
            onChange={messageFun}
          />
        </div>
      </div>
      <div className="w-2/5">
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/banner.jpg`}
            alt="quoteImg"
          />
        </div>
      </div>
    </div>
  );
};
export default ParkingConsultation;
