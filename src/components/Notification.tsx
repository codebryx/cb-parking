import React from "react";
import NotificationAddress from "./NotificationAddress";

export default function Notification() {
  const icons = [
    `${process.env.PUBLIC_URL}/assets/images/loc.jpg`,
    `${process.env.PUBLIC_URL}/assets/images/mail.jpg`,
  ];
  const address = ["123 Megbee St, Sysney, Australia", "Supports@parkin.com"];
  const mediaHandles = [
    `${process.env.PUBLIC_URL}/assets/images/fb.png`,
    `${process.env.PUBLIC_URL}/assets/images/fb.png`,
    `${process.env.PUBLIC_URL}/assets/images/fb.png`,
  ];
  const headerList = [
    "Home",
    "About",
    "Parking",
    "Prices",
    "Careers",
    "Contact Us",
  ];
  return (
    <div className="flex flex-col w-full">
      <div className="h-12 bg-black flex items-center ">
        <div className="w-11/12 m-auto flex">
          <div className="block lg:flex md:w-9/12">
            {icons.map((icon, index) => (
              <NotificationAddress
                key={index}
                icon={icon}
                address={address[index]}
              />
            ))}
          </div>
          <div className="flex items-center">
            {mediaHandles.map((icon, index) => (
              <div className="pr-2" key={index}>
                <img
                  src={icon}
                  className="w-7 cursor-pointer"
                  alt="medialinks"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-12 flex items-center">
        <div className="flex lg:w-85 justify-between m-auto md:h-12 md:w-11/12">
          <div className="md:flex lg:w-93 w-full justify-between items-center">
            <ul className="flex items-center">
              {headerList.map((item) => (
                <li className="pr-2 cursor-pointer md:text-sm text-xs">{item}</li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white md:w-28 w-24 h-6 rounded-3xl md:h-9 md:text-sm text-xs">
              Login Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
