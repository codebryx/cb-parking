import React, { useEffect, useState } from "react";
import ServingCard from "./ServingCard";

const ServingSection = () => {
  const imgArr = [
    `${process.env.PUBLIC_URL}/assets/images/banner.jpg`,
    `${process.env.PUBLIC_URL}/assets/images/banner.jpg`,
    `${process.env.PUBLIC_URL}/assets/images/banner.jpg`,
  ];
  const headingArr = [
    "Commercial Property",
    "Hotels $ Hospitality",
    "Operators & Enforcers",
  ];
  const servicesBtns = ["France", "Spain", "Italy", "Portugal", "Germany"];
  const servicesList0 = [
    "Barcelona",
    "Seville",
    "Girona",
    "Zarogoza",
    "Bilbao",
    "Malaga",
    "Segovia",
    "Santander",
    "Grando",
    "Alicante",
    "Manises",
    "Valencia",
  ];
  const servicesList1 = [
    "Barcelona",
    "Seville",
    "Girona",
    "Zarogoza",
    "Bilbao",
    "Malaga",
    "Segovia",
    "Santander",
    "Grando",
    "Alicante",
    "Manises",
    "Valencia",
    "hello",
  ];
  const [btn0, setBtn0] = useState(true);
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);
  const servicesBtn = (id: number) => {
    // console.log("===id", id);
    if (id === 0) {
      setBtn0(true);
      setBtn1(false);
      setBtn2(false);
      setBtn3(false);
      setBtn4(false);
    } else if (id === 1) {
      setBtn0(false);
      setBtn1(true);
      setBtn2(false);
      setBtn3(false);
      setBtn4(false);
    } else if (id === 2) {
      setBtn0(false);
      setBtn1(false);
      setBtn2(true);
      setBtn3(false);
      setBtn4(false);
    } else if (id === 3) {
      setBtn0(false);
      setBtn1(false);
      setBtn2(false);
      setBtn3(true);
      setBtn4(false);
    } else if (id === 4) {
      setBtn0(false);
      setBtn1(false);
      setBtn2(false);
      setBtn3(false);
      setBtn4(true);
    } else {
      setBtn0(false);
      setBtn1(false);
      setBtn2(false);
      setBtn3(false);
      setBtn4(false);
    }
  };

  return (
    <div>
      <div className="h-40 flex flex-col justify-end">
        <h6 className="font-bold text-blue-900 text-sm">Our Presence</h6>
        <h1 className="font-bold text-4xl pb-8">Area We Serving</h1>
      </div>
      <div className="flex w-4/5 m-auto">
        {imgArr.map((img, index) => (
          <ServingCard key={index} img={img} heading={headingArr[index]} />
        ))}
      </div>
      <div className="pt-12 flex flex-col justify-center items-center">
        <div className="flex">
          {servicesBtns.map((btn, id) => (
            <button
              className={`border border-blue-600 p-3 ${
                (btn0 && id === 0) ||
                (btn1 && id === 1) ||
                (btn2 && id === 2) ||
                (btn3 && id === 3) ||
                (btn4 && id === 4)
                  ? "bg-blue-600 text-white"
                  : "text-blue-600"
              } rounded-md w-28 mr-1`}
              onClick={() => servicesBtn(id)}
              key={id}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="">
          {btn0 && (
            <ul className="list-disc flex flex-wrap w-1/2 m-auto">
              {servicesList0.map((item) => (
                <li className="p-12 pl-0 pb-4">{item}</li>
              ))}
            </ul>
          )}
          {btn1 && (
            <ul className="list-disc flex flex-wrap w-1/2 m-auto">
              {servicesList1.map((item) => (
                  <li className="p-12 pl-0 pb-4">{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default ServingSection;
