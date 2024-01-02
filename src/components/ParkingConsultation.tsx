import React, { ChangeEvent, useEffect, useState } from "react";

const ParkingConsultation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [year, setYear] = useState("");
  const [service, setService] = useState("");
  const [quoteBtn, setQuoteBtn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const yearList = ["2000", "2001", "2002", "2003", "2004"];
  const services = [
    "Valet Parking",
    " Garage Parking",
    "Self Parking",
    "Airport Parking",
    "Event Parking",
  ];
  const fNameFun = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("name", e.target.value);
    setFirstName(e.target.value);
  };

  const lNameFun = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("name", e.target.value);
    setLastName(e.target.value);
  };

  const yearFun = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("year", e.target.value);
    setYear(e.target.value);
  };

  const servicesFun = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("year", e.target.value);
    setService(e.target.value);
  };

  const messageFun = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const quoteFun = () => {
    if (
      firstName === "" &&
      lastName === "" &&
      year === "" &&
      service === "" &&
      message === ""
    ) {
      setQuoteBtn(false);
      console.log("innnnnn");
      setErrorMsg("Please Fill All Entities!");
    } else if (firstName === "") {
      setQuoteBtn(false);
      console.log("fn check");
      setErrorMsg("Please Fill Full Name Field!");
    } else if (lastName === "") {
      setQuoteBtn(false);
      console.log("ln check");
      setErrorMsg("Please Fill Last Name Field!");
    } else if (service === "") {
      setQuoteBtn(false);
      console.log("service check");
      setErrorMsg("Please Select A Service!");
    } else if (year === "") {
      setQuoteBtn(false);
      console.log("year check");
      setErrorMsg("Please Select A Year!");
    } else if (message === "") {
      setQuoteBtn(false);
      console.log("message check");
      setErrorMsg("Please Fill Message Field!");
    } else {
      setQuoteBtn(true);
      console.log("elsee");
      setErrorMsg("");
    }
  };

  useEffect(() => {
    console.log("===quoteBtn", quoteBtn);
  }, [quoteBtn]);
  return (
    <div className="flex h-96">
      <div className="w-3/5 p-4 flex flex-col text-left">
        <h6 className="font-bold text-blue-500 text-sm">Free Consultation</h6>
        <h1 className="font-bold text-2xl py-2">Get A Free Quote</h1>
        <div className="w-11/12">
          <div className="flex pt-1">
            <div className="w-1/2 mr-2">
              <input
                type="text"
                placeholder="Full Name"
                className="text-sm text-slate-400 px-3 flex justify-start items-center border-slate-400 border py-2 shadow-md focus:ring-0 outline-none w-full"
                value={firstName}
                onChange={fNameFun}
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                placeholder="Last Name"
                className="text-sm text-slate-400 px-3 flex justify-start items-center border-slate-400 border py-2 shadow-md w-full focus:ring-0 outline-none"
                value={lastName}
                onChange={lNameFun}
              />
            </div>
          </div>
          <div className="flex py-4">
            <div className="w-1/2 mr-2">
              <select
                className="text-sm text-slate-400 px-3 flex justify-start items-center border-slate-400 border py-2 shadow-md w-full bg-white focus:ring-0 outline-none"
                value={service}
                onChange={servicesFun}
              >
                <option>Types Of Services</option>
                {services.map((serviceOption) => (
                  <option key={serviceOption} value={serviceOption}>
                    {serviceOption}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <select
                className="text-sm text-slate-400 px-3 flex justify-start items-center border-slate-400 border py-2 shadow-md w-full bg-white focus:ring-0 outline-none"
                value={year}
                onChange={yearFun}
              >
                <option>Yearly</option>
                {yearList.map((yearOption) => (
                  <option key={yearOption} value={yearOption}>
                    {yearOption}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full pb-4">
            <textarea
                 onDragStart={(e) => {
                  e.preventDefault();
                  console.log("Drag start prevented");
                  return false;
                }}
              placeholder="Message"
              className="w-full text-sm text-slate-400 border-slate-400 border px-3 py-2 shadow-md focus:ring-0 outline-none"
              rows={5}
              value={message}
              onChange={messageFun}
            />
          </div>
          <div className="pb-4 flex items-center">
            <button
              className={`${
                quoteBtn
                  ? "text-sm text-white bg-blue-500 px-3 py-2 w-36 focus:ring-0 outline-none"
                  : "disabled text-sm text-black bg-slate-300 px-3 py-2 w-36"
              }`}
              onClick={quoteFun}
            >
              Get A Quote
            </button>
            {errorMsg && (
              <div className="flex pl-4 items-center">
                <div className="w-2 h-2 rounded-full bg-red-900 mr-1"></div>
                <span className="text-red-900 font-bold text-sx block">
                  {errorMsg}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-2/5">
        <div className="h-96">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/banner.jpg`}
            alt="quoteImg"
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
};
export default ParkingConsultation;
